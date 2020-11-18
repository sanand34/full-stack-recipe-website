import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import "./input.css";
function Input() {
  const [{ user }, dispatch] = useStateValue();
  const [value, setValue] = useState(null);
  useEffect(() => {
    console.log(user);
    db.collection("rooms").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        if (doc.id === user.email) {
          dispatch({
            type: actionTypes.SET_ITEM,
            item: doc.data().food[
              Math.floor(Math.random() * doc.data().food.length)
            ],
          });
        }
      });
    });
  }, []);
  function createAccount() {
    db.collection("rooms")
      .doc(user.email)
      .set({ name: user.displayName, food: [value] });
  }

  return (
    <div className="input">
      <div className="input_img">
        <Avatar
          src={user.photoURL}
          style={{
            height: "200px",
            width: "200px",
            border: "solid",
            borderColor: "white",
          }}
        />
      </div>

      <strong>Welcome,{user.displayName}</strong>
      <br />
      <br />
      <input
        type="input"
        placeholder="Enter Favourite food"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />

      <button
        className="button"
        onClick={() => {
          createAccount();
          dispatch({
            type: actionTypes.SET_ITEM,
            item: value,
          });
        }}
      >
        Create Account
      </button>
    </div>
  );
}

export default Input;

/* useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        console.log(doc.data());
        if (doc.id == user.displayName) {
          dispatch({
            type: actionTypes.SET_ITEM,
            item: doc.data.food,
          });
        }
      });
    });
  }, []); */

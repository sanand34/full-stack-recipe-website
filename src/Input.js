import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import "./input.css";
function Input() {
  const [{ user }, dispatch] = useStateValue();
  const [value, setValue] = useState(null);
  useEffect(async () => {
    const doc = await db.collection("rooms").doc(user.email).get();
    if (!doc.exists) {
      console.log("No Data");
    } else {
      dispatch({
        type: actionTypes.SET_ITEM,
        item: doc.data().food[
          Math.floor(Math.random() * doc.data().food.length)
        ],
      });
    }
  }, []);
  function createAccount() {
    db.collection("rooms")
      .doc(user.email)
      .set({ name: user.displayName, food: [value] });

    dispatch({
      type: actionTypes.SET_ITEM,
      item: value,
    });
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
        }}
      >
        Create Account
      </button>
    </div>
  );
}

export default Input;

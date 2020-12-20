import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { Button, Form } from "react-bootstrap";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
import firebase from "firebase";
function Settings() {
  const [{ user, item }, dispatch] = useStateValue();
  const [value, setValue] = useState(null);
  const [istrue, setIstrue] = useState(false);
  const [history, setHistory] = useState([]);
  const settings = () => {
    db.collection("rooms")

      .doc(user.email)
      .update({ food: firebase.firestore.FieldValue.arrayUnion(value) });
  };
  useEffect(async () => {
    await db
      .collection("rooms")
      .doc(user.email)
      .onSnapshot((snapshot) => {
        setHistory(snapshot.data().food);
      });
  }, [istrue]);

  return (
    <div
      style={{ display: "grid", placeContent: "center", textAlign: "center" }}
    >
      <div
        style={{
          padding: "40px",
          border: "solid",
          borderColor: "grey",
          borderWidth: "1px",
          borderRadius: "20px",
          margin: "40px",
        }}
      >
        <h1>Hello,{user.displayName}</h1>
        <br />
        <h3 style={{ color: "grey" }}>
          Add items to see in your recommendation
        </h3>
        <Form.Control
          type="input"
          placeholder={item}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />

        <Button
          variant="primary"
          style={{ marginTop: "40px" }}
          onClick={() => {
            setIstrue(!istrue);
            settings();
            dispatch({
              type: actionTypes.SET_ITEM,
              item: value,
            });
          }}
        >
          Add
        </Button>
      </div>
      <div
        style={{
          padding: "50px",
          backgroundColor: "grey",
          color: "white",
          borderRadius: "20px",
          margin: "40px",
        }}
      >
        <h2> Saerch History/Recommedation</h2>
        <div
          style={{
            overflowY: "scroll",
            height: "200px",
            backgroundColor: "white",
            color: "grey",
            borderRadius: "20px",
          }}
        >
          {history.map((item) => (
            <h4>{item}</h4>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Settings;

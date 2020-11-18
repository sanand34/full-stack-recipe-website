import React, { useState } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { actionTypes } from "./reducer";
import SearchIcon from "@material-ui/icons/Search";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import { useStateValue } from "./StateProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navigation.css";
import firebase from "firebase";
import { db } from "./firebase";
function Navigation() {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const settings = () => {
    db.collection("rooms")

      .doc(user.email)
      .update({ food: firebase.firestore.FieldValue.arrayUnion(input) });
  };
  return (
    <Navbar
      bg="light"
      variant="light"
      expand="lg"
      style={{
        padding: "10px",
        borderRadius: "40px",
        borderColor: "rgb(164,162,166)",
        border: "solid",
        borderWidth: "2px",
      }}
    >
      <Avatar
        src={user.photoURL}
        style={{ marginRight: "15px", height: "80px", width: "80px" }}
      />
      <Button
        variant="dark"
        style={{ marginRight: "5px" }}
        onClick={() => {
          dispatch({
            type: actionTypes.SET_USER,
            user: null,
          });
        }}
      >
        Sign Out
      </Button>
      <Link to="/">
        <Navbar.Brand href="#home">
          <strong>My Recpies</strong>
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/">
            <Nav.Link href="#home">Home</Nav.Link>
          </Link>
          <Link to="/nutrition">
            <Nav.Link href="#link">Analyse your food</Nav.Link>
          </Link>

          <Link to="/account/settings">
            <Nav.Link href="#link">Change Settings</Nav.Link>
          </Link>
        </Nav>
        <Form
          inline
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <FormControl
            type="text"
            placeholder="Search Recipe"
            className="mr-sm-2"
            style={{ borderRadius: "20px", padding: "20px" }}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <Link to={`/search/${input}`}>
            <IconButton
              style={{
                margin: "4px",
              }}
              onClick={() => {
                settings();
              }}
            >
              <SearchIcon />
            </IconButton>
          </Link>
        </Form>
      </Navbar.Collapse>{" "}
    </Navbar>
  );
}

export default Navigation;

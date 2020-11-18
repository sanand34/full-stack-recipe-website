import React from "react";
import "./login.css";

import { auth } from "./firebase";
import { provider } from "./firebase";

import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <h1>
        <strong>MY RECIPES</strong>
      </h1>
      <button className="button" onClick={signIn}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1004px-Google_%22G%22_Logo.svg.png" />
        <strong>Sign In With Google</strong>
      </button>
    </div>
  );
}

export default Login;

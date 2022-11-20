import React, { useState } from "react";
import "./SignInScreen.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { authentication } from "../../firebase";

function SigninScreen() {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const register = () => {
    createUserWithEmailAndPassword(authentication, email, passwd);
  };
  const login = () => {
    signInWithEmailAndPassword(authentication, email, passwd)
      .then((credential) => {
        console.log(credential);
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="signInScreen">
      <form>
        <h1>Sign In</h1>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          placeholder="Email Address"
        />
        <input
          value={passwd}
          onChange={(event) => setPasswd(event.target.value)}
          type="password"
          placeholder="Password"
        />
        <button type="submit" onClick={() => login()}>
          Sign In
        </button>
        <div className="signInScreen_help">
          <div className="signInScreen_help_one">
            <input className="signInScreen_help_input" type="checkbox" />{" "}
            <h4>Remember me</h4>
          </div>
          <h4>Need help?</h4>
        </div>
        <h4>
          <span className="signInScreen_span">New to Netflix?</span>{" "}
          <span className="signInScreen_register" onClick={() => register()}>
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SigninScreen;

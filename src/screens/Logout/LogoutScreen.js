import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { authentication } from "../../firebase";
import "./LogoutScreen.css";

function LogoutScreen() {
  const navigate = useNavigate();
  const handleSignout = () => {
    authentication.signOut();
    navigate("/");
  };
  return (
    <div className="logout">
      <NavBar />
      <div className="logout_box">
        <h1>Leaving so Soon?</h1>
        <h2>
          Just so you know, you don't always need to sign out of Netflix. It's
          only necessary if you're on a shared or public computer
        </h2>
        <h3>Are you sure you want to signout of Netflix?</h3>
        <button onClick={() => handleSignout()}>Sign out</button>
      </div>
      <div className="logout_gradient" />
    </div>
  );
}

export default LogoutScreen;

import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { selectUser } from "../../features/userSlice";
import "./ProfileScreen.css";

function ProfileScreen() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const handleSignOut = () => {
    navigate("/logout");
  };
  return (
    <div className="profileScreen">
      <NavBar />
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profileScreen_details">
            <h2>{user.email}</h2>
            <div className="profileScreen_plans">
              <h3>Plans</h3>
              <button
                onClick={() => handleSignOut()}
                className="profileScreen_signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;

import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [handleNav, setHandleNav] = useState(false);
  const navigate = useNavigate();

  const showHandleNavbar = () => {
    if (window.scrollY > 100) {
      setHandleNav(true);
    } else {
      setHandleNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", showHandleNavbar);
    return () => window.removeEventListener("scroll", showHandleNavbar);
  }, []);
  return (
    <div className={`navbar ${handleNav && "navbar_black"}`}>
      <div className="navbar_content">
        <img
          className="navbar_logo"
          onClick={() => navigate("/")}
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Hello world"
        />
        <img
          className="navbar_avatar"
          onClick={() => navigate("/profile")}
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default NavBar;

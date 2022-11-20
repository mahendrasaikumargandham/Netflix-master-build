import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/Home/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/Login/LoginScreen";
import { authentication } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./screens/Profile/ProfileScreen";
import LogoutScreen from "./screens/Logout/LogoutScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = authentication.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="app">
      <Router>
        {user ? (
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/logout" element={<LogoutScreen />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<LoginScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;

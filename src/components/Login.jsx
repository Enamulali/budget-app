import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [currentUser, setCurrentUser] = useState({});

  const navigate = useNavigate();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((user) => {
        setCurrentUser(user);
        navigate("/");
      })
      .catch((err) => {
        //TODO replace w custom error alerts
        alert(err.code);
      });
  };

  return (
    <>
      <div className="form-container">
        <p>
          email
          <input
            type="email"
            onChange={(e) => {
              setLoginEmail(e.target.value);
            }}
          />
        </p>
        <p>
          password
          <input
            type="password"
            onChange={(e) => {
              setLoginPassword(e.target.value);
            }}
          />
        </p>
        <button onClick={handleLogin}>Login</button>
      </div>
    </>
  );
};

export default Login;

import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [currentUser, setCurrentUser] = useState({});

  const navigate = useNavigate();

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then((user) => {
        setCurrentUser(user);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.code);
        err.code === "auth/email-already-in-use"
          ? alert("There is already an account associated with this email")
          : alert(err.code);
      });
  };

  console.log(currentUser);

  return (
    <>
      <div className="form-container">
        <p>
          email
          <input
            type="email"
            onChange={(e) => {
              setRegisterEmail(e.target.value);
            }}
          />
        </p>
        <p>
          password
          <input
            type="password"
            onChange={(e) => {
              setRegisterPassword(e.target.value);
            }}
          />
        </p>
        <button onClick={handleRegister}>Register</button>
      </div>
    </>
  );
};

export default Register;

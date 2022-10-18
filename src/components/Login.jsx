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
        console.log(err.code);
        err.code === "auth/wrong-password"
          ? alert("Incorrect password")
          : alert(err.code);
      });
  };

  return (
    <>
      <form>
        <div className="email">
          <p>email</p>
          <input
            type="email"
            onChange={(e) => {
              setLoginEmail(e.target.value);
            }}
          />
        </div>
        <div className="email">
          <p>password</p>
          <input
            type="password"
            onChange={(e) => {
              setLoginPassword(e.target.value);
            }}
          />
        </div>
        <button
          onClick={handleLogin}
          className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default Login;

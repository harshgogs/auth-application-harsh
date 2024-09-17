import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const submitData = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, pass);
      alert("Login successfully");
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={submitData}>
        <h2>Login</h2>
        <label htmlFor="email">
          Email:
          <input type="text" onChange={(e) => setEmail(e.target.value)}></input>
        </label>
        <label htmlFor="password">
          password:
          <input
            type="password"
            onChange={(e) => setPass(e.target.value)}
          ></input>
        </label>

        <button type="submit">Login</button>
        <br></br>
        <br></br>

        <p>
          Dont have account <Link to="/signup">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;

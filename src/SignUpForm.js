import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const submitData = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, pass);
      console.log("accoioi vcrss");
      alert("Sign up successfully");
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={submitData}>
        <h2>Sign Up</h2>
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
        <button type="submit">Sign Up</button>
        <br></br>
        <br></br>
        <p>
          Already Registred? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;

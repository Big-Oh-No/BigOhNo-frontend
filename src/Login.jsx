// to save user inputs
import React, { useState } from "react";

// create component
// props is a way parent component can send values to their children
export const Login = (props) => {
  // add the state
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  // when user submits form
  const handleSubmit = (e) => {
    // to make sure our page doesn't lose state when we reload the page
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email"
          id="email"
          name="email"
        />
        <label htmlFor="password">password</label>
        <input
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          type="password"
          placeholder="Enter your password"
          id="password"
          name="password"
        />
        <button>Login</button>
      </form>
      <button onClick={() => props.onFormSwitch("register")}>
        Don't have an account? Register here.
      </button>
    </div>
  );
};

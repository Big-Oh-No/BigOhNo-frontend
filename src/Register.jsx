// going to save user inputs, so use useState
import React, { useState } from "react";

// create component
export const Register = (props) => {
  // add the state
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [name, setName] = useState("");

  // when user submits form
  const handleSubmit = (e) => {
    // to make sure our page doesn't lose state when we reload the page
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth-form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
        <input
          value={name}
          name="name"
          id="name"
          placeholder="Enter you full name"
        />
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
      <button onClick={() => props.onFormSwitch("login")}>
        Already have an account? Login here.
      </button>
    </div>
  );
};

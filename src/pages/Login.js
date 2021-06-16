import "./style.css";
import "../App.css";
import React, { useState } from "react";
import { Backend } from "../services/backend";
import {LOGGED_IN_USER_ID, TOKEN_STORAGE_KEY, LOGGED_IN_USER_IS_ENTERPRISE} from "../utils/request";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    // Stop the browser from submitting in the "traditional" way
    e.preventDefault();

    try {
      let loginData = await Backend.login(email, password);

      // Save the token to localStorage & redirect to the home page
      localStorage.setItem(TOKEN_STORAGE_KEY, loginData.token);
      localStorage.setItem(LOGGED_IN_USER_ID, loginData.userId);
      localStorage.setItem(LOGGED_IN_USER_IS_ENTERPRISE, loginData.isEnterprise);

      // Redirect to the home page
      history.push("/");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h1 class="login-title">Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          class="login-form"
          required
          placeholder="E-mail"
          type="email"
          onChange={handleEmailChange}
          value={email}
        />
        <br />
        <input
          class="login-form"
          required
          placeholder="Password"
          type="password"
          onChange={handlePasswordChange}
          value={password}
        />
        <br />
        <button class="btn-login" type="submit">Login</button>
      </form>
    </div>
  );
}

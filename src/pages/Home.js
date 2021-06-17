import React from "react";
import {LOGGED_IN_USER_ID, LOGGED_IN_USER_IS_ENTERPRISE, TOKEN_STORAGE_KEY} from "../utils/request";
import { Link } from "react-router-dom";
import Login from "./Login";

export default function Home() {
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    localStorage.removeItem(LOGGED_IN_USER_ID);
    localStorage.removeItem(LOGGED_IN_USER_IS_ENTERPRISE);
    window.location = "/";
  };

  return (
    <>
      {!localStorage.getItem(TOKEN_STORAGE_KEY) ? (
          <Link className="App-link" to={`/login`}>
            Login
          </Link>
      ) : (
        <a className="App-link" onClick={logout} href="/">
          Logout
        </a>
      )}

        {localStorage.getItem(LOGGED_IN_USER_IS_ENTERPRISE) == 'true' && localStorage.getItem(TOKEN_STORAGE_KEY) &&
            <Link className="App-link" to={`/appliers`}>
                See List of Appliers
            </Link>}

        {localStorage.getItem(LOGGED_IN_USER_IS_ENTERPRISE) == 'false' && localStorage.getItem(TOKEN_STORAGE_KEY) &&
            <Link className="App-link" to={`/offers`}>
                See List of Offers
            </Link>}

        {localStorage.getItem(TOKEN_STORAGE_KEY) &&
        <Link className="App-link" to={`/createConversation`}>
            Create a Conversation
        </Link>}

        {localStorage.getItem(TOKEN_STORAGE_KEY) &&
            <Link className="App-link" to={`/conversations`}>
            See List of User's Conversations
            </Link>}

        {localStorage.getItem(TOKEN_STORAGE_KEY) &&
            <Link className="App-link" to={`/closeConversation`}>
            Close a Conversation
            </Link>}

      <Link className='App-link'  to={'/FAQ'}>
        FAQ
      </Link>

        </>
  );
}

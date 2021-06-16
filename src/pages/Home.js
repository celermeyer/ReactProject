import React, {useContext} from "react";
import {LOGGED_IN_USER_ID, LOGGED_IN_USER_IS_ENTERPRISE, TOKEN_STORAGE_KEY} from "../utils/request";
import { Link } from "react-router-dom";
import {ThemeContext} from "../Context/ThemeContext";

export default function Home() {
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    localStorage.removeItem(LOGGED_IN_USER_ID);
    localStorage.removeItem(LOGGED_IN_USER_IS_ENTERPRISE);
    window.location = "/";
  };

  const {theme} = useContext(ThemeContext);

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

      {/*  <Link className="App-link" to={`/users`}>*/}
      {/*      See List of Users (Example)*/}
      {/*  </Link>*/}
      {/*  <Link className="App-link" to={`/appliers`}>*/}
      {/*      See List of Appliers (Example)*/}
      {/*  </Link>*/}
      {/*<Link className="App-link" to={`/companies`}>*/}
      {/*  See List of Companies (Example)*/}
      {/*</Link>*/}
        {localStorage.getItem(LOGGED_IN_USER_IS_ENTERPRISE) == 'true' ? (
            <Link className="App-link" to={`/appliers`}>
                See List of Appliers
            </Link>
        ) : (
            <Link className="App-link" to={`/offers`}>
                See List of Offers
            </Link>
        )}
        <Link className="App-link" to={`/createConversation`}>
            Create a Conversation
        </Link>
      <Link className="App-link" to={`/conversations`}>
        See List of User's Conversations
      </Link>
        <Link className="App-link" to={`/closeConversation`}>
            Close a Conversation
        </Link>
        </>
  );
}

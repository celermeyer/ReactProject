import React from 'react';
import { Link } from 'react-router-dom';
import image from "../../img/discussion.png";
import './header.style.css';
import {LOGGED_IN_USER_ID, LOGGED_IN_USER_IS_ENTERPRISE, TOKEN_STORAGE_KEY} from "../../utils/request";


export default  function Header ()  {


        const logout = (e) => {
            e.preventDefault();
            localStorage.removeItem(TOKEN_STORAGE_KEY);
            localStorage.removeItem(LOGGED_IN_USER_ID);
            localStorage.removeItem(LOGGED_IN_USER_IS_ENTERPRISE);
            window.location = "/";
        }

    return (
                <div className="menuOptions">
                    <Link className='App-link'  to='/FAQ'>
                        FAQ
                    </Link>

                    <Link className='App-link' to='/conversations'>
                        Conversations
                    </Link>
                    {localStorage.getItem(LOGGED_IN_USER_IS_ENTERPRISE) == 'true' ? (
                        <Link className="App-link" to={`/appliers`}>
                            See List of Appliers
                        </Link>
                    ) : (
                        <Link className="App-link" to={`/offers`}>
                            See List of Offers
                        </Link>
                    )}

                    {!localStorage.getItem(TOKEN_STORAGE_KEY) ? (
                        <Link className="App-link" to={`/login`}>
                            Login
                        </Link>
                    ) : (
                        <a className="App-link" onClick={logout} href="/">
                            Logout
                        </a>
                    )}
                </div>
        )

}


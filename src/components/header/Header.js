import React from 'react';
import { Link } from 'react-router-dom';
import image from "../../img/discussion.png";
import './header.style.css';


export default  function Header ()  {

    return (
            <div className="upperMenu">
                <Link className ='logo-container' to="/">
                    <img className="App-img" src={image} alt="WeAllChat"/>
                </Link>
                <div className="menuOptions">
                    <Link className='option' to='/conversations'>
                        Conversations
                    </Link>
                    <Link className='option' to='/offers'>
                        Offers
                    </Link>
                </div>
            </div>
        )

}
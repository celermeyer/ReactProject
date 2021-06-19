import React from "react";
import "./messages.css"
import {LOGGED_IN_USER_ID, LOGGED_IN_USER_IS_ENTERPRISE} from "../../utils/request";

export default function ConversationMessages({messages}){

    const loggedInUserId = localStorage.getItem(LOGGED_IN_USER_ID);
    let otherUserType;

    if(localStorage.getItem(LOGGED_IN_USER_IS_ENTERPRISE) == 'true'){
        otherUserType = 'Applier';
    }else{
        otherUserType = 'Enterprise';
    }

    return (
        <div>
            {messages.filter(m => m.message !== null).map((m, index) => (
                <div key={index}>
                    {m.id_user1 == loggedInUserId ? (
                        <div className="messageMe"><p class="whospeak">Me:</p>
                            {m.message}
                            <p className="message-date">{(new Date(m.date)).toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'})}</p>
                        </div>
                    ) : (
                        <div className="messageOthers"><p class="whospeak">{otherUserType}:</p>
                            {m.message}
                            <p class="message-date">{(new Date(m.date)).toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'})}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
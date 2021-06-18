import React from "react";
import "./messages.css"
import {LOGGED_IN_USER_ID} from "../../utils/request";

export default function ConversationMessages({messages}){

    const loggedInUserId = localStorage.getItem(LOGGED_IN_USER_ID);

    return (
        <div>
            {messages.filter(m => m.message !== null).map((m, index) => (
                <div key={index}>
                    {m.id_user1 == loggedInUserId ? (
                        <div className="messagePostulant"><p class="whospeak">Moi: </p>
                            {m.message}
                            <p className="message-date">{(new Date(m.date)).toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'})}</p>
                        </div>
                    ) : (
                        <div className="messageEntreprise"><p class="whospeak">Entreprise:</p>
                            {m.message}
                            <p class="message-date">{(new Date(m.date)).toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'})}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
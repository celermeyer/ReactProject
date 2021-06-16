
import React from "react";
import {Link} from "react-router-dom";

export default function ConversationsList ({conversations}){
    return(
        <div>
            {conversations.map((c) => (
                <Link to={`/conversations/${conversations.id_user2}`}>
                <li onClick={()=> {
                    setUser1(c.id_user1)
                    setUser2(c.id_user2)
                }} key={c.id_user2}>{c.nom_entreprise}</li>
                </Link>
            ))}
        </div>

    )
}
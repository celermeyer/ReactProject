import "./style.css";
import React, { useEffect, useState } from "react";
import { Backend } from "../services/backend";
import Messages from "../components/messages/Messages"
import "./style.css";

export default function ConversationMessages(props) {

    const [conversationMessages, setConversationMessages] = useState([]);


    // Load the companies on component mounting
    useEffect(() => {
        async function fetchconversationMessages(idUser1, idUser2) {
            try {
                let conversationMessages = await Backend.getConversationMessages(idUser1,idUser2);
                setConversationMessages(conversationMessages);
            } catch (e) {
                console.error(e);
            }
        }

        fetchconversationMessages(props.idUser1, props.idUser2);
    }, [props.idUser1, props.idUser2, props.newMessage]);

  return (
      <div>
        <h1 class="headings">Your Messages</h1>
            <ul>
            <Messages messages = {conversationMessages}/>
            </ul>
      </div>
  );

}

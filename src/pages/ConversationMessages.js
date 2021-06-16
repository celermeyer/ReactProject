import "./style.css";
import React, { useEffect, useState } from "react";
import { Backend } from "../services/backend";
import Messages from "../components/messages/Messages"
import "./pagesStyle.css";
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

        fetchconversationMessages(props.user1, props.user2);
    }, [props.user1, props.user2, props.newMessage]);

  return (
      <div>
        <h1 class="title-conversation">Your Messages</h1>
            <ul>
            <Messages messages = {conversationMessages}/>
            </ul>
      </div>
  );

}

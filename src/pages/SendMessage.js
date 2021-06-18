import React, {useState} from "react";
import { Backend } from "../services/backend";
import ConversationMessages from "./ConversationMessages";
import "./style.css";

export default function SendMessage(props) {
  const [message, setMessage] = useState("");
  const [newMessage, setNewMessage] = useState(0);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {

    console.log('Send message');

    // Stop the browser from submitting in the "traditional" way
    e.preventDefault();

    try {
      await Backend.sendMessage(props.idUser1, props.idUser2, message);

      setMessage("");
      setNewMessage(newMessage+1);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="col-sm-10">
      <ConversationMessages idUser1={props.idUser1} idUser2={props.idUser2} newMessage={newMessage}/>

      <form onSubmit={handleSubmit}>
        <input
            class="send-input"
            required
            placeholder="Your message here"
            type="text"
            onChange={handleMessageChange}
            value={message}
        />
        <br />
        <button className="button" type="submit">Send Message</button>
      </form>
    </div>
  );
}

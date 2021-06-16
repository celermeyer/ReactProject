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
    // Stop the browser from submitting in the "traditional" way
    e.preventDefault();

    try {
      await Backend.sendMessage(props.user1, props.user2, message);

      setMessage("");
      setNewMessage(newMessage+1);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="col-sm-10">
      <ConversationMessages user1={props.user1} user2={props.user2} newMessage={newMessage}></ConversationMessages>

      <form onSubmit={handleSubmit}>
        <input
          hidden
          required
          placeholder="id applier"
          type="text"
          value={props.user1}
        />
        <input
          hidden
          required
          placeholder="id enterprise"
          type="text"
          value={props.user2}
        />
        <input className="form-floating"
            required
            placeholder="your message here"
            type="text"
            onChange={handleMessageChange}
            value={message}
        />
        <br />

      </form>
      <button type="submit" className="button">Send Message</button>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { Backend } from "../services/backend";

export default function Conversations() {
  const [conversations, setConversations] = useState([]);

  // Load the companies on component mounting
  useEffect(() => {
    async function fetchConversations() {
      try {
        let conversations = await Backend.conversations();
        setConversations(conversations);
        console.log(conversations);
      } catch (e) {
        console.error(e);
      }
    }

    fetchConversations();
  }, []);

  return (
      <div>
        <h1>Showing all Conversations</h1>
        <ul>
          {conversations.map((c) => (
              <li key={c.id_user1}>{c.nom_entreprise + " - " + c.nom_postulant}</li>
          ))}
        </ul>
      </div>
  );

}

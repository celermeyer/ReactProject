import React, { useEffect, useState } from "react";
import { Backend } from "../services/backend";
import { useHistory } from "react-router-dom";
import {LOGGED_IN_USER_ID, LOGGED_IN_USER_IS_ENTERPRISE} from "../utils/request";
import "./style.css";

export default function CreateConversation() {
  const [idUser2, setIdUser2] = useState("");
  const [usersList, setUsersList] = useState([]);

  const loggedInUserId = localStorage.getItem(LOGGED_IN_USER_ID);

  // Load the companies on component mounting
  useEffect(() => {
    async function fetchUsersList() {
      try {

        let conversations = await Backend.getUserConversations(loggedInUserId);

        let localUsersList;
        if(localStorage.getItem(LOGGED_IN_USER_IS_ENTERPRISE) == 'true'){
          localUsersList = await Backend.getAppliers();
        }else{
          localUsersList = await Backend.getCompanies();
        }

        let finalList = [];
        localUsersList.forEach(user => (conversations.find(conversation => conversation.id_user2 == user.id_user)==undefined) ? finalList.push(user) : console.log('plein'));

        setUsersList(finalList);
        setIdUser2(finalList[0].id_user);
      } catch (e) {
        console.error(e);
      }
    }

    fetchUsersList();
  }, [loggedInUserId]);

  const history = useHistory();

  const handleIdUser2Change = (e) => {
    setIdUser2(e.target.value);
  };

  const handleSubmit = async (e) => {
    // Stop the browser from submitting in the "traditional" way
    e.preventDefault();

    try {
      await Backend.createConversation(loggedInUserId, idUser2);

      // Redirect to the home page
      history.push("/");
    } catch (e) {
      console.error(e);
    }
  };

  return (
      <div>
        <h1 class="headings">Create a Conversation</h1>
        {usersList.filter(u => u.nom !== "").length > 0 ? (
            <form onSubmit={handleSubmit}>
              <select value={idUser2} onChange={handleIdUser2Change}>
                {usersList.filter(u => u.nom !== "").map((u) => (
                    <option  value={u.id_user}>{u.prenom} {u.nom}</option>
                ))}
              </select>
              <br/>
              <button class="btn-closeconv" type="submit">Create Conversation</button>
            </form>
        ) : (
            <p>No data available &#x1F615;</p>
        )}
      </div>
  );
}

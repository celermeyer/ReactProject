import React, { useEffect, useState } from "react";
import { Backend } from "../services/backend";
import SendMessage from "./SendMessage";
//import {Container, Row, Col } from "react-bootstrap/cjs/Container";
import "./pagesStyle.css";
import 'bootstrap/dist/css/bootstrap.css';
import {Link, useHistory, useParams} from "react-router-dom";
import {LOGGED_IN_USER_ID} from "../utils/request";
import "./style.css";


export default function Conversations() {
  const [conversations, setConversations] = useState([]);
    const [idUser1, setIdUser1] = useState([]);
    const [idUser2, setIdUser2] = useState([]);

    const loggedInUserId = localStorage.getItem(LOGGED_IN_USER_ID);

    // Load the companies on component mounting
    useEffect(() => {
        async function fetchConversations() {
            try {
                let conversations = await Backend.getUserConversations(loggedInUserId);

                let finalConversations = conversations;
                if(id){
                    finalConversations = conversations.filter( conv => conv.id_user2 === +id);
                }
                setConversations(finalConversations);
            } catch (e) {
                console.error(e);
            }
        }

        fetchConversations();
    }, [loggedInUserId, id]);

  return (

      <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <h1 className="headings">Your Conversations</h1>
              {conversations.length > 0 ? (

                  <ul>
                      {conversations.map((c) => (

                          <li onClick={()=> {

                              setIdUser1(c.id_user1)
                              setIdUser2(c.id_user2)
                          }} key={c.id_user2}>
                              <Link to={`/conversations/${c.id_user2}`}>
                              {c.nom_entreprise}
                              </Link>
                          </li>

                      ))}
                  </ul>

              ) : (
                  <p>No conversation yet &#x1F615;</p>
              )}

            </div>
              <br/>
              <div className="col-sm-8">
                  {user1 > 0 &&
                  <SendMessage user1={idUser1} user2={idUser2} />
                  }
              </div>
          </div>

      </div>


  );

}

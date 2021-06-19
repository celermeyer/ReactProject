import React, { useEffect, useState } from "react";
import { Backend } from "../services/backend";
import SendMessage from "./SendMessage";
import "./pagesStyle.css";
import 'bootstrap/dist/css/bootstrap.css';
import {Link, useHistory, useParams} from "react-router-dom";
import {LOGGED_IN_USER_ID, LOGGED_IN_USER_IS_ENTERPRISE} from "../utils/request";
import "./style.css";
import {AiOutlineArrowLeft} from "react-icons/ai";



export default function Conversations() {
  const [conversations, setConversations] = useState([]);
    const [idUser1, setIdUser1] = useState([]);
    const [idUser2, setIdUser2] = useState([]);

    const {id} = useParams();
    const loggedInUserId = localStorage.getItem(LOGGED_IN_USER_ID);
    const history = useHistory();

    // Load the companies on component mounting
    useEffect(() => {
        async function fetchConversations() {
            try {
                let conversations = await Backend.getUserConversations(loggedInUserId);

                let finalConversations = conversations;
                if(id){
                    finalConversations = conversations.filter( conv => conv.id_user2 === +id);
                }

                if(localStorage.getItem(LOGGED_IN_USER_IS_ENTERPRISE) == 'true'){
                    finalConversations.sort((a, b) => (a.nom_postulant > b.nom_postulant) ? 1 : -1);
                }else{
                    finalConversations.sort((a, b) => (a.nom_entreprise > b.nom_entreprise) ? 1 : -1);
                }
                setConversations(finalConversations);
            } catch (e) {
                console.error(e);
            }
        }

        fetchConversations();
    }, [loggedInUserId, id]);

function BackToConversations(){
    if(id){
        return
    }
}

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
                              {localStorage.getItem(LOGGED_IN_USER_IS_ENTERPRISE) == 'true' ?
                                  (
                                  c.nom_postulant
                                  ):(
                                  c.nom_entreprise

                              )}

                              </Link>
                          </li>
                      ))}
                      <div>  <Link to={`/conversations`} > <AiOutlineArrowLeft/> </Link> </div>
                  </ul>

              ) : (
                  <p>No conversation yet &#x1F615;</p>
              )}

            </div>
              <br/>
              <div className="col-sm-8">
                  {idUser1 > 0 &&
                  <SendMessage idUser1={idUser1} idUser2={idUser2} />
                  }
              </div>
          </div>

      </div>


  );

}

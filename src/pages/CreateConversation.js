import React, { useEffect, useState } from "react";
import { Backend } from "../services/backend";
import { useHistory } from "react-router-dom";
import {LOGGED_IN_USER_ID} from "../utils/request";
import "./style.css";

export default function CreateConversation() {
  const [idUserEnterprise, setIdUserEnterprise] = useState("");
  const [companies, setCompanies] = useState([]);

  const loggedInUserId = localStorage.getItem(LOGGED_IN_USER_ID);

  // Load the companies on component mounting
  useEffect(() => {
    async function fetchCompanies() {
      try {
        let companies = await Backend.getCompanies();
        setCompanies(companies);
        setIdUserEnterprise(companies[0].id_user);
        console.log("Company[0].id_user" + companies[0].id_user);
      } catch (e) {
        console.error(e);
      }
    }

    fetchCompanies();
  }, []);

  const history = useHistory();


  const handleIdUserEnterpriseChange = (e) => {
    setIdUserEnterprise(e.target.value);
  };

  const handleSubmit = async (e) => {
    // Stop the browser from submitting in the "traditional" way
    e.preventDefault();

    try {
      await Backend.createConversation(loggedInUserId, idUserEnterprise);

      // Redirect to the home page
      history.push("/");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h1 className="headings">Create a Conversation</h1>
      {companies.filter(c => c.nom !== "").length > 0 ? (
          <form onSubmit={handleSubmit}>
            <select value={idUserEnterprise} onChange={handleIdUserEnterpriseChange}>
              {companies.filter(c => c.nom !== "").map((c) => (
                  <option value={c.id_user}>{c.nom}</option>
              ))}
            </select>
            <br/>
            <button class="btn-send-message" type="submit">Create Conversation</button>
          </form>
      ) : (
        <p>No company available &#x1F615;</p>
      )}
    </div>
  );
}

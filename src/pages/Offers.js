import React, { useEffect, useState } from "react";
import { Backend } from "../services/backend";
import OffersCards from "../components/offers/offerCard";
import {useHistory, useParams} from "react-router-dom";
import {LOGGED_IN_USER_ID} from "../utils/request";
import "./style.css";


export default function Offers() {
  // Hold the list of appliers in the component state
  const [offers, setOffers] = useState([]);
  const [idUserEnterprise, setIdUserEnterprise] = useState("");
  const [companies, setCompanies] = useState([]);

  const {id} = useParams();
  const loggedInUserId = localStorage.getItem(LOGGED_IN_USER_ID);
  const history = useHistory();

  // Load the companies on component mounting
  useEffect(() => {
    async function fetchOffers() {
      try {
        let offers = await Backend.getOffers();

        let finalOffers = offers;
        if(id) {
          finalOffers = offers.filter(o => o.id_offre === +id);
          let companies = offers.find(o => o.id_offre === +id).id_entreprise
          console.log("Company name" + companies.nom);
        }
        setOffers(finalOffers);

      } catch (e) {
        console.error(e);
      }
    }

    fetchOffers();
  }, [id]);


  const handleSendMessage = async (e) => {
    // Stop the browser from submitting in the "traditional" way
    e.preventDefault();


    if(id) {

      let companies = offers.find(o => o.id_offre === +id).id_entreprise
      console.log("id of Company " + companies);
      let idUserEnterprise = companies.find(company => company.id_entreprise === +id).id_user2;

      try {
        console.log("id of User in Company " + idUserEnterprise + " my id " + loggedInUserId);
        await Backend.createConversation(loggedInUserId, idUserEnterprise);

        // Redirect to Conversations
        history.push("/conversations");
      } catch (e) {
        console.error(e);
      }
    }


  };

  return (
        <div>
        <h1 className="headings">List of Offers</h1>
        <OffersCards offers={offers} />
          <form onSubmit={handleSendMessage}>
            <button type="sendMessage">Send a message</button>
          </form>
        </div>

  );
}

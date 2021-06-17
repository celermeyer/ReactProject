import React, { useEffect, useState } from "react";
import { Backend } from "../services/backend";
import OffersCards from "../components/offers/offerCard";
import {useParams} from "react-router-dom";
import "./style.css";


export default function Offers() {
  // Hold the list of appliers in the component state
  const [offers, setOffers] = useState([]);

  const {id} = useParams();

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


  return (
        <div>
        <h1 className="headings">List of Offers</h1>
        <OffersCards offers={offers} />
        </div>

  );
}

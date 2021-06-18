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

        offers.sort((a, b) => (a.nom > b.nom) ? 1 : -1);

        setOffers(offers);

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

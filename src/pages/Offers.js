import "./style.css";
import React, { useEffect, useState } from "react";
import { Backend } from "../services/backend";
import OffersCards from "../components/offers/offerCard";

export default function Offers() {
  // Hold the list of appliers in the component state
  const [offers, setOffers] = useState([]);

  // Load the companies on component mounting
  useEffect(() => {
    async function fetchOffers() {
      try {
        let offers = await Backend.getOffers();
        setOffers(offers);
      } catch (e) {
        console.error(e);
      }
    }

    fetchOffers();
  }, []);

  return (
    <div>
      <h1 class="title-conversation">List of Offers</h1>
     <OffersCards offers={offers}/>
    </div>
  );
}

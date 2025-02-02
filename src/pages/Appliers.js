import React, { useEffect, useState } from "react";
import { Backend } from "../services/backend";
import "../components/offers/offerCard.css";

export default function Appliers() {
  // Hold the list of appliers in the component state
  const [appliers, setAppliers] = useState([]);

  // Load the companies on component mounting
  useEffect(() => {
    async function fetchAppliers() {
      try {
        //Fetch data of appliers in the backend
        let appliers = await Backend.getAppliers();
        //Sort appliers
        appliers.sort((a, b) => (a.prenom > b.prenom) ? 1 : -1);
        setAppliers(appliers);
      } catch (e) {
        console.error(e);
      }
    }

    fetchAppliers();
  }, []);

  return(
      <div >
        <h1>List of Appliers</h1>
        {appliers.filter(c => c.nom !== "").map((c, index)=>(
            <li key={index} className="offerCard">
                <div className="topOfOffer">
                  <h2 className="offerName">{c.prenom + " " + c.nom} </h2>
                </div>
                <div className="bottomOfOffer">
                  <p className="infoOffer">• Sex : {c.sexe} </p>
                  <p className="infoOffer">• City : {c.localite}</p>
                  <p className="infoOffer">• Available : {c.disponibilite}</p>
                </div>
            </li>
        ))}
      </div>
  );
}

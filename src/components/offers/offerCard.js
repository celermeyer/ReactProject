
import React from "react";
import "./offerCard.css";

export default function OffersCards ({offers}){
    return(
        <div >
           {offers.map((offer, index)=>(
               <li key={index} className="offerCard">
                   <div className="topOfOffer">
                       <h2 className="offerName">{offer.nom}</h2>
                   </div>
                   <div className="bottomOfOffer">
                       <p className="infoOffer">Occupancy rate : {offer.taux} </p>
                       <p className="infoOffer"> Visit us at : {offer.url}</p>
                       <p className="infoOffer"> Contrat : {offer.contrat}</p>
                   </div>
               </li>
           ))}
        </div>
    );
}
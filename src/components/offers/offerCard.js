import React from "react";
import "./offerCard.css";

export default function OffersCards ({offers}){


    return(
        <div >
           {offers.map((offer, index)=>(
               <li key={index} className="offerCard">
                   <div className="topOfOffer">
                       <h2 className="offerName">{offer.nom} </h2>
                   </div>
                   <div className="bottomOfOffer">
                       <p className="infoOffer">• <b>Percentage</b> : {offer.taux}</p>
                       <p className="infoOffer">• <b>Contract type</b> : {offer.contrat}</p>
                       <p className="infoOffer">• <b>Salary</b> : {offer.salaire_min} CHF - {offer.salaire_max} CHF</p>
                       <p className="infoOffer">• <b>Duration</b> : {offer.duree}</p>
                       <p className="infoOffer">• <b>Location</b> : {offer.ville}</p>
                       <p className="infoOffer">• <b>More information</b> : <a href={offer.url}> link </a></p>
                   </div>
               </li>
           ))}
        </div>
    );
}
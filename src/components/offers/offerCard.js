
import React from "react";
import "./offerCard.css";
import {Link} from "react-router-dom";

export default function OffersCards ({offers}){


    return(
        <div >
           {offers.map((offer, index)=>(
               <li key={index} className="offerCard">
                   <Link to={`/offers/${offer.id_offre}`}>
                   <div className="topOfOffer">
                       <h2 className="offerName">{offer.nom} </h2>
                   </div>
                   <div className="bottomOfOffer">
                       <p className="infoOffer">• Percentage : {offer.taux} </p>
                       <p className="infoOffer">• Contract type : {offer.contrat}</p>
                       <p className="infoOffer">• More information : <a href={offer.url}> link </a></p>
                   </div>
                   </Link>
               </li>
           ))}
        </div>
    );
}
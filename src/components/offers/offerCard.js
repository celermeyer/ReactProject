
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
                       <p > Company name: {offer.id_entreprise}</p>
                       <p className="infoOffer">{offer.taux} taux </p>
                       <p className="infoOffer"> visit us at {offer.url}</p>
                       <p className="infoOffer"> Contrat : {offer.contrat}</p>

                   </div>

                   </Link>
               </li>
           ))}
        </div>
    );
}
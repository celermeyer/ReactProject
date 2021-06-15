import React from 'react';
import './company-card.style.css';

export const CompanyCard = props => (
    <div className = 'company-card'>
        <img alt="company" src={`https//`}/>
        <h2> {props.companies.name}</h2>
    </div>
)

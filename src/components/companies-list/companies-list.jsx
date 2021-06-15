import React from 'react';
import {CompanyCard} from '../company-card/company-card';
import './card-list.style.css';

export const CompanyList = props => (
    <div className='companies-list'>
        {props.companies.map(company => (
            <CompanyCard key={company.id} company={company} />
        ))}
    </div>
);
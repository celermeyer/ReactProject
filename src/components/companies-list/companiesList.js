
import React from "react";

export function CompaniesList ({companies}){
    return (
        <ul style={{listStyleType: "none", padding: 0}}>
            {companies.map((company, index) => (
                <li key={index}>
                    <div>
                        <p>
                            {company.nom} {" "}
                            {company.telephone_responsable_RH} {" "}
                            en plus {" "}
                            {company.description}
                        </p>
                    </div>
                </li>
            ))}
        </ul>
    )
}
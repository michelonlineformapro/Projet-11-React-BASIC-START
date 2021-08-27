import React from "react";

function TestComponent({nom, email}){

    return(
        <div>
            <p>Vous êtes connectez en tant que : {nom}</p>
            <p>Votre email est : {email}</p>
        </div>
    )
}


export default TestComponent;


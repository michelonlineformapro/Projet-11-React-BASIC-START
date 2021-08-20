import React from 'react';

import './Accueil.css';




function Accueil(){

    const prenom = "Michael"

    return <div className="has-text-centered animate__animated animate__slideInRight" id={"div-main-content"}>TEST DE LA FONCTION
    <div><p>Bonjour : {prenom}</p></div>
    </div>
}

export default Accueil;

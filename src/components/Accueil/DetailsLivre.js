import React from "react";

//Ici la fonction prend livre en paramètre c une props passé dans le parent lors de l'appel du composant
//<DetailLivre livre={livreCourant} />
//Ce dernier recupère id de la collection json grace a la boucle de lecture et la fonction livreById

function DetailsLivre({livre}){

    //Teste de valeur de l'objet recuperer
    console.log(livre)

    //Au click dur le bouton retour on refresh la page
    function reload(){
        window.location.reload()
    }

    return(
        <div className="has-text-centered">
            <div className="title is-1 has-background-warning has-text-centered has-text-danger p-3">DÉTAILS DU LIVRE : <br />{livre.nomLivre}</div>
            <div>
                <img src={livre.imageLivre} alt={livre.nomLivre} title={livre.nomLivre}/>
            </div>
            <div className="content">
                <p><b>DESCRIPTION :</b></p>
                <p>{livre.descriptionLivre}</p>
                <p className="has-text-info">PRIX : {livre.prixLivre} €</p>
            </div>
            <button onClick={reload} className="button is-info">RETOUR</button>
        </div>
    )
}

export default DetailsLivre;
import React, {useEffect, useState} from 'react';

import './Accueil.css';
import axios from "axios";
import Aside from "../Aside/Aside";
import DetailsLivre from "./DetailsLivre";

function Accueil(){

    //Creation d'un hooks
    const [livres, setLivres] = useState([]);

    //Hook details du livre
    const [livreCourant, setLivreCourant] = useState(null)

    //Afficher tous les livres
    const afficherLivres = () =>{
        //Requete http axios get
        axios.get("http://localhost:3001/livres")
        //Promsesse
            .then(response => {
                //On rempli le tableau livres du hook grace au setter (mutateur) setLivres
                setLivres(response.data);
                //Debug de test
                console.log(response.data);
            })
            //Sinon on declenche une erreur
            .catch(err => {
                console.log("Erreur d'affichage des livres : " + err);
            })
    }

    //Afficher les details d'un livres on passe livre en paramètre pour recuperer id dans le jsx grace a la boucle MAP
    //Cette fonction est appeleée au click sur chaque carte
    //<div className="card" onClick={() => livreById(livre, livre.id)}>

    const livreById = (livre) => {
        setLivreCourant(livre);
        //Debug
        console.log(livre)
    }

    // Hook useEffect comme à une combinaison de componentDidMount, componentDidUpdate, et componentWillUnmount.
    //On utilise ce Hook pour indiquer à React que notre composant doit exécuter quelque chose
    // après chaque affichage. en l'ocurence afficher les livres

    useEffect(() => {
        afficherLivres()
    },[setLivres])

    return(
        <div className="m-5">
            <div className="columns">
                {/*Ajout du block - 3  a gauche pour la navigation*/}

                <div className='column is-3'>
                    <Aside />
                </div>

                {/*Block de droite pour afficher les livres*/}
                <div className="mt-3 p-4 column is-9 box">

                    {/*Si livreCourant est !== null on affiche le contenus du composant enfant <DetailsLivre/>*/}
                    {/* on passe la props livre sui est un paramtre de la fonction du composant enfant*/}
                    {/*function DetailsLivre({livre})*/}
                    {livreCourant ? (
                        <DetailsLivre livre={livreCourant} />
                    ) : (
                        <div>
                        <div className="title is-1 has-background-warning has-text-centered has-text-danger p-3">
                            LISTE DES LIVRES DEPUIS API REST
                        </div>
                        <div className="columns is-multiline has-text-centered animate__animated animate__slideInRight">

                            {/*Boucle de lecture (itération) du tableau livres rempli par la fonction afficher (requète http + url json-server)*/}
                    {livres.map(livre => {
                        return(
                        <div className="mt-3 column is-2" key={livre.id}>
                        <div className="card" onClick={() => livreById(livre, livre.id)}>
                        <div className="card-image">
                        <figure className="image">
                        <img src={livre.imageLivre} className="is-square" alt="Placeholder image"/>
                        </figure>
                        </div>
                        <div className="card-content">
                        <div className="media">
                        <div className="media-left">
                        <figure className="image is-48x48">
                        <img src={livre.imageLivre} className="is-square"
                        alt="Placeholder image"/>
                        </figure>
                        </div>
                        <div className="media-content">
                        <p className="title is-4">{livre.nomLivre}</p>
                        </div>
                        </div>

                        <div className="content">
                    {livre.descriptionLivre}

                        </div>
                        </div>
                        </div>
                        </div>
                        )
                    },[])}
                        </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )

}

export default Accueil;

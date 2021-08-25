import React,{Component} from 'react';
import axios from "axios";
import "./Livres.css"
import $ from 'jquery';
import AjouterLivres from "./AjouterLivres";

class LivresListe extends Component{

    //Etat locale des données
    state = {
        //Tableau vide des livres
        livres: [],
        livreID: "",
        rechercher: ""
    }

    //Requète HTTP
    afficherLivre = () => {
        //Appel axios et la methode get + URL
        axios.get('http://localhost:3001/livres')
            //Promesse
            .then(response => {
                const livres = response.data
                //Mise a jour du tableau rempli pa la requète HTTP
                this.setState({
                    livres
                })
            })
            //Sinon une erreur
            .catch(err =>{
                console.log("Erreur de lecture du json livres " + err)
            })
    }
    livreById = id =>{
        //Recuperartion de l'id
        const livreID = this.state.livres.filter(livre => livre.id !== id)

        //Requète HTTP get avec axios passage de id en paramètre
        axios.get(`http://localhost:3001/livres/${id}`)
            //Promesse
            .then(response => {
                //LivreId declaré dans le state = au valeur de l'objet livre en fonction de son ID
                const livreID = response.data
                //Mise a jour de l'objet Livre
                this.setState({
                    livreID
                })
                //Debug
                console.log(livreID)
            })
            //Sinon on affiche une erreur
            .catch(err => {
                console.log("Pas de livre pour cet ID " + err);
            })

    }
    //Fonction pour supprimer un livre depuis le bouton supprimer
    //<button onClick={() =>this.handleDelete(this.state.livreID.id)} className="button is-danger">SUPPRIMER {this.state.livres.nomLivre}</button
    handleDelete = (id) => {
        //Recuperation de id grace a js Filter
        //on recup livreID: "" depuis l'etat locale (state) et filter variable + fonction var.id + paramètre de la fonction (ici id recup dans le JSX)
        const livreID = this.state.livres.filter(livre => livre.id !== id)
        //Debug
        console.log(livreID)
        //Mise a jour de l'etat locale grace au mutateur (setter) setState
        this.setState({
            livreID
        })

        //Requete HTTP axios methode = delete + concaténation de id (passer en paramètre de la fonction)
        axios.delete(`http://localhost:3001/livres/${id}`)
            //Promesse
            .then(response => {
                //Debug f12
                console.log(response.data)
                //On declenche une alerte pour confirmer la supression ou annuler
                alert(`Confirmer la supression du livre : ${livreID} ?`);
                //On refresh la page
                window.location.reload();
            })
            //Sinon on declenche une erreur
            .catch(err => {
                console.log("Erreur de supression du livre " + err)
            })

    }

    //Fonction rechercher par titre
    handleRechercher = (event) => {
        //Debug du champ input = value
        console.log("Valeur du champ de recherche", event.target.value)
        //Mettre a jour l' etat locle de la propriété rechercher:"" du state
        this.setState({
            rechercher: event.target.value
        })
    }


    //Cycle de vie => apres render() le composant est monté on appel la fonction afficher Livres
    componentDidMount() {
        this.afficherLivre();

        //Test click dur le bouton ajouter un livre
        $("#toggle-add-form").click(function (){
            $("#form-add-livre").toggle("slow");
        })
    }


    render(){
        return(
            <div>
                {/*TERNAIRE = block a afficher au click sur un livre si l'i existe et possède des données*/}

                {this.state.livreID ? (
                    <div className="animate__animated animate__slideInRight">
                        <div className="title is-1 has-text-success has-text-centered">DÉTAILS DU LIVRE {this.state.livreID.nomLivre}</div>
                        <div className="has-text-centered">
                            <img src={this.state.livreID.imageLivre} alt={this.state.livreID.nomLivre}/>
                        </div>
                        <div className="media-content">
                            <p id={"prix"} className="title is-4">PRIX :</p>
                            <p className="subtitle is-4 has-text-info "><b>{this.state.livreID.prixLivre} €</b></p>
                        </div>
                        <div className="content">
                            {this.state.livreID.descriptionLivre}
                        </div>
                        <div>
                            {/*On recharge la page pour le retour car url est la meme : http://localhost:3000/livres*/}
                            <button onClick={() => window.location.reload()}  className={"button is-info"}>RETOUR</button>
                            {/*Appel de la fonction handleDelete depuis une fonction anonyme + passage de l'id du livre en paramètres*/}
                            <button onClick={() =>this.handleDelete(this.state.livreID.id)} className="button is-danger">SUPPRIMER {this.state.livres.nomLivre}</button>
                        </div>
                    </div>
                ) : (
                    <div className="container is-fluid p-3">
                        <button id="toggle-add-form" className="mt-3 button is-info">Ajouter un livre</button>

                        <div id="form-add-livre" className="mt-3 box">
                            <AjouterLivres />
                        </div>

                        <div className="mt-3 title is-1 has-text-info box has-background-black-bis">LISTE DES LIVRES DEPUIS API REST</div>

                        {/*BARRE DE RECHERCHE*/}
                        {/*Appel de la fonction handleRechercher dans onChange qui recupère la valeur du champ input target value grace au setState */}

                        <div className="mt-3 field box">
                            <label className="label">RECHERCHER</label>
                            <input
                                className="input"
                                placeholder="php"
                                type="text"
                                name="rechercher"
                                onChange={this.handleRechercher.bind(this)}
                                value={this.rechercher}

                            />
                        </div>


                        <div className="mt-3 columns is-multiline">

                            {/*Filtre tableau de livre => filtrer par nomLivre qui est inclus dans les lettres de la barre de rechercher  + Boucle dur le tableau de livres + affichage des element 1 à 1*/}

                            {this.state.livres.filter(recherche => recherche.nomLivre.toLowerCase().includes(this.state.rechercher.toLowerCase())).map(livre =>
                                <div onClick={() => this.livreById(livre.id)} id="card-content" className="column" key={livre.id}>
                                    <div className="card">
                                        <div className="p-3 title is-4 has-text-centered has-text-danger">{livre.nomLivre}</div>
                                        <div className="card-image p-3">
                                            <figure className="image">
                                                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                                                <img src={livre.imageLivre} alt="Placeholder image" />
                                            </figure>
                                        </div>
                                        <div className="card-content">
                                            <div className="media">
                                                <div className="media-left">
                                                    <figure className="image is-48x48">
                                                        <img src={livre.imageLivre} alt="Placeholder image" />
                                                    </figure>
                                                </div>
                                                <div className="media-content">
                                                    <p id={"prix"} className="title is-4">PRIX :</p>
                                                    <p className="subtitle is-4 has-text-info "><b>{livre.prixLivre} €</b></p>
                                                </div>
                                            </div>

                                            <div className="content">
                                                {livre.descriptionLivre}
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            )}
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default LivresListe
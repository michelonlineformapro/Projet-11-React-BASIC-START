import React,{Component} from 'react';
import axios from "axios";
import "./Livres.css"


class LivresListe extends Component{

    //Etat locale des données
    state = {
        //Tableau vide des libres
        livres: [],
        livreID: ""
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


    //Cycle de vie => apres render() le composant est monté on appel la fonction afficher Livres
    componentDidMount() {
        this.afficherLivre();
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
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="title is-1 has-text-info">LISTE DES LIVRES DEPUIS API REST</div>
                        <div className="columns is-multiline">
                            {/*Boucle dur le tableau de livres + affichage des element 1 à 1*/}
                            {this.state.livres.map(livre =>
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
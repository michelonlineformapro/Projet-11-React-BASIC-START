import React,{Component} from 'react';
import axios from "axios";

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


    //Cycle de vie => apres render() le composant est monté on appel la fonction afficher Livres
    componentDidMount() {
        this.afficherLivre();
    }

    render(){
        return(
            <div>

                    <div>
                        <div className="title is-1 has-text-info">LISTE DES LIVRES DEPUIS API REST</div>
                        <div className="columns is-multiline">
                            {/*Boucle dur le tableau de livres + affichage des element 1 à 1*/}
                            {this.state.livres.map(livre =>
                                <div onClick={() =>this.livreById(livre.id)} className="column">
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
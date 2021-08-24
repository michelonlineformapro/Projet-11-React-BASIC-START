import React, {Component} from "react";
import './Livres.css';
import axios from "axios";


class AjouterLivres extends Component{

    constructor(props) {
        super(props);

        //Etat locale des données d'un livre
        this.state = {
            livres:[],
            id: null,
            nomLivre : "",
            descriptionLivre: "",
            prixLivre: "",
            imageLivre: ""
        }
        //Garder le context de la fonction
        this.handleChange = this.handleChange.bind(this)
    }

    //A chaque entrée dans le formulaire = on met a jour les valeurs en recupérant <input name = input value
    //Detecter les changements d' etat de chaque input
    handleChange = (event) => {
        this.setState({
            //Recuperation des tous les <input name="" === input value=""/>
            [event.target.name]: event.target.value,
            id: event.target.value
        })
        //Debug
        //Test de recup des inputs a checker dans f12 console
        console.log(this.state.nomLivre)
        console.log(this.state.descriptionLivre)
        console.log(this.state.prixLivre)
        console.log(this.state.imageLivre)
    }

    //Soumission du formulaire = dans jsx <form onSubmit={this.handleSubmit}
    handleSubmit = (event) => {
        //On evite le rechargement de la page
        event.preventDefault()
        //Requète HTTP avec axios + passage d'option
        //Requète http methode post avec axios
        axios.post("http://localhost:3001/livres",{
            //Recup des valeurs des inputs mis a jour par handleChange
            nomLivre: this.state.nomLivre,
            descriptionLivre: this.state.descriptionLivre,
            prixLivre: this.state.prixLivre,
            imageLivre: this.state.imageLivre
        })
            //Promesse
            //Creation d'une promesse (resolve ou reject)
            .then(response => {
                //On stock les valeurs du formulaire dans une constante
                const livres = response.data
                console.log(livres)
                //Modifier l'etat locale des données (on rempli le tableau livres[] declarer dans le state
                this.setState({
                    livres
                })
                //On recharge la page
                window.location.reload()
            })
            .catch(err => {
                console.log("Erreur lors de l'ajout du libres " + err)
            })
    }


    //Formulaire d'ajout du livre
    //handleChange recupère les entrées clavier de input grace au mutateur setState et input name === input value
    render() {
        return(
            <div className="container">
                <div className="title is-1 has-text-centered has-text-success">LE FORMULAIRE AJOUT DE LIVRE</div>
                {/*Appel de la fonction handleSubmit lors de la soumission du formulaire*/}
                <form onSubmit={this.handleSubmit}>

                    {/*Les 4 champs */}
                    <div className="field">
                        <label className="label">Nom du livre</label>
                        <input
                            type="text"
                            placeholder="Nom du livre"
                            className="input"
                            required
                            name="nomLivre"
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="field">
                        <label className="label">Description du livre</label>
                        <textarea
                            id="descriptionLivre"
                            name="descriptionLivre"
                            className="textarea"
                            required
                            onChange={this.handleChange}
                            placeholder="Livre de cours et exercice PHP"
                        />
                    </div>

                    <div className="field">
                        <label className="label">Prix du livre</label>
                        <input
                            id="prixLivre"
                            name="prixLivre"
                            className="input"
                            type="number"
                            step="0.01"
                            required
                            onChange={this.handleChange}
                            placeholder="25.25"
                        />
                    </div>

                    <div className="field">
                        <label className="label">Image du livre</label>
                        <input
                            id="imageLivre"
                            name="imageLivre"
                            className="input"
                            type="text"
                            required
                            onChange={this.handleChange}
                            placeholder="https://www.dunod.com/sites/default/files/styles/principal_desktop/public/thumbnails/image/9782100743209-001-X.jpeg"
                        />
                    </div>

                    {/* A la soumisiion du formulaire on decleche <form onSubmit={this.handleSubmit}*/}
                    <button type="submit" className="button is-success">Valider les donnés du formulaire</button>

                </form>
            </div>
        )
    }
}

export default AjouterLivres
import React, {Component} from "react";
import './Livres.css';


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

    //Detecter les changements d' etat de chaque input
    handleChange = (event) => {
        this.setState({
            //Recuperation des tous les <input name="" === input value=""/>
            [event.target.name]: event.target.value,
            id: event.target.value
        })
        //Debug
        console.log(this.state.nomLivre)
    }

    //Soumission du formulmaire
    handleSubmit = () => {

    }


    //Formulaire d'ajout du livre
    //handleChange recupère les entrées clavier de input grace au mutateur setState et input name === input value
    render() {
        return(
            <div>
                <div className="title is-1 has-text-centered has-text-success">LE FORMULAIRE AJOUT DE LIVRE</div>

                <form onSubmit={this.handleSubmit}>
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
                </form>
            </div>
        )
    }
}

export default AjouterLivres
import React, {Component} from "react";

class Taches extends Component{
    //Creation du contructeur de la classe
    constructor(props) {
        //Super permet d'appeler et/ou acceder a des fonctions definie dans l'objet parent
        super(props);
        //Etat = données initial de l'application
        this.state = {
            items:[],
            text: ''
        }

        //Appeler la fonction avec le context this
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    //Detecter les changements dans un input
    handleChange(event){
        //Recuperer la valeur de input avec un setter (mutateur) qui cible <input value=""/>
        this.setState({
            text: event.target.value
        })
        //Debug de input a chaque entrée
        console.log(event.target.value)
    }

    //Soumission du formulaire
    handleSubmit(event){
        //Evite le refresh de la page a la soumission
        event.preventDefault()

        //Objet nouvelle taches
        const newTaches = {
            //Recuperation de du text definis dans le state du constructeur
            text: this.state.text,
            //Id = date a l'insatnt T
            id: Date.now()
        }

        //Si le champ est vide
        //Si la longeur du champ imput est === 0 on declenche une alerte
        if(this.state.text.length === 0){
            alert("Merci de remplir ce champs")
            return null
        }else{
            //Sinon on modifie le state
            //on remplis le tableau items avec l'objet nouvelles Taches (newTache)
            //Concat fusione deux tableau (celui de depart dans le state + la nouvelle Tache)
            //Ceci equivaut items.push(nexTaches)
            this.setState(() => ({
                items: this.state.items.concat(newTaches),
                    //Vider l'input text = a rien
                text: ""
            }))
        }
    }


    render() {
        return(
            <div className="container">
                {/*Liste pour afficher les taches*/}
                <ul>
                    {/* eslint-disable-next-line array-callback-return */}
                    {/*Boucle de parcours des elements du tableau items definis dans le state*/}
                    {this.state.items.map((item) => {
                        {/*On ajoute une clé = id et on affiche les taches (tableau item + text)*/}
                       return <li key={item.id}>{item.text}</li>
                    })}
                </ul>
                {/*Lors du click sur le bouton Ajouter taches on declenche la fonction handleSubmit*/}
                {/*ATTENTION A BIEN GARDER LE CONTEXT THIS cf: ligne: 15*/}
                <form onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label className="label">Liste des taches</label>
                        {/*Dans input la valeur est egale a text (initialisé dans le state)*/}
                        {/*On detecte un changement d'etat grace a on change + appel de la fonction handleChange*/}
                        <input
                            type="text"
                            placeholder="Entrer votre tache"
                            className="input"
                            onChange={this.handleChange.bind(this)}
                            value={this.state.text}
                            />
                        <button type="submit" className="mt-3 button is-success">Ajouter la taches</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default Taches;
import React, {Component} from "react";

class TachesForm extends Component{

    //Etat initial des taches
    state = {
        newTaches: ''
    }


    //Detecter les changements dans un input
    handleChange(event){
        //Recuperer la valeur de input avec un setter (mutateur) qui cible <input value=""/>
        this.setState({
            //On modifie le state newTaches
            newTaches: event.target.value
        })
        //Debug de input a chaque entrée
        console.log(event.target.value)
    }

    //Soumission du formulaire
    handleSubmit(event){
        //Evite le refresh de la page a la soumission
        event.preventDefault()
        //Creation de l'id
        const id = Date.now();
        //ET taches qui est egale  au state : newTaches (soit les entrée clavier de utilisateur)
        const taches = this.state.newTaches;
        //Appel de la fonction onTacheAdd cree dans le conposant parent + 2 paramètres
        //Rappel : dans le jsx du parent : <TachesForm  onTachesAdd={this.handleAdd}/>
        //et handleAdd = (item)  ici item est un objet qui va etre egale a id + taches et taches = this.state.newTaches
        //On passe les 2 constantes creer ci-dessus soit id et taches
        //c donc la fonction onTacheAdd = handleAdd dans le composant parent qui ajoute la tache au tableau grace a un push()
        this.props.onTachesAdd({
            id, taches
        })
        console.log("La nouvelle taches apres soumission : " + taches)
        //Remetter a jour le state
        //Vide le formulaire re-init du state
        this.setState({
            newTaches: ""
        })
    }

    render() {
        return(
            <div>
                {/*On garde le context this grace au bind pour le setState*/}
                {/*Dans la soumission : handleSubmit appel onTacheAdd qui appel handleAdd qui fait un push() */}
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="field">
                        <label className="label">Liste des taches</label>
                        {/*Dans input la valeur est egale a newTaches (initialisé dans le state)*/}
                        {/*On detecte un changement d'etat grace a onChange + appel de la fonction handleChange*/}
                        {/*On capte donc le changement etat locale + on affecte sa valeur a newTaches*/}
                        <input
                            type="text"
                            placeholder="Entrer votre tache"
                            className="input"
                            onChange={this.handleChange.bind(this)}
                            value={this.state.newTaches}
                        />
                        <button type="submit" className="mt-3 button is-success">Ajouter la taches</button>
                    </div>
                </form>
            </div>
        )
    }

}

export default TachesForm;
import React, {Component} from "react";
import TachesListe from "./TachesListe";
import TachesForm from "./TachesForm";

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

    }


    //Cette fonction prend en paramètre un id et est appelée au click sur le bouton dans le composant TacheListe enfant
    //Ceci grace a l'appel du composant enfant et le passage de props en tant qu'attibut
    //<TachesListe  items={this.state.items} onDelete={this.onDeleteTaches} />
    onDeleteTaches = id =>{
        //Copie du tableau
        let items = this.state.items.slice();
        //let items = [...this.state.items];
        const index = items.findIndex(item => item.id === id)
        items.splice(index, 1)
        this.setState({items})
        console.log(items)
    }

    //Cette fonction prend un paramètre item objet qui sera transferer a l'enfant lors de son appel

    handleAdd = (item) => {
        //2 manière de faire un copie du tableau items soit slice soit le spread Operator ...Quelque chose
        //const items = this.items.slice()
        const items = [...this.state.items];
        //On ajoute l'objet item au tableau items
        items.push(item)
        //Mettre jour le tableau (state) grace au mutateur setState
        this.setState({
            items
        })
        //Debug
        console.log("Noevelle objet " + items);
    }


    render() {
        return(
            <div className="container has-text-centered animate__animated animate__slideInRight">
                <TachesListe  items={this.state.items} onDelete={this.onDeleteTaches} />
                {/*Le composant TachesForm prend une props qui appel handleAdd*/}
                {/*onTachesAdd est appelé dans le composant enfant qui appel la fonction handleSubmit*/}
                <TachesForm  onTachesAdd={this.handleAdd}/>
            </div>
        )
    }
}
export default Taches;
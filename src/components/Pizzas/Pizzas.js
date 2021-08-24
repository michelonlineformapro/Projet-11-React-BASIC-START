import React,{Component} from 'react';
import {JS} from "json-server/lib/cli/utils/is";

class Pizzas extends Component{

    state = {
        pizzas: [
            {
                id: 1,
                nom: "Reine",
                ingredient: ["tomate","cerises"],
                prix: 7.5,
                image: "https://wordpress.potagercity.fr/wp-content/uploads/2019/06/Pizza-reine-champignons-et-jambon.jpg"
            },
            {
                id: 2,
                nom: "Margherita",
                ingredient: ["anchois","olives"],
                prix: 10,
                image: "https://wordpress.potagercity.fr/wp-content/uploads/2019/06/Pizza-reine-champignons-et-jambon.jpg"
            },
            {
                id: 3,
                nom: "test",
                ingredient: [""],
                prix: 10,
                image: "https://wordpress.potagercity.fr/wp-content/uploads/2019/06/Pizza-reine-champignons-et-jambon.jpg"
            },
        ],

        ingredients: [
            {
                id: 1,
                nom: "tomate"
            },
            {
                id: 2,
                nom: "mozzarella"
            },
            {
                id: 3,
                nom: "anchois"
            },
            {
                id: 4,
                nom: "vanille"
            },
        ],

        rechercherPizza:[],
        currentPizzaList: []


    }


    //Remplir le tableau de pizza
    creerPizza = (nomIngredient) => {
        const rechercherPizza = this.state.rechercherPizza
        rechercherPizza.push(nomIngredient);
        this.setState({
            rechercherPizza
        })
        console.log(rechercherPizza)

    }


    render() {
        const currentPizzaList = [...this.state.pizzas];
        const getId = currentPizzaList.map(getId =>
            getId.ingredient
        )
        const liste = [1,2];
        console.log(currentPizzaList)

        return (
            <div>

                <div className="title is-1 has-text-info">NOS PIZZAS</div>
                <div className="columns is-multiline">

                    <div className="title is-3 has-text-danger">CREER VOTRE PIZZA</div>
                    <div>
                        {this.state.ingredients.map(ingredient =>
                            <button onClick={() => this.creerPizza(ingredient.nom)} key={ingredient.id} className="button is-info m-3">{ingredient.nom}</button>
                        )}
                    </div>
                    <div className="container is-fluid has-text-danger">

                        {this.state.rechercherPizza.map(values =>
                            currentPizzaList.filter(p => p.ingredient.includes(values)) ?(
                                <div>
                                    Valeur du bouton : {values}
                                    {this.state.pizzas.map(pizza =>
                                    JSON.stringify(values) === JSON.stringify(pizza.ingredient) ? (
                                        <div>{pizza.nom}</div>
                                    ) : (
                                        <div>PAS DE RESULTATS</div>
                                    )

                                    )}

                                </div>
                            ) : (
                                <div>PAS DE RESULTAT</div>
                            )
                        )}









                    </div>
                </div>
            </div>
        );
    }
}

export default Pizzas
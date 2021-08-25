import React, {Component} from 'react';
import "./Pizzas.css";


class Pizzas extends Component {

    state = {
        pizzas: [
            {
                id: 1,
                nom: "Reine",
                ingredient: ["tomate", "mozzarella", "anchois"],
                prix: 7.5,
                image: "https://wordpress.potagercity.fr/wp-content/uploads/2019/06/Pizza-reine-champignons-et-jambon.jpg"
            },
            {
                id: 2,
                nom: "Margherita",
                ingredient: ["olives", "reblochon", "poivre"],
                prix: 10,
                image: "https://wordpress.potagercity.fr/wp-content/uploads/2019/06/Pizza-reine-champignons-et-jambon.jpg"
            },
            {
                id: 3,
                nom: "test",
                ingredient: ["tomate", "capres", "oeuf", "oseille"],
                prix: 12.5,
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

        rechercherPizza: [],

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
        const currentPizzaList = this.state.pizzas;
        console.log(currentPizzaList)

        return (
            <div>

                <div className="title is-1 has-text-info">NOS PIZZAS</div>
                <div id="pizzas-content" className="columns is-multiline">
                    <div className="title is-3 has-text-danger">CREER VOTRE PIZZA</div>
                    <div>
                        {this.state.ingredients.map(ingredient =>
                            <button onClick={() => this.creerPizza(ingredient.nom)} key={ingredient.id}
                                    className="button is-info m-3">{ingredient.nom}</button>
                        )}
                    </div>
                    <div className="container is-fluid has-text-danger">
                        {this.state.rechercherPizza.map(values =>
                                    currentPizzaList.filter(p => p.ingredient.includes(values)).map(pizza =>
                                        <div>
                                            <p>Valeur de element ajouter : {values}</p>
                                            <p>Nom pizza : {pizza.nom}</p>
                                            <p>Prix : {pizza.prix} €</p>
                                        </div>
                                    )
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pizzas
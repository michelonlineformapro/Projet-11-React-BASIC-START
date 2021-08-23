import React, {Component} from "react";

class Pizzas extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pizzas: [
                {
                    "id": 1,
                    "nom": "Reine",
                    "image": "https://m.bettybossi.ch/static/rezepte/x/bb_itku120801_0243a_x.jpg",
                    "ingredients": [
                        {
                            "id": 1,
                            "nom": "tomate",
                        },
                        {
                            "id": 2,
                            "nom": "fromage",
                        },
                        {
                            "id": 3,
                            "nom": "anchois",
                        },
                    ]
                },
                {
                    "id": 2,
                    "nom": "Margherita",
                    "image": "https://content-images.weber.com/content/Pizza-italienne.png?auto=compress,format&w=750",
                    "ingredients": [
                        {
                            "id": 1,
                            "nom": "oignons",
                        },
                        {
                            "id": 2,
                            "nom": "creme",
                        },
                        {
                            "id": 3,
                            "nom": "poivrons",
                        },
                    ]
                },
            ],

            //Liste des ingredients
            "ingredients": [
                {
                    "id": 1,
                    "nom": "tomate",
                    "image": "https://images.pexels.com/photos/4022123/pexels-photo-4022123.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                },
                {
                    "id": 2,
                    "nom": "fromage",
                    "image": "https://images.pexels.com/photos/3669501/pexels-photo-3669501.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                },
                {
                    "id": 3,
                    "nom": "anchois",
                    "image": "https://images.pexels.com/photos/5602613/pexels-photo-5602613.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                },
            ],

            choixIngredients: []
        }
    }

    //Ajouter des ingredients a un tableau
    ajouterIngredient = (ingredient) => {
        const choixIngredients = this.state.choixIngredients
        choixIngredients.push(ingredient)
        this.setState({
            choixIngredients
        })
        console.log(choixIngredients)
    }

    resultatPizza = () => {

        const choixIngredient = this.state.pizzas.map(pizza => {
            return (
                pizza.ingredients
            )
        })

        console.log(choixIngredient)

        const checkArrays = this.state.pizzas.filter(({pizza}) => pizza !== choixIngredient)
        console.log(checkArrays)
        console.log(this.state.pizzas)
    }


    render() {
        return (
            <div>
                    <div className="mt-3 columns is-multiline">
                        {this.state.pizzas.filter(pizza => this.resultatPizza).map(pizza => (
                                <div key={pizza.id} className="column is-2">
                                    <div className="card">
                                        <div className="card-image">
                                            <h4 className="title is-4 has-text-centered has-text-info">{pizza.nom}</h4>
                                            <figure className="image is-square">
                                                <img src={pizza.image} alt={pizza.nom} title={pizza.nom}/>
                                            </figure>
                                        </div>
                                        <div className="card-content">
                                            <div className="content">
                                                <ul>Ingrédients :
                                                    {pizza.ingredients.map(ingredient =>
                                                        <li key={ingredient.id}>{ingredient.nom}</li>
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                )}


                <div>
                    <div className="title is-4 has-text-danger">LISTE DES INGREDIENTS</div>
                    <div>
                        {this.state.ingredients.map(ingredientAdd =>
                            <button key={ingredientAdd.id} onClick={() => this.ajouterIngredient(ingredientAdd.nom)}
                                    className="button is-success m-3">{ingredientAdd.nom}</button>
                        )}
                    </div>
                </div>

                <div className="title is-6 has-text-success">Ingredients choisi</div>
                <p>{this.state.choixIngredients.join(' - ')}</p>
                <button className="button is-success" onClick={this.resultatPizza}>Afficher les resultats</button>
            </div>
        )
    }

}

export default Pizzas;
import React,{Component} from 'react';

class Pizzas extends Component{

    state = {

        listes: [3],

        pizzas: [
            {
                id: 1,
                nom: "Reine",
                ingredient: [3],
                prix: 7.5,
                image: "https://wordpress.potagercity.fr/wp-content/uploads/2019/06/Pizza-reine-champignons-et-jambon.jpg"
            },
            {
                id: 2,
                nom: "Margherita",
                ingredient: [2,1],
                prix: 10,
                image: "https://wordpress.potagercity.fr/wp-content/uploads/2019/06/Pizza-reine-champignons-et-jambon.jpg"
            },
            {
                id: 3,
                nom: "test",
                ingredient: [1,2,3],
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

    render() {
        const currentPizzaListe = [...this.state.pizzas]
        console.log(this.state.listes)
        console.log(currentPizzaListe)

        return (
            <div>
                {currentPizzaListe.filter(p => p.ingredient.includes(this.state.listes)).map(pizza =>
                    <div>NOM :  {pizza.nom}
                        <div>
                            TEST
                        </div>
                    </div>

                )}
            </div>
        );

    }
}

export default Pizzas
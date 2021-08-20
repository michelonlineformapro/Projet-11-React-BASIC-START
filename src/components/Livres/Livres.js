import React, {Component} from 'react';
import './Livres.css';
import ListeLivres from "./ListeLivres";


class Livres extends Component{

    render() {
        return(
            <div className="has-text-centered animate__animated animate__slideInRight">
                {/*Appel du composant enfant Liste des livres API REST*/}
                <ListeLivres />
            </div>
        )
    }
}

export default Livres;

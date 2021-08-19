import React, {Component} from "react";


//Ici in passe le tableau items en paramètre c une props qui est appelée en attribut lors de l'appel du composant dans le composant parent
//<TachesListe  items={this.state.items} onDelete={this.onDeleteTaches} />
const TachesListe = ({items, onDelete}) =>(

            <div>
                {/*Liste pour afficher les taches*/}
                <ul>
                    {/* eslint-disable-next-line array-callback-return */}
                    {/*Boucle de parcours des elements du tableau items definis dans le state*/}
                    {items.map((item) => {
                        {/*On ajoute une clé = id et on affiche les taches (tableau item + text)*/}
                        return <li key={item.id}>{item.taches}
                            {/* onDelete est appeler en paramètre de la constante et provient du composant parent*/}
                            {/* <TachesListe  items={this.state.items} onDelete={this.onDeleteTaches} /> */}
                            {/* ce dernier appel la fonction onDeleteTaches qui effectue le splice et donc retire un element du tableau items*/}
                            <button onClick={() => onDelete(item.id)} className="button is-danger">X</button>
                        </li>
                    })}
                </ul>
            </div>

)



export default TachesListe;
import React, {Component} from 'react';
import './Livres.css';


function Livres(){


    return <div className="animate__animated animate__slideInLeft">
        <Constante/>
        <ApprendreMap/>
        <BoucleMap/>
        <Condition/>
        <CreerProps cekejeveu={"Martine"}/>
        <Evenement/>
    </div>
}

function Constante(){
    const phrase = "Salut ca va";
    return(
        <div>{phrase}</div>
    )
}

function ApprendreMap(){
    const tableau = [15, "Michael", 12.25, true]

    const mapTableau = tableau.map(x => x * 2);
    return (
        <div>Test de map {mapTableau}</div>
    )
}

function BoucleMap(){
    const datas = ['choux', "hiboux", "cailloux"];

    return(
        <div style={".test-style"}>
            <ol className="menu-list">
                {datas.map((data, index) =>{
                    return <li key={`${data}-${index}`}>{data}</li>
                })}
            </ol>
        </div>
    )
}

function Condition(){
    let dataObject = [
        {
            id:1,
            nom:"Bob",
            age:35,
            taille: 1.75,
            homme: true
        },
        {
            id:2,
            nom:"Marie",
            age:25,
            taille: 1.65,
            homme: false
        }
    ]

    return(
        <div>
            <ul>
                {/*Boucle map() + condition ternaire */}
                {dataObject.map(objet => {
                    return <li key={objet.id}>
                        id = {objet.id} -
                        nom = {objet.nom} -
                        taille = {objet.taille} metres -
                        genre = {objet.homme ? "HOMME" : "FEMME"}
                    </li>
                })}
            </ul>
        </div>
    )
}

function CreerProps(props){
    const prenom = props.cekejeveu;
    return (
        <div>
            <p>Bonjour : {prenom}</p>
        </div>
    )
}

function Evenement(){
    return(
        <button onClick={handleClick} className="button is-success">CLIQUER MOI</button>
    )
}

function handleClick(){
    const prenom = "Mic";
    alert(`SALUT ${prenom}`)
}

export default Livres;

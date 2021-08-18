import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import './Menu.css';
import Accueil from "../Accueil/Accueil";
import Livres from "../Livres/Livres";
import Taches from "../Taches/Taches";


function Menu(){
    return(
        <Router>
            <div>
                <nav className="navbar" role="navigation">
                    <div className="navbar-start">
                        <span className="navbar-item">
                            <Link to="/">ACCUEIL</Link>
                        </span>
                        <span className="navbar-item">
                            <Link to="/livres">LIVRES</Link>
                        </span>
                        <span className="navbar-item">
                            <Link to="/taches">LISTES TACHES</Link>
                        </span>
                    </div>
                </nav>

                <Switch>
                    <Route exact path={"/"}>
                        <Accueil/>
                    </Route>
                    <Route path={"/livres"}>
                        <Livres/>
                    </Route>
                    <Route path={"/taches"}>
                        <Taches/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Menu;

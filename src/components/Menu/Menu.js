import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import './Menu.css';
import Accueil from "../Accueil/Accueil";
import Livres from "../Livres/Livres";


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
                    </div>
                </nav>

                <Switch>
                    <Route exact path={"/"}>
                        <Accueil/>
                    </Route>
                    <Route path={"/livres"}>
                        <Livres/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Menu;

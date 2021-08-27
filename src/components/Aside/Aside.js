import React from "react";

function Aside() {
    return (
        <div className="box">
            <div className="title is-1 has-text-success has-text-centered has-background-warning p-3">OPTIONS</div>
            <article className="panel is-info">

                <a href="/" className="panel-block is-active">
                <span className="panel-icon">
                  <i className="fas fa-book" aria-hidden="true"/>
                </span>
                    LIVRES API HOOKS
                </a>
                <a href="/livres" className="panel-block">
                <span className="panel-icon">
                  <i className="fas fa-book" aria-hidden="true"/>
                </span>
                    LIVRES API CLASSES
                </a>
                <a href="/taches" className="panel-block">
                <span className="panel-icon">
                  <i className="fas fa-book" aria-hidden="true"/>
                </span>
                    LISTE DES TACHES
                </a>
                <a href="/pizzas" className="panel-block">
                <span className="panel-icon">
                  <i className="fas fa-book" aria-hidden="true"/>
                </span>
                    PIZZAS
                </a>
            </article>
        </div>
    )}

export default Aside;
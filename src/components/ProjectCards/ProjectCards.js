import React, { Component } from "react";
import "./ProjectCards.scss";
import dsiLogo from "../../img/dsiLogoExample.png";

export default class SubHeaderBar extends Component {
    render() {  
        return (
            <div id="ProjectCard" className="projectCardStyle">
                <img alt="logo" src={dsiLogo}></img>
                <div id="Description">
                    <h2>Cloud Inventory</h2>
                    <p>Este proyecto comenzó en 2016, tiene como objetivo unir muchos proceso de inventario en una misma plataforma. Esta tuvo muchos cambios desde su creacion y aun sigue siendo un proyecto activo</p>
                </div>
            </div>
        );
    }
};
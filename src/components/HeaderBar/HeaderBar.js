import React, { Component } from "react";
import "./HeaderBar.scss";

export default class HeaderBar extends Component {
    render() {  
        return (
            <div id="Header" className="headerStyle">
                <div id="Logo" className="headerBoxes"></div>
                <div id="Title" className="headerBox">
                    <h1>Projects</h1>
                </div>
                <div id="Profile" className="headerBoxes">
                    <div id="ProfileCircle" className="profileCircle">
                        <img alt="" className="imgProfileStyle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTc7l8tebG4wuCjeYjhMLbCNItx1ahCMMMilg&usqp=CAU"/>
                    </div>
                </div>
            </div>
        );
    }
};
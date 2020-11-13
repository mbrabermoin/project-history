import React, { Component } from "react";
import "./SubHeader.scss";

export default class SubHeaderBar extends Component {
    render() {  
        return (
            <div id="SubHeader" className="subHeaderStyle">
                <div id="SearchInputSection" className="SubHeaderSearch">
                <input
                    type="text"
                    placeholder="Project Name..."
                    required="yes"
                ></input>
                </div>
                <div id="ButtonsSection" className="SubHeaderButtons">
                    <div id="AddNewBtn" className="btnStyle">
                        <p> Add New</p>
                    </div>
                    <div id="FiltersBtn" className="btnStyle" >
                        <p> Filters</p>
                    </div>
                </div>
            </div>
        );
    }
};


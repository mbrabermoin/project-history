import React, { Component } from "react";
import 'react-dropdown/style.css';
import "./AddNewBox.scss";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default class FiltersModal extends Component {
    render() { 
        return (
            <div id="AddNewModal" className="shadow">
                <div id="AddNewContainer">
                    <h2>Add New Project</h2>
                    <div id="firstRow">
                        <div id="InputField">
                            <label>
                                Project Name
                            </label>
                            <input type="text"/>
                        </div>
                        <div id="InputField">
                            <label>
                                Customer 
                            </label>
                            <input type="text"/>
                        </div>
                        <div id="InputField">
                            <label>
                                Team 
                            </label>
                            <input type="text"/>
                        </div>
                    </div>
                    <div id="secondRow">
                        <div id="LongInputField">
                            <label>
                                Description
                            </label>
                            <input type="text"/>
                        </div>
                        <div id="InputField">
                            <label>
                                Status 
                            </label>
                            <Dropdown placeholder="Select" className="dropdown"/> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
import React, { Component } from "react";
import "./FiltersBox.scss";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default class FiltersModal extends Component {
    render() { 
        const options = [
            'one', 'two', 'three'
          ];
          const defaultOption = options[0];
        return (
            <div id="FilterModal" className="shadow" >
                <div id="FiltersContainer">
                    <h2>Advanced Filters</h2>
                    <div id="FiltersRow1" className="filtersContainerBoxes">
                        <div id="box1" className="box3">
                            <h3>Date</h3>
                            <div id="DateRadioFilters">
                                <div className="radio">
                                    <label>
                                        <input type="radio" value="option1" checked={true} />
                                        Starting from
                                    </label>
                                </div>
                                <div className="radio">
                                <label>
                                    <input type="radio" value="option1" checked={false} />
                                    Range
                                </label>
                            </div>
                            </div>
                            <div id="Calendar">

                            </div>
                        </div>
                        <div id="box2" className="box1">
                            <h3>Status</h3>
                            <div id="StatusCheckboxes">
                                <label>
                                    <input type="checkbox" value="closed" checked={false} />
                                    Closed
                                </label>
                                <label>
                                    <input type="checkbox" value="closed" checked={false} />
                                    Canceled
                                </label>
                                <label>
                                    <input type="checkbox" value="closed" checked={false} />
                                    In progress
                                </label>
                                <label>
                                    <input type="checkbox" value="closed" checked={false} />
                                    New
                                </label>
                                <label>
                                    <input type="checkbox" value="closed" checked={false} />
                                    Unassigned
                                </label>
                                <label>
                                    <input type="checkbox" value="closed" checked={false} />
                                    All 
                                </label>
                            </div>
                        </div>
                    </div>    
                    <div id="FiltersRow2" className="filtersContainerBoxes">
                        <div id="box3" className="box1">
                            <h3>Technologies</h3>
                            <div id="StatusCheckboxes">
                                <label>
                                    <input type="checkbox" value="closed" checked={false} />
                                    Wire
                                </label>
                                <label>
                                    <input type="checkbox" value="closed" checked={false} />
                                    PR/ADC
                                </label>
                                <label>
                                    <input type="checkbox" value="closed" checked={false} />
                                    FAST
                                </label>
                                <label>
                                    <input type="checkbox" value="closed" checked={false} />
                                    Forms
                                </label>
                                <label>
                                    <input type="checkbox" value="closed" checked={false} />
                                    Other
                                </label>
                            </div>
                        </div>
                        <div id="box4" className="box2">
                            <h3>Resource</h3>
                            <div id="DropdownsFilters">
                                <div className="dropdowns">
                                    <Dropdown placeholder="PMs" /> 
                                </div>
                                <div className="dropdowns">
                                    <Dropdown placeholder="gA Leader" />
                                </div>
                            </div>
                            <div id="DropdownsFiltersRow2">
                                <div className="dropdowns">
                                    <Dropdown placeholder="Team" /> 
                                </div>
                                <div className="dropdowns">
                                    <Dropdown placeholder="Developer" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="SaveFilters">
                        <div id="FiltersBtn" className="btnStyleSave">
                            <p>Save</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
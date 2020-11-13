import React from 'react';
import './App.css';
import './styles.scss';
import { Component } from "react";
import Header from './components/HeaderBar/HeaderBar';
import SubHeaderBar from './components/SubHeaderBar/SubHeader';
import ProjectCards from './components/ProjectCards/ProjectCards';
import FilterModal from './components/FiltersBox/FiltersBox';
import AddNewModal from './components/AddNewBox/AddNewBox';

export default class App extends Component {
  render() {
    return (
      <div> 
        <Header/>
        <SubHeaderBar/>
        <div id="ProjectContainer" className="projectContainer">
          <ProjectCards/>
          <ProjectCards/>
          <ProjectCards/>
          <ProjectCards/>
        </div>
        <div id="ShowMoreButton" className="showMoreStyle"> 
          <div id="ShowAllBtn" className="btnShowAllStyle">
              <p> Show All</p>
          </div>
        </div>
        <div id="ModalContainer">
        <FilterModal></FilterModal>
        </div>
    </div>
    );
  }
}


/*<div id="ModalContainer">
<FilterModal></FilterModal>
<AddNewModal/>
</div>*/
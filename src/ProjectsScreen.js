import React from 'react';
import ProjectCard from './components/ProjectCard.js'
class ProjectsScreen extends React.Component {
    constructor(props) {
        super();
        this.state = {
            display: "",
        }
    }
    render() {
        return(
<div className="App">
      <link href="//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet" />
      <body>
        <ul>
          <li className="header-left text-header"><a href="#Home"><i class="fa fa-home home-icon" aria-hidden="true"></i> Home</a></li>
          <li className="header-left text-header"><a href="#Home">Projects</a></li>
          <li className="header-right"><img id="user-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTc7l8tebG4wuCjeYjhMLbCNItx1ahCMMMilg&usqp=CAU" alt="User" width="35" height="35" /></li>
          <li className="header-right text-header"><a href="#Home">Resource Name</a></li>
        </ul>
        <div>
          <div id="searchbox-container" action="/search" method="get">
            <input id="search-box" size="40" type="text" placeholder=" Project Name " />
            <i id="search-btn" class="fa fa-search fa-border" value="Search"></i>
            <button className="action-button" size="40" type="button" value="Add New" ><i class="fa fa-filter" value="Search"></i>  More Filters</button>
            <button className="action-button" size="40" type="button" value="Add New" ><i class="fa fa-plus" value="Search"></i>  Add New</button>
          </div>
        </div>
        <div id="projects-container">
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
        </div>
      </body>
    </div>);
    }
}

export default ProjectsScreen;


//puto el q lee
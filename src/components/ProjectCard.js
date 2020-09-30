import React from 'react';

class ProjectCard extends React.Component {
    constructor(props) {
        super();
        this.state = {
            projectName: "Cloud Inventory",
        }
    }
    render() {
        return (
            <div>
                <div className='projectCard'>
                    <div className='projectLogo'>
                        <img id="projectImg" src="https://1a3dfb3r61z031vcbb37vgwe-wpengine.netdna-ssl.com/wp-content/uploads/2018/04/DSI_4c-Pos.png" alt="User" />
                    </div>
                    <div className="project-header">
                        <h3 className='project-name'>{this.state.projectName}</h3>
                        <p className='company-name'>DSI</p>
                    </div>
                    <div className='project-resume'>
                        <p className='status'>Status: In Progress</p>
                        <p className='dates'>Dates: 03/10/2016 - Current</p>
                        <p className='internal-team'>Internal Team: Cloud Inventory Team</p>
                        <p className='description'>El proyecto constó de 3 aplicaciones desarrolladas en Wire y 2 en Forms.</p>
                        <button className='learn-more-btn' onClick="">Learn More</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectCard;
import React, { Component } from 'react'
import data from '../data/data'
import Project from '../components/Project'

class ProjectContainer extends Component {

    constructor (props) {
        super(props)
        this.state = {
            projects:data.projects,
            project: data.projects[0]
        }
        
    }

    nextProject = () => {
      const newIndex = this.state.project.index+1;
      this.setState({
		project:this.state.projects[newIndex-1]
      })
    }

    prevProject = () => { 
        const newIndex = this.state.project.index-1;
        this.setState({
            project:this.state.projects[newIndex-1]
        })
    
    }

    

    render() {
        const {projects, project} = this.state;
        const crtIndex = project.index;
            return (
                <section className="project-container content">
                
                    <Project project={project}/>
                        <div className="aa">
                            <button className="arrows dim" onClick={ () => this.prevProject()}
                            disabled={project.index === 1} > 
                            <i className="fas fa-chevron-left"></i>
                            </button>
                        {
                             projects.map(function(project, i) {
                                if (i+1===crtIndex)
                                    return  <i key = {project.id} className="fas fa-circle"></i>
                                 return <i key = {project.id} class="far fa-circle"></i>
                            })
                        }  
                           <button className="arrows right" onClick={() =>this.nextProject()} 
                                disabled= {project.index===data.projects.length} > 
                                <i className="fas fa-chevron-right"></i> 
                            </button>
                    </div> 
                </section>
                
                );
        }

}

export default ProjectContainer
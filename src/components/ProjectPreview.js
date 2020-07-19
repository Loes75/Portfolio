import React, {useContext} from 'react';
import Project from './Project';
import {projectContext} from '../Context';


export default function ProjectPreview() {
    const projects = useContext(projectContext); 
    return (
        <div className="ProjectPreview" id="Work">
            {projects.map( project =>{
                return(
                    <Project key={project.k} img={project.img} name={project.name} text={project.text} 
                    code={project.code} app={project.app} info={project.info}/>
                    
                )
            })}
        </div>
    )
}

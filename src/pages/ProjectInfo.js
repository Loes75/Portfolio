import React, { useContext } from 'react';
import { projectContext } from '../Context';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const searchProject = (name, projects) => {
    for (var i = 0; i < projects.length; i++) {
        if (projects[i].name === name) {
            return (projects[i]);
        }
    }
    return projects[0];

}



export default function ProjectInfo(props) {
    const projects = useContext(projectContext);
    const name = props.match.params.pj;
    const { text, info, colors, languages, phone, tablet, code, app } = searchProject(name, projects);
    return (
        <div>
            <div className="projectDiv">
                <div className="layer">
                    <div className="style">
                        <div className="imgContainer">
                            {phone !== undefined? <img src={phone} className="phone" alt="phone"></img>: null } 
                            {tablet !== undefined? <img src={tablet} className="tablet" alt="tablet"></img>: null }
                        </div>
                        <div className="palette">
                            <h3>Color palette</h3>
                            <div className="colors">
                                <div style={{backgroundColor : colors[0]}}></div>  
                                <div style={{backgroundColor : colors[1]}}></div>  
                                <div style={{backgroundColor : colors[2]}}></div> 
                            </div>
                            
                        </div>
                        <div className="languages">
                            <h3>Languages</h3>
                            <div className="language">
                                <h3>{languages[0]}</h3>
                                <h3>{languages[1]}</h3>
                                <h3>{languages[2]}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="info">
                        <h2>{text}</h2>
                        <p>{info}</p>
                        <div className="buttonsProject">
                            <a href={code} target="_blank" rel="noopener noreferrer" className="btn code">Code</a>
                            <a href={app} target="_blank" rel="noopener noreferrer" className="btn view">View</a>
                            <Link to={`/`} className="btnBack">Go back</Link>
                        </div>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}






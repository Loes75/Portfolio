import React from 'react';
import Project from './Project';
import hotel from '../img/hotel2.JPG';
import restaurant from '../img/restaurant.JPG';
import nasa from '../img/nasa.JPG';
import imageFinder from '../img/imageFinder.JPG';
import covid from '../img/covid.jpg';


var projects = [{k : 0, img : hotel, name : 'hotel', text : ' Hotel SPA, with room filter - REACT/SCSS/Contenful',
                code :"https://github.com/Loes75/HotelDeluxe", app:"https://hoteldeluxe.netlify.app/" , 
                info :"#"},
                {k : 1, img : restaurant, name : 'restaurant',text : 'Restaurant website - HTML/CSS/VanillaJs',
                code :"https://github.com/Loes75/RestaurantProject", app:"https://loes75.github.io/RestaurantProject/" , 
                info :"#"},
                {k : 2, img : nasa, name : 'nasa', text : ' Webpage consuming Nasa Api Image of the day - HTML/Bootstrap/VanillaJs',
                code :"https://github.com/Loes75/NasaPage", app:"https://loes75.github.io/NasaPage/" , 
                info :"#"},
                {k : 3, img : imageFinder, name : 'imageFinder',text : 'Image finder SPA consuming Pixabay Api - HTML/CSS/React',
                code :"https://github.com/Loes75/image-finder", app:"https://loes75.github.io/image-finder/" , 
                info :"#"},
                {k : 4, img : covid, name : 'Covid Dashboard',text : ' Dashboard  for Covid in Colombia consuming public Api - Python/Dash/Css',
                code :"https://github.com/Loes75/Dashborad_Covid", app:"https://app-covid-col.herokuapp.com/" , 
                info :"#"}];
      
export default function ProjectPreview() {
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

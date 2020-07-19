import React from 'react';
import Skill from './Skill';
import {FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import {MdMail} from 'react-icons/md';




var skills = [{k : 0,icon : <FaLinkedin/>, ref : "https://www.linkedin.com/in/laura-isabel-ochoa-escobar-a35b64172/" , info : `Creo que la grandeza de la vida está en enfrentar desafíos,
                por eso disfruto estar en entornos de aprendizaje constante y trabajo en equipo.Me gusta estar a la vanguardia y compartir ideas y pensamientos con los demás`, subinfo : "Visita mi  perfil de linkedin"}, 
                {k: 1,icon : <FaGithubSquare/>, ref : "https://github.com/Loes75/" , info : `Se me facilita identificar problemas y buscar soluciones a estos. Considero que tener unas buenas 
                bases facilita el aprendizaje, no me gusta resolver un problema sin saber como lo logré.`, subinfo : "Visita mi perfil en Github"},
                {k : 2, icon : <MdMail/>, ref : "mailto:lauraochoae7@gmail.com" , info : `En estos momentos estoy enfocada al desarrollo front end, no obstante, en mis tiempos libres disfruto aprender sobre machine learning y big data.`, subinfo : "Te gusta lo que ves? Contáctame!"}
];

export default function SkillPreview() {
    return (
        <div className="preview">
            {skills.map( item => {
                return (
                    <Skill key={item.k} icon={item.icon} refe={item.ref} info={item.info} 
                    subinfo={item.subinfo} orien={item.k%2 === 0 ?"left" : "right"} data={item.k%2 === 0 ?"fade-left" : "fade-right"}/>
                );
            })}
        </div>
    )
}

import React from 'react';
import Skill from './Skill';
import {FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import {MdMail} from 'react-icons/md';




var skills = [{k : 0,icon : <FaLinkedin/>, ref : "https://www.linkedin.com/in/laura-isabel-ochoa-escobar-a35b64172/" , info : `I believe that the greatness of life is in facing challenges, 
that's why I enjoy being in constant learning environments and teamwork.`, subinfo : "Check out my linkedin profile"}, 
                {k: 1,icon : <FaGithubSquare/>, ref : "https://github.com/Loes75/" , info : `I believe that the greatness of life is in facing challenges, 
                that's why I enjoy being in constant learning environments and teamwork.`, subinfo : "Check out my Github"},
                {k : 2, icon : <MdMail/>, ref : "mailto:lauraochoae7@gmail.com" , info : `I believe that the greatness of life is in facing challenges, 
                that's why I enjoy being in constant learning environments and teamwork.`, subinfo : "Like what you see? Write me!"}
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

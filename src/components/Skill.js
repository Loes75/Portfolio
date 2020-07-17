import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function Skill({ icon, refe, info, subinfo, orien,data }) {
    AOS.init({duration: 600,once : true, delay : 10});

    return (
        <article className={`skill ${orien}`} data-aos={data}>
            <div className="infoContainer">
                <p className={"p"}>{info}</p>
                <h4>{subinfo}</h4>
            </div>
            
            <a href={refe} target="_blank">{icon}</a>
        </article>
    )
}

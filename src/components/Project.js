import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Project({ img, name , text,code,app,info}) {
    AOS.init({duration: 700,once : true ,delay : 40});
    return (
        <article className="project" data-aos="zoom-out">
            <div className="imgContainer">
                <img src={img} alt={name} />
                <div className="buttons">
                    <a href={app} target="_blank" className="btn view">View</a>
                    <a href={code} target="_blank" className="btn code">Code</a>
                    <a href={`/Project/${name}`} className="btn info">Info</a>
                </div>
                <p>{text}</p>
            </div>
            <p className="name">{name}</p>
        </article>
    )
}

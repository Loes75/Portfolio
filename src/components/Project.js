import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

export default function Project({ img, name , text,code,app,info}) {
    AOS.init({duration: 700,once : true ,delay : 40});
    return (
        <article className="project" data-aos="zoom-out">
            <div className="imgContainer">
                <img src={img} alt={name} />
                <div className="buttons">
                    <Link to={`/Project/${name}`} className="btn info">Info</Link>
                </div>
                <p>{text}</p>
            </div>
            <p className="name">{name}</p>
        </article>
    )
}

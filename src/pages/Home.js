import React, { Fragment } from 'react'
import Hero from '../components/Hero'
import About from '../components/About';
import Work from '../components/Work';
import Footer from '../components/Footer';
import HV from '../doc/HV_LauraOchoa.pdf'


export default function Home() {
    return (
        <Fragment>
            <Hero bg="bgHome">
                <h1>Laura Ochoa</h1>
                <h2>Web Developer</h2>
                <a  type="Download" className="btn" href={HV} target="_blank">Download CV</a>
            </Hero>
            <About/>
            <Work />
            <Footer/>
            
        </Fragment>
    )
}

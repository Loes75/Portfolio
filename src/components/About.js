import React  from 'react'
import Title from './Title'
import SkillPreview from '../components/SkillPreview';

export default function About() {
    return (
        <section className="about">
            <Title title="Sobre mí"></Title>
            <SkillPreview />
        </section>
    )
}

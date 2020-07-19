import React from 'react';
import Title from '../components/Title'
import Hero from '../components/Hero';

export default function Error() {
    return (
        <div>
            <Hero bg="error">
                <Title title="Error- La página que buscas no existe"/>
            </Hero>
        </div>
    )
}

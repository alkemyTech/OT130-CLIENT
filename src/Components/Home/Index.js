import React from 'react';
import CarouselHero from './CarouselHero';
import News from './News';
import './Hero.css';
import './News.css';
import Header from '../Header/Header';

function Home() {
    return (
        <>
            <CarouselHero />
            <News />
        </>
    )
}

export default Home;
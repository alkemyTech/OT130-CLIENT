import React from 'react';
import CarouselHero from './CarouselHero';
import News from './News';
import './Hero.css';
import './News.css';
import Header from '../Header/Header';

function Home() {
    return (
        <>
            <Header />
            <CarouselHero />
            <News />
        </>
    )
}

export default Home;

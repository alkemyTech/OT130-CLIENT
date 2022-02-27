import React from 'react';
import CarouselHero from './CarouselHero';
import News from './News';
import Footer from '../Footer/Footer';
import './Hero.css';
import './News.css';

function Home() {
    return (
        <>
           <CarouselHero/>
           <News/>
           <Footer/>
        </>
    )
} 

export default Home;
import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import Topheader from '../Topheader/Topheader';

const Home = () => {
    return (
        <div>
            <Topheader></Topheader>
            <Banner></Banner>
            <About></About>
            <Contact></Contact>
            <Services></Services>
        </div>
    );
};

export default Home;
import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Consultation from '../Consultation/Consultation';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import Healthcamp from '../Healthcamp/Healthcamp';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Contact></Contact>
            <Services></Services>
            <Consultation></Consultation>
            <Healthcamp></Healthcamp>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;
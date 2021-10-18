import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Consultation from '../Consultation/Consultation';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import Footer from '../Footer/Footer';
import Healthcamp from '../Healthcamp/Healthcamp';
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
            <Consultation></Consultation>
            <Healthcamp></Healthcamp>
            <Doctors></Doctors>
            <Footer></Footer>
        </div>
    );
};

export default Home;
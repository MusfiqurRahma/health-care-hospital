import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <Container className='mt-5'>
            <Row className='about-container'>
                <Col className='about-vdo container-fluid'>
                <iframe className='iframe-vdo' src="https://www.youtube.com/embed/H1x-ATxvNe4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
                <Col>
                    <h2 style={{fontWeight:'800',color:'#000a54'}}>About Our Hospital</h2>
                    <i style={{ color: '#484848', fontSize: '18px' }}>Our healthcare consulting expertise is built on a detailed understanding of each player across the value chain, from doctors and patients to payers, drug developers and manufacturers. Our cross-disciplinary insights can help you fuel innovation, reduce costs, optimize digital technologies and achieve maximum, sustained value.We offers An Excellent And Large Selection Of Doctors, Hospitals And Clinics. 24/7 TeleDoc Service. NCQA Accredited. Application Assistance. HealthLink Member Portal. Insurance coverage: Mental health, Immunizations, Family Planning, Prescriptions, Eye exams and glasses, Hospital & E.R. care.</i> <br /> <br />
                    <Button className='btn-regular'>Know About Our Doctors</Button>
                </Col>
  </Row>
        </Container>
    );
};

export default About;
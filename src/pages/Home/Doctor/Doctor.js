import React from 'react';
import { Card, Container } from 'react-bootstrap';
import './Doctor.css';

const Doctor = (props) => {
    const { img,name,title} = props.doctor;
    return (
        <div className='doctor-item container-fluid mt-5'>
            <div  className='doctor-img'>
            <img className='img-fluid' src={img} alt="" />
            </div>
            <Container className='doctor-container'>
                <Card>                   
                    <h5>{name}</h5>
                    <h6>{title}</h6>
                </Card>
            </Container>
        </div>
    );
};

export default Doctor;
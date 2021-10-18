import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Doctor = (props) => {
    const { img } = props.doctor;
    return (
        <div>
            <Container>
                <Card className='col-lg-4'>
                    <img src={img} alt="" />
                </Card>
            </Container>
        </div>
    );
};

export default Doctor;
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <div className='contact-item mt-5'>
            <Row>
                <Col style={{borderRight:'1px solid white',color:'white'}}>
                    <h3>Dhaka</h3>
                    <div>------------</div>
                    <h6><i class="fas fa-map-marker-alt"></i> 4th Floor,Sheraton Building</h6>
                    <h6><i class="fas fa-phone-alt"></i> +8801700000000</h6>
                </Col>
                <Col style={{borderRight:'1px solid white',color:'white'}}>
                    <h3>Rajshahi</h3>
                    <div>------------</div>
                    <h6><i class="fas fa-map-marker-alt"></i> 5th Floor,New TownHall</h6>
                    <h6><i class="fas fa-phone-alt"></i> +8801900000000</h6>
                </Col>
                <Col style={{borderRight:'1px solid white',color:'white'}}>
                    <h3>Khulna</h3>
                    <div>------------</div>
                    <h6><i class="fas fa-map-marker-alt"></i> Ground floor,Sultan Market</h6>
                    <h6><i class="fas fa-phone-alt"></i> +8801800000000</h6>
                </Col>
            </Row>
            
        </div>
    );
};

export default Contact;
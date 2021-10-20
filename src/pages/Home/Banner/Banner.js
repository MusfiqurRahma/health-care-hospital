import React from 'react';
import { Col, Row,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner'>
            <Row className='banner-text'>
                <Col>
                    <h1 style={{ fontWeight: '900', color: '#000a54', marginTop: '50px' }}>We Take <span style={{ color: '#e12454' }}>Care</span><br /> Of Your Healthy Life</h1>
                    <p style={{color:'#020c5b',fontWeight:'500'}}>We provide a full range of family care and more than 40 <br /> specialty and subspecialty health care services for patients in our service area. <br />
                        Explore specialized care or select a particular service to learn more.</p>
                    <Link to='/about'>
                    <Button className='btn-regular'>Read More</Button></Link>
                </Col>
            </Row>
        </div>
    );
};

export default Banner;
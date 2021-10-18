import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner'>
            <Row >
                <Col>
                    <h2>We Take <span style={{ color: '#e12454' }}>Care</span> Of Your Healthy Life</h2>
                </Col>
            </Row>
        </div>
    );
};

export default Banner;
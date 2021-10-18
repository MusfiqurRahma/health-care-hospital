import React from 'react';
import { Col, Row,Button } from 'react-bootstrap';
import './Consultation.css';


const Consultation = () => {
    return (
        <div className='consultant-container'>
          <Row>
           <Col></Col>
                <Col className='consultant-detail'>
                <h1>Get Online Consultations</h1>
                    <p>Online Doctor Consultation is very significant at an emergency time. In critical health conditions, anyone cannot drive to go to the hospital for doctor consulting.Video calls and phone consulting are very beloved of all, and it is enough for your emergency time. This online doctor consultation service is now available all over the country.</p>
                    <Button className='detail-btn' variant="primary" size="lg">Start Video Chat <i class="fas fa-video"></i></Button>
                </Col>
           </Row>
        </div>
    );
};

export default Consultation;



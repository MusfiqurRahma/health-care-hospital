import React from 'react';
import { Col, Row,Button} from 'react-bootstrap';

const Healthcamp = () => {
    return (
      <>  <div className='bg-white p-5 mt-5' style={{color:'#223645',fontWeight:'700'}}>
            <h1>Upcoming Health Camp</h1>
            <p>---Very soon we're going to starting a Health Camp---</p>
            <img src="https://www.devsnews.com/wp/medidove/wp-content/themes/medidove/img/shape/section-title-line.png" alt="" />
        </div>
        <Row>
        <Col sm={6}>
                    <img className='w-50 mb-5' src="https://docmedc.com/wp-content/uploads/2019/02/Physiotherapy.jpg" alt="" />
                            
        </Col>
        <Col sm={4} style={{color:'#223645'}}>
                    <h2>Physiotherapy Camp</h2>
                    <h6>Physiotherapy is treatment to restore, maintain, and make the most of a patient's mobility, function, and well-being. Physiotherapy helps through physical ...</h6> <br />
                    <h6><i className="far fa-clock text-primary"></i> 2:00 - 4:00 pm</h6>
                    <h6><i className="far fa-calendar-alt text-primary"></i> Saturday, December 15 2021</h6>
        </Col>
        <Col sm={2}>
        <Button variant="primary mt-5 btn-regular">Join Now</Button>       
        </Col>
        </Row>
        <Row>
        <Col sm={6}>
           <img className='w-50 mb-5' src="http://wwsthemes.com/themes/medwise/v2.0/images/500-344-3.jpg" alt="" />         
        </Col>
        <Col sm={4} style={{color:'#223645'}}>
                    <h2>General Fitness Session</h2>
                    <h6>Physical fitness is a state of health and well-being and, more specifically, the ability to perform aspects of sports, occupations and daily activities.</h6> <br />
                    <h6><i className="far fa-clock text-primary"></i> 2:00 - 4:00 pm</h6>
                    <h6><i className="far fa-calendar-alt text-primary"></i> Saturday, December 15 2021</h6>
        </Col>
        <Col sm={2}>
        <Button variant="primary mt-5 btn-regular">Join Now</Button>    
        </Col>
        </Row>
        <Row>
        <Col sm={6}>
           <img  className='w-50 mb-5' src="https://parramattadentalavenue.com.au/wp-content/uploads/2020/01/Why-Is-Preventative-Dentistry-So-Important.jpeg" alt="" />         
        </Col>
        <Col sm={4} style={{color:'#223645'}}>
                    <h2>Online Dental Camp</h2>
                    <h6>Proper dental care and health is part of your overall well being. ...or oral health is concerned with your teeth, gums and mouth.</h6><br />
                    <h6><i className="far fa-clock text-primary"></i> 2:00 - 4:00 pm</h6>
                    <h6><i className="far fa-calendar-alt text-primary"></i> Saturday, December 15 2021</h6>
        </Col>
        <Col sm={2}>
        <Button variant="primary mt-5 btn-regular">Join Now</Button>         
        </Col>
        </Row>
         </>
    );
};

export default Healthcamp;
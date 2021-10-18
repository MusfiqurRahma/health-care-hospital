import React from 'react';
import { Col, Row,} from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div style={{backgroundColor:'#062a4d',marginTop:'30px',padding:'40px'}}>
            <Row>
            <Col xs={6} md={4}>
            <img src="https://www.devsnews.com/wp/medidove/wp-content/uploads/2019/06/logo-2.png" alt="" />
            </Col>
            <Col xs={6} md={4}>
               <h4 className='text-light'>Subscribe to <br /> Our Newsletter</h4>
            </Col>
            <Col xs={6} md={4}>
            <div className="input-group mb-3">
          <input type="text" class="form-control" placeholder="Your Email Address" aria-label="Recipient's username" aria-describedby="button-addon2"/>
          <button style={{backgroundColor:'#e12454',color:'white',fontWeight:'500'}} className="btn btn-outline-secondary" type="button" id="button-addon">Subscribe</button>
          </div>
            </Col>
            </Row>
            <hr className='text-white' />
            <Row className='text-white'>
                <Col>
                    <h4>Get In Touch</h4> <hr />
                    <h6 className='text-secondary'><i class="fas fa-phone-alt"></i> MON TO FRI(08AM-05PM)</h6> 
                    <h4>Official: +8801700000000</h4> <br />
                    <h6 className='text-secondary'><i class="fas fa-envelope-square"></i> DO YOU HAVE A QUESTIONS?</h6>
                    <h4> support@gmail.com</h4>
                    <p>Wari,Dhaka-1100 <br /> Bangladesh</p>
                    <h6 className='text-secondary'><i class="fas fa-envelope-square"></i> SOCIAL NETWORK</h6>
                    <div className='social-icon'>
                        <i className="fab fa-facebook fb"></i>
                        <i className="fab fa-twitter twitter"></i>
                        <i className="fab fa-google-plus-g google"></i>
                        <i className="fab fa-youtube youtube"></i>
                        <i className="fab fa-whatsapp whatsapp"></i>
                    </div>
                </Col>
                <Col xs={5}>
                    <h4>Quick Links</h4> <hr />
                    <div>
                    <a style={{color:'white'}} href="/home">Home</a><br/> <br />
                    <a style={{color:'white'}} href="/service">Service</a><br/> <br />
                    <a style={{color:'white'}} href="/about">About</a><br/><br />
                    <a style={{color:'white'}} href="/doctors">Doctors</a><br/> <br />
                    <a style={{color:'white'}} href="/contact">Contact</a><br/><br />
                    </div>
                </Col>
                <Col>
                    <h4>Our Services</h4>
                    <hr />
                    <div>
                    <a style={{color:'white'}} href="/eyecare">Eye Care</a><br/>
                    <a style={{color:'white'}} href="/bloodcancer">Blood Cancer</a><br/>
                    <a style={{color:'white'}} href="/neurologysergery">Neurology Surgery</a><br/>
                    <a style={{color:'white'}} href="/alargycissue">Alargyc Issue</a><br/>
                    <a style={{color:'white'}} href="/bodysurgery">Body Surgery</a><br/>
                    <a style={{color:'white'}} href="/dentalcare">Dental care</a><br/>
                    <a style={{color:'white'}} href="/emergencycare">Emergency Care</a><br/>
                    <a style={{color:'white'}} href="/bloodtest">Blood Test</a><br/>
                    <a style={{color:'white'}} href="/outdoorcheckup">Outdoor Checkup</a><br/>
                    </div>
                </Col>
            </Row>
                <hr className='text-white'/>
                <p className='text-white fw-bold'>Copyright ©2021 @Musfiqur Rahman.All Rights Reserved Copyright</p>
        </div>
    );
};

export default Footer;



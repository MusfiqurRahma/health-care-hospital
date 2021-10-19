import React, { Fragment } from 'react';
import { Col, Container, Form, Row,Button} from 'react-bootstrap';
import './Login.css';
import logInform from '../../../src/images/logo/login.gif';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {
  const { signInUsingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/services';
  

  const handleGoogleLogin = () => {
    signInUsingGoogle()
    .then(result => {
      history.push(redirect_uri)
      })
  }

    return (
      <>  <Fragment>
            <Container className='form-container'>
                <Row>
                  <Col lg={6} md={6} sm={12} className='p-5 form'>
                        <div className='login-box p-5'>
                           <img className='login-img' src={logInform} alt="" /> 
                        <Form className='mt-3'>        
                         <Form.Group className="mb-3">
                         <Form.Control type="email"      placeholder="Enter email" required/>
                         </Form.Group>
                                
                          <Form.Group className="mb-3">
                          <Form.Control type="password" placeholder="Password" />
                          </Form.Group>
                              
                         <a className='ml-3' href="forgotPassword">Forgot Password?</a> <br />
                                
                          <Button className='btn-block' variant="success" type="submit">
                          Submit
                        </Button>
                       <p>New User? <Link to='/register'>Create Account</Link></p>                
                </Form>
                <div>------Sign in with------</div>
                  <Button onClick={handleGoogleLogin} className='btn-google' variant="success" type="submit">
                     Google
                    </Button>
                   </div>
                </Col>
              </Row>
            </Container>
      </Fragment>
       </>
    );
};

export default Login;
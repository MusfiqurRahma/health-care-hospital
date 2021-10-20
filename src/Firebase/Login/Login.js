import React, { Fragment } from 'react';
import { Col, Container, Form, Row,Button} from 'react-bootstrap';
import './Login.css';
import logInform from '../../../src/images/logo/3532919.png';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {
  const { signInUsingGoogle, handleSignIn, setEmail, setPassword, user } = useAuth();
  console.log(user);
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/services';
  

  const handleGoogleLogin = () => {
    signInUsingGoogle()
    .then(result => {
      history.push(redirect_uri)
      })
  }
  const handleEmailChange= e =>{
    setEmail(e.target.value);

}
const handlePasswordChange= e =>{
  setPassword(e.target.value);
}

    return (
      <Fragment>
        <Container className='form-container'>

          <Row>
            <Col lg={6} sm={12} className='p-5 form'>
              <div className='login-box'>
              <img className='login-img' src={logInform} alt="" /> 
              </div>
              <h2 style={{color:'#062a4d',fontWeight:'700'}}><i class="fas fa-sign-in-alt"></i> Sign In</h2>
              <Form className='mt-3'>

                <Form.Group className="mb-3">
                         <Form.Control onChange={handleEmailChange}  type="email"      placeholder="Enter email" required/>
                </Form.Group>
                
                <Form.Group className="mb-3">
                          <Form.Control onChange={handlePasswordChange} type="password" placeholder="Password" />
                </Form.Group>
                
                <a className='ml-3' href="forgotPassword">Forgot Password?</a> <br />

                <Button onClick={handleSignIn} className='btn-block' variant="success" type="submit">Submit
                </Button>

                <p>New User? <Link to='/register'>Create Account ?</Link></p>   
                
                <div className='text-danger'>------Sign in with------</div>
                <Button onClick={handleGoogleLogin} className='btn-googlee' variant="success" type="submit"><i className="fab fa-google"></i>
                Google
                </Button>
          
              </Form>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
};

export default Login;
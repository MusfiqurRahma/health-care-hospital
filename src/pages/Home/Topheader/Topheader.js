import {Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import headerLogo from '../../../images/logo/logo.png';

const Topheader = () => {
    const { user, logOut} = useAuth();
    return (
        <>
            <Navbar bg="light" variant="light" sticky='top' collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img src={headerLogo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-center">
                        <Nav className='text-primary'>
                            <Nav.Link className='text-black fw-bold' as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link className='text-black fw-bold' as={Link} to="/services">Services</Nav.Link>
                            <Nav.Link className='text-black fw-bold' as={Link} to="/about">About</Nav.Link>
                            <Nav.Link className='text-black fw-bold' as={Link} to="/doctors">Doctors</Nav.Link>
                            <Nav.Link className='text-black fw-bold' as={Link} to="/contact">Contact</Nav.Link>
                            </Nav>                           
                            </Navbar.Collapse>
                            {
                              user?.email? <button style={{backgroundColor:'#e12454',color:'white',marginRight:'20px'}} onClick={logOut}><i class="fas fa-sign-out-alt"></i> Sign Out</button>:<Nav.Link className='text-black fw-bold' as={Link} to="/login"><i class="fas fa-sign-in-alt"></i> Login</Nav.Link>
                           }                    
                           <Navbar.Text className='text-black fw-bold'>
                        Signed in as: <a className='text-black' href="#login">{user?.displayName}</a>
                    </Navbar.Text>
                    <img style={{width:'40px',borderRadius:'50%',marginLeft:'10px'}} src={user?.photoURL} alt="" />
                </Container>
            </Navbar>
        </>
    )
};

export default Topheader;
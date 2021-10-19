import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Register = () => {
    const { signInUsingGoogle } = useAuth();
    console.log(signInUsingGoogle);
    return (
        <div className='login-form'>
        <div>
            <h2>Create an account Please</h2>
            <form onSubmit="">
                <input type="email" name="" id="" placeholder='Your Email' />
                <br />
                <input type="password" name="" id="" placeholder='Your Password' />
                <br />
                <input type="password" name="" id="" placeholder='Re-enter Password' />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p>Already have an account? <Link to='/login'>Sign In</Link></p>
            <div>------------or------------</div>
            
            </div>
            <button onClick={signInUsingGoogle} className="btn-regular text-white">Google Sign In</button>
    </div>
    );
};

export default Register;
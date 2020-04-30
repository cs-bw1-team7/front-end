import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';

const Welcome = () => {
    return (
        <div>
            <Header/>
            <section className='initial-sign-in-page-section'>
                <div>
                    <h2>Welcome!</h2>
                    <Link to='/api/login'><button className='planner-sign-in-button'>Log In</button></Link>
                    <Link to='/api/registration'><button className='welcome-sign-in-button'>Sign Up</button></Link>
                    <Link to='/api/registration'><p>Create an Account</p></Link>
                </div>
            </section>
        </div>
    )
};

export default Welcome;
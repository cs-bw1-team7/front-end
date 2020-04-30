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
                    <Link to='/planner/login'><button className='planner-sign-in-button'>Log In</button></Link>
                    <Link to='/register'><button className='welcome-sign-in-button'>Sign Up</button></Link>
                    <Link to='/register'><p>Create an Account</p></Link>
                </div>
            </section>
        </div>
    )
};

export default Welcome;
import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';

const Signup = () => {
    return (
        <div>
            <Header/>
            <section className='initial-sign-in-page-section'>
                <div>
                    <h2>Create an Account</h2>
                    <Link to='/api/register'><button className='planner-sign-in-button'>I want to be a Dungon Dweller</button></Link>
            
                    <Link to='/api/login'><p>Already have an account? Log in here.</p></Link>
                </div>
            </section>
        </div>
    )
};

export default Signup;
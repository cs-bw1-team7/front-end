import React from 'react';
// import { Link } from 'react-router-dom';
import Header from './Header';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const validate = ({ username, email, password1, password2 }) => {
	const errors = {};
	if (!username) {
		errors.username = 'Please create a username';
	} else if (username.length < 2) {
		errors.username = 'Your username must have two characters or more';
	}

	if (!email) {
		errors.email = 'Please create a email';
	} else if (email.length < 2) {
		errors.email = 'Your email must have two characters or more';
	}

	if (!password1) {
		errors.password1 = 'Please create a password1';
	} else if (/\d/.test(password1) === false) {
		errors.password1 = 'Your password1 must contain a number';
	} else if (password1.length < 5) {
		errors.password1 = 'Your password1 must have five characters or more';
	}

	if (!password2) {
		errors.password2 = 'Please create a password2';
	} else if (/\d/.test(password2) === false) {
		errors.password2 = 'Your password2 must contain a number';
	} else if (password2.length < 5) {
		errors.password2 = 'Your password2 must have five characters or more';
	}

	return errors;
};

const CreateAccount = (props) => {
	return (
		<div>
			<Header />
			<section className='log-in-page-section'>
				<h2>Create an Account</h2>
				<Formik
					initialValues={{
						username : '',
						email : '',
						password1: '',
						password2 : '',
					}}
					onSubmit={(values, tools) => {
						axiosWithAuth()
							.post('/api/registration', values)
							.then((response) => {
								localStorage.setItem('token', response.data.token);
								props.history.push('/api/login');
								tools.resetForm();
							})
							.catch((error) => {
								console.log(error);
							});
					}}
					validate={validate}>
					{() => {
						return (
							<Form className='form' autoComplete='off'>
								<div className='input-container'>
									<label htmlFor='username'>Username</label>
									<Field name='username' type='text' placeholder='Create Username' />
									<ErrorMessage name='username' component='div' className='error' />
								</div>

								<div className='input-container'>
									<label htmlFor='email'>Email</label>
									<Field name='email' type='text' placeholder='Create email' />
									<ErrorMessage name='email' component='div' className='error' />
								</div>

								<div className='input-container'>
									<label htmlFor='password1'>Password1</label>
									<Field name='password1' type='password' placeholder='Create password1' />
									<ErrorMessage name='password1' component='div' className='error' />
								</div>

								<div className='input-container'>
									<label htmlFor='password2'>Password2</label>
									<Field name='password2' type='password' placeholder='Create password2' />
									<ErrorMessage name='password2' component='div' className='error' />
								</div>

								<button className='planner-sign-in-button button-spacing' type='submit'>
									Sign Up
								</button>
							</Form>
						);
					}}
				</Formik>

				{/* <Link to='/api/register'>
					<p>Create an account here.</p>
				</Link> */}
			</section>
		</div>
	);
};

export default CreateAccount;

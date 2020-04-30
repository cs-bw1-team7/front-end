import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { Formik, Form, Field } from 'formik';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = (props) => {
	const [error, setError] = useState('');
	
	return (
		<div>
			<Header />
			<section className='log-in-page-section'>
				<h2>Log In</h2>
				<Formik
					initialValues={{
						username : '',
						email: '',
						password1 : '',
						password2 : '',
					}}
					onSubmit={(values, tools) => {
						axiosWithAuth()
							.post('/api/login', values)
							.then((response) => {
								localStorage.setItem('token', response.data.token);
								props.history.push('/dungeon');
								tools.resetForm();
							})
							.catch((error) => {
								console.log(error);
								if (error) {
									setError('Wrong information. Please try again.');
								};
							});
					}}
				>
					{() => {
						return (
							<Form className='form' autoComplete='off'>
								<div className='input-container'>
									<label htmlFor='username'>Username</label>
									<Field name='username' type='text' placeholder='Enter Username' />
								</div>

								<div className='input-container'>
									<label htmlFor='email'>Email</label>
									<Field name='email' type='text' placeholder='Enter email' />
								</div>

								<div className='input-container'>
									<label htmlFor='password1'>Password1</label>
									<Field name='password1' type='password' placeholder='Enter Password1' />
									<p className='sign-in-error'>{error}</p>
								</div>

								<div className='input-container'>
									<label htmlFor='password2'>Password2</label>
									<Field name='password2' type='password' placeholder='Enter Password2' />
									<p className='sign-in-error'>{error}</p>
								</div>

								<button className='planner-sign-in-button button-spacing' type='submit'>
									Log In
								</button>
							</Form>
						);
					}}
				</Formik>

				<Link to='/api/registration'>
					<p>Create an Account</p>
				</Link>
			</section>
		</div>
	);
};

export default Login;
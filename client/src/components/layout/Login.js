import React, { useState } from 'react';

const Login = () => {
	const [ user, setUser ] = useState({
		email: '',
		password: ''
	});

	const { email, password } = user;

	const onChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		console.log('Login');
	};

	return (
		<div className='popup'>
			<label htmlFor='login-popup' className='transparent-label' />
			<div className='popup-inner'>
				<div className='popup-title'>
					<label htmlFor='login-popup' className='popup-close-btn'>
						X
					</label>
					<h3 className='popup-title__heading'>Login your Account</h3>
				</div>

				<div className='popup__social'>
					<a href='#!' className='popup__social--links popup__social--links-google'>
						<svg className='popup__social--icon'>
							<use xlinkHref='/img/sprite.svg#icon-google' />
						</svg>
					</a>
					<a href='#!' className='popup__social--links popup__social--links-fb'>
						<svg className='popup__social--icon'>
							<use xlinkHref='/img/sprite.svg#icon-facebook' />
						</svg>
					</a>
					<a href='#!' className='popup__social--links popup__social--links-tw'>
						<svg className='popup__social--icon'>
							<use xlinkHref='/img/sprite.svg#icon-twitter' />
						</svg>
					</a>
				</div>

				<form className='popup__form' onSubmit={onSubmit}>
					<div className='popup__group'>
						<input
							type='email'
							name='email'
							value={email}
							onChange={onChange}
							className='popup__group--input'
							placeholder='Email'
							required
						/>
						<label htmlFor='email' className='popup__group--label'>
							Email
						</label>
					</div>

					<div className='popup__group'>
						<input
							type='password'
							name='password'
							value={password}
							onChange={onChange}
							className='popup__group--input'
							placeholder='Password'
							required
						/>
						<label htmlFor='password' className='popup__group--label'>
							Password
						</label>
					</div>

					<div className='popup__group popup__button'>
						<button type='submit' className='btn popup__group--submit'>
							Login
							<svg className='popup__group--icon'>
								<use xlinkHref='/img/sprite.svg#icon-login' />
							</svg>
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;

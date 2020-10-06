import React, { useState } from 'react';

const Register = () => {
	const [ user, setUser ] = useState({
		name: '',
		email: '',
		password: '',
		passwordConfirm: ''
	});

	const { name, email, password, passwordConfirm } = user;

	const onChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		console.log('Register');
	};
	return (
		<div className='popup'>
			<label htmlFor='register-popup' className='transparent-label' />
			<div className='popup-inner'>
				<div className='popup-title'>
					<label htmlFor='register-popup' className='popup-close-btn'>
						X
					</label>
					<h3 className='popup-title__heading'>Register New Account</h3>
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

				<form onSubmit={onSubmit} className='popup__form'>
					<div className='popup__group'>
						<input
							type='text'
							name='name'
							value={name}
							onChange={onChange}
							className='popup__group--input'
							placeholder='Name'
							required
						/>
						<label htmlFor='name' className='popup__group--label'>
							Name
						</label>
					</div>

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
						/>
						<label htmlFor='password' className='popup__group--label'>
							Password
						</label>
					</div>

					<div className='popup__group'>
						<input
							type='password'
							name='passwordConfirm'
							value={passwordConfirm}
							onChange={onChange}
							className='popup__group--input'
							placeholder='Password Confirm'
						/>
						<label htmlFor='pass-confirm' className='popup__group--label'>
							Password Confirm
						</label>
					</div>

					<div className='popup__group popup__button'>
						<button type='submit' className='btn popup__group--submit'>
							<svg className='popup__group--icon'>
								<use xlinkHref='/img/sprite.svg#icon-circle-with-plus' />
							</svg>
							Register
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;

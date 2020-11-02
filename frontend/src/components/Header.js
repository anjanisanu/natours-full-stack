import React from 'react';
import Login from './Login';
import Register from './Register';

const Header = () => {
	return (
		<header className='header'>
			<div className='header__details'>
				<a href='#!' className='header__details--email'>
					<svg className='header__icon'>
						<use xlinkHref='/img/sprite.svg#icon-mail' />
					</svg>
					info@website.com
				</a>
				<a href='#!' className='header__details--phone'>
					<svg className='header__icon'>
						<use xlinkHref='/img/sprite.svg#icon-phone' />
					</svg>
					+91-123-456-7890
				</a>
			</div>

			<div className='header__user'>
				<div className='popup-container'>
					<label className='popup-button' htmlFor='login-popup'>
						<svg className='popup-button__icon'>
							<use xlinkHref='/img/sprite.svg#icon-login' />
						</svg>
						Login
					</label>

					<input type='checkbox' id='login-popup' />

					<Login />
				</div>

				<div className='popup-container'>
					<label className='popup-button' htmlFor='register-popup'>
						<svg className='popup-button__icon'>
							<use xlinkHref='/img/sprite.svg#icon-user-plus' />
						</svg>
						Register
					</label>

					<input type='checkbox' id='register-popup' />

					<Register />
				</div>
			</div>
		</header>
	);
};

export default Header;

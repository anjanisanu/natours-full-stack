import React from 'react';

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

							<form action='#' className='popup__form'>
								<div className='popup__group'>
									<input type='email' name='email' className='popup__group--input' placeholder='Email' required />
									<label htmlFor='email' className='popup__group--label'>
										Email
									</label>
								</div>

								<div className='popup__group'>
									<input type='password' name='password' className='popup__group--input' placeholder='Password' />
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
				</div>

				<div className='popup-container'>
					<label className='popup-button' htmlFor='register-popup'>
						<svg className='popup-button__icon'>
							<use xlinkHref='/img/sprite.svg#icon-user-plus' />
						</svg>
						Register
					</label>

					<input type='checkbox' id='register-popup' />

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

							<form className='popup__form'>
								<div className='popup__group'>
									<input type='text' name='name' className='popup__group--input' placeholder='Name' required />
									<label htmlFor='name' className='popup__group--label'>
										Name
									</label>
								</div>

								<div className='popup__group'>
									<input type='email' name='email' className='popup__group--input' placeholder='Email' required />
									<label htmlFor='email' className='popup__group--label'>
										Email
									</label>
								</div>

								<div className='popup__group'>
									<input
										type='password'
										name='password'
										id='password'
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
										name='pass-confirm'
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
				</div>
			</div>
		</header>
	);
};

export default Header;

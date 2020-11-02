import React from 'react';

const Footer = () => {
	return (
		<footer className='footer'>
			<nav className='footer__nav'>
				<ul className='footer__nav--links'>
					<li>
						<a className='footer__nav--link' href='/'>
							Home
						</a>
					</li>
					<li>
						<a className='footer__nav--link' href='#!'>
							About
						</a>
					</li>
					<li>
						<a className='footer__nav--link' href='#!'>
							Tours
						</a>
					</li>
					<li>
						<a className='footer__nav--link' href='#!'>
							Contact Us
						</a>
					</li>
				</ul>
			</nav>
			<div className='footer__copyright'>
				<p className='footer__copyright--text'>&copy; 2020 Natours. Designed &amp; Developed by: Anjani Sanu</p>
			</div>
		</footer>
	);
};

export default Footer;

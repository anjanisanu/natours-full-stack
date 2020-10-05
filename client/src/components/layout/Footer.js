import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className='footer'>
			<nav className='footer__nav'>
				<ul className='footer__nav--links'>
					<li>
						<Link to='/' className='footer__nav--link'>
							Home
						</Link>
					</li>
					<li>
						<Link to='#!' className='footer__nav--link'>
							About
						</Link>
					</li>
					<li>
						<Link to='/tours' className='footer__nav--link'>
							Tours
						</Link>
					</li>
					<li>
						<Link to='#!' className='footer__nav--link'>
							Contact Us
						</Link>
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

import React from 'react';

const Navbar = () => {
	return (
		<div className='navigation'>
			<nav className='navigation__nav'>
				<div className='logo'>
					<a href='/' className='logo__link'>
						<img src='./img/logo.png' alt='Natours logo' className='logo__img' />
					</a>
				</div>

				<ul className='navigation__navbar'>
					<li>
						<a href='/' className='navigation__navbar--links'>
							Home
						</a>
					</li>
					<li>
						<a href='#!' className='navigation__navbar--links'>
							About Us
						</a>
					</li>
					<li>
						<a href='tours.html' className='navigation__navbar--links'>
							Tours
						</a>
					</li>
					<li>
						<a href='#!' className='navigation__navbar--links'>
							Contact Us
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;

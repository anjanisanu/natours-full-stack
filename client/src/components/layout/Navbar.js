import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='navigation'>
			<nav className='navigation__nav'>
				<div className='logo'>
					<Link to='/' className='logo__link'>
						<img src='./../../img/logo.png' alt='Natours logo' className='logo__img' />
					</Link>
				</div>

				<ul className='navigation__navbar'>
					<li>
						<Link to='/' className='navigation__navbar--links'>
							Home
						</Link>
					</li>
					<li>
						<Link to='/' className='navigation__navbar--links'>
							About Us
						</Link>
					</li>
					<li>
						<Link to='/tours' className='navigation__navbar--links'>
							Tours
						</Link>
					</li>
					<li>
						<Link to='/' className='navigation__navbar--links'>
							Contact Us
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;

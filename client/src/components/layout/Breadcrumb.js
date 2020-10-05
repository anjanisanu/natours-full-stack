import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ title }) => {
	return (
		<section className='breadcrumb'>
			<div className='breadcrumb__content'>
				<h1 className='breadcrumb__heading'>{title}</h1>
			</div>
			<nav className='breadcrumb__nav'>
				<ul className='breadcrumb__links'>
					<li>
						<Link to='/' className='breadcrumb__link'>
							Home
						</Link>
					</li>
					<li>
						<Link to='/tours' className='breadcrumb__link'>
							Tours
						</Link>
					</li>
					<li>
						<Link to='#!' className='breadcrumb__link active'>
							{title}
						</Link>
					</li>
				</ul>
			</nav>
		</section>
	);
};

export default Breadcrumb;

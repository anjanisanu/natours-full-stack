import React from 'react';
import { Link } from 'react-router-dom';

const slider = () => {
	return (
		<section className='slider'>
			<div className='slider__content'>
				<h1 className='slider__heading'>
					Outdoors <span>is where things happens</span>
				</h1>
				<Link to='/tours' className='btn tours-btn'>
					View All Tours &rarr;
				</Link>
			</div>
		</section>
	);
};

export default slider;

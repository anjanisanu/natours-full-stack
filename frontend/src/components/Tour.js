import React, { Fragment } from 'react';

const Tour = () => {
	return (
		<Fragment>
			<div className='tour'>
				<img src='./img/tour-image.jpg' alt='Tour Name' className='tour__image' />
				<h3 className='tour__heading'>The Sea Explorer</h3>
				<h4 className='tour__sub-heading'>7-Day Tour</h4>
				<p className='tour__desc'>Exploring the jaw-dropping US east coast by foot and by boat</p>

				<div className='tour__details'>
					<span className='tour__details--size'>Medium Sized Tour</span>
					<div className='tour__details--data'>
						<svg className='tour__details--icon'>
							<use xlinkHref='img/sprite.svg#icon-location-pin' />
						</svg>
						<p className='tour__details--name'>Miami, USA</p>
					</div>
					<div className='tour__details--data'>
						<svg className='tour__details--icon'>
							<use xlinkHref='img/sprite.svg#icon-calendar' />
						</svg>
						<p className='tour__details--name'>June 2021</p>
					</div>
					<div className='tour__details--data'>
						<svg className='tour__details--icon'>
							<use xlinkHref='img/sprite.svg#icon-location-pin' />
						</svg>
						<p className='tour__details--name'>4 stops</p>
					</div>
					<div className='tour__details--data'>
						<svg className='tour__details--icon'>
							<use xlinkHref='img/sprite.svg#icon-user' />
						</svg>
						<p className='tour__details--name'>15 people</p>
					</div>
				</div>

				<a href='#!' className='btn details-btn' title='Tour Details'>
					&rarr;
				</a>
			</div>
		</Fragment>
	);
};

export default Tour;

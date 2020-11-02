import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Tour = ({ tour }) => {
	return (
		<Fragment>
			<div className='tour'>
				<img src='./img/tour-image.jpg' alt='Tour Name' className='tour__image' />
				<h3 className='tour__heading'>{tour.name}</h3>
				<h4 className='tour__sub-heading'>{tour.duration} Days Tour</h4>
				<p className='tour__desc'>{tour.summary}</p>

				<div className='tour__details'>
					<span className='tour__details--size'>
						{tour.difficulty.slice(0, 1).toUpperCase() + tour.difficulty.slice(1)} Sized Tour
					</span>
					<div className='tour__details--data'>
						<svg className='tour__details--icon'>
							<use xlinkHref='img/sprite.svg#icon-location-pin' />
						</svg>
						<p className='tour__details--name'>{tour.startLocation.description}</p>
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
						<p className='tour__details--name'>{tour.locations.length} stops</p>
					</div>
					<div className='tour__details--data'>
						<svg className='tour__details--icon'>
							<use xlinkHref='img/sprite.svg#icon-user' />
						</svg>
						<p className='tour__details--name'>{tour.maxGroupSize} people</p>
					</div>
				</div>

				<Link to={`/tours/${tour._id}`} className='btn details-btn' title='Tour Details'>
					&rarr;
				</Link>
			</div>
		</Fragment>
	);
};

export default Tour;

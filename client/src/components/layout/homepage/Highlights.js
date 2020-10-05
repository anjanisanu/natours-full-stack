import React from 'react';

const Highlights = () => {
	return (
		<section className='highlights'>
			<div className='card'>
				<svg className='card__icon'>
					<use xlinkHref='img/sprite.svg#icon-sphere' />
				</svg>
				<h3 className='card__heading'>Explore the World</h3>
				<p className='card__sub-heading'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, perspiciatis.
				</p>
			</div>
			<div className='card'>
				<svg className='card__icon'>
					<use xlinkHref='img/sprite.svg#icon-compass' />
				</svg>
				<h3 className='card__heading'>Meet Nature</h3>
				<p className='card__sub-heading'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, perspiciatis.
				</p>
			</div>
			<div className='card'>
				<svg className='card__icon'>
					<use xlinkHref='img/sprite.svg#icon-map' />
				</svg>
				<h3 className='card__heading'>Find your Way</h3>
				<p className='card__sub-heading'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, perspiciatis.
				</p>
			</div>
			<div className='card'>
				<svg className='card__icon'>
					<use xlinkHref='img/sprite.svg#icon-heart-outlined' />
				</svg>
				<h3 className='card__heading'>Live Healthier Life</h3>
				<p className='card__sub-heading'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, perspiciatis.
				</p>
			</div>
		</section>
	);
};

export default Highlights;

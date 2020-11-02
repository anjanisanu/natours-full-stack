import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Guides from './../components/Guides';
import { tourDetails } from './../actions/tourActions';

const TourDetailsScren = ({ match }) => {
	const tourId = match.params.id;
	const dispatch = useDispatch();

	const tourDetail = useSelector((state) => state.tourDetails);
	const { loading, error, tour } = tourDetail;

	useEffect(
		() => {
			dispatch(tourDetails(tourId));
		},
		[ dispatch, tourId ]
	);

	return (
		<Fragment>
			{loading && <h2>Loading</h2>}
			{error && <h2>{error}</h2>}

			{tour && (
				<Fragment>
					<section className='breadcrumb'>
						<div className='breadcrumb__content'>
							<h1 className='breadcrumb__heading'>{tour.data.name}</h1>
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
										{tour.data.name}
									</Link>
								</li>
							</ul>
						</nav>
					</section>

					<section className='section-tour mb-3'>
						<div className='section-tour__details'>
							<div className='section-tour__header'>
								<h2 className='section-tour__name'>{tour.data.name}</h2>
								<p className='section-tour__price'>${tour.data.price}</p>
							</div>

							<div className='section-tour__img'>
								<img src={`/img/tours/${tour.data.images[0]}`} alt={`${tour.data.name}-1`} />
								<img src={`/img/tours/${tour.data.images[1]}`} alt={`${tour.data.name}-2`} />
								<img src={`/img/tours/${tour.data.images[2]}`} alt={`${tour.data.name}-3`} />
							</div>

							<div className='section-tour__desc'>
								<h3 className='section-tour__desc--heading'>Description</h3>
								<p className='section-tour__desc--content'>{tour.data.description}</p>
							</div>

							<div className='tour-data'>
								<div className='about-tour'>
									<h1 className='about-tour__heading'>About Tour</h1>
									<p className='about-tour__name'>
										<svg className='about-tour__icon'>
											<use xlinkHref='/img/sprite.svg#icon-stopwatch' />
										</svg>
										Duration:
									</p>
									<p>{tour.data.duration} Days</p>

									<p className='about-tour__name'>
										<svg className='about-tour__icon'>
											<use xlinkHref='/img/sprite.svg#icon-location-pin' />
										</svg>
										Location:
									</p>
									<p>{tour.data.startLocation.description}</p>
								</div>

								<div className='quick-facts'>
									<div className='quick-facts__data'>
										<h3 className='quick-facts__heading'>Quick Facts</h3>
										<p className='quick-facts__name'>
											<svg className='quick-facts__icon'>
												<use xlinkHref='/img/sprite.svg#icon-calendar' />
											</svg>
											Next Date
										</p>
										<p>June 2021</p>
										<p className='quick-facts__name'>
											<svg className='quick-facts__icon'>
												<use xlinkHref='/img/sprite.svg#icon-trending_up' />
											</svg>
											Difficulty
										</p>
										<p>{tour.data.difficulty.slice(0, 1).toUpperCase() + tour.data.difficulty.slice(1)}</p>
										<p className='quick-facts__name'>
											<svg className='quick-facts__icon'>
												<use xlinkHref='/img/sprite.svg#icon-user' />
											</svg>
											Participants
										</p>
										<p>{tour.data.maxGroupSize} People</p>
										<p className='quick-facts__name'>
											<svg className='quick-facts__icon'>
												<use xlinkHref='/img/sprite.svg#icon-star-empty' />
											</svg>
											Rating
										</p>
										<p>
											{tour.data.ratingsAverage} / {tour.data.ratingsQuantity}
										</p>
									</div>
								</div>

								<div className='tour-guides'>
									<h3 className='tour-guides__title'>Tour Guides for this tour</h3>

									{tour.data.guides.map((guide) => <Guides guide={guide} key={guide._id} />)}
								</div>
							</div>
						</div>
						<div className='section-tour__sidebar'>
							<div className='sidebar__book'>
								<form action='#' className='sidebar__form'>
									<h3 className='sidebar__title'>Book this tour</h3>
									<div className='sidebar__group'>
										<input
											type='text'
											name='name'
											id='name'
											className='sidebar__group--input'
											placeholder='Name'
											required
										/>
										<label htmlFor='name' className='sidebar__group--label'>
											Name
										</label>
									</div>

									<div className='sidebar__group'>
										<input
											type='email'
											name='email'
											id='email'
											className='sidebar__group--input'
											placeholder='Email'
											required
										/>
										<label htmlFor='email' className='sidebar__group--label'>
											Email
										</label>
									</div>

									<div className='sidebar__group'>
										<input type='text' name='phone' id='phone' className='sidebar__group--input' placeholder='Phone' />
										<label htmlFor='phone' className='sidebar__group--label'>
											Phone
										</label>
									</div>

									<div className='sidebar__group'>
										<input
											type='text'
											name='group'
											id='group'
											className='sidebar__group--input'
											placeholder='Group Size'
										/>
										<label htmlFor='group' className='sidebar__group--label'>
											Group Size
										</label>
									</div>

									<div className='sidebar__group sidebar__button'>
										<button type='submit' className='btn sidebar__group--submit'>
											Book Now
										</button>
									</div>
								</form>
							</div>

							<div className='sidebar-helpline'>
								<div className='sidebar-helpline__content'>
									<h4 className='sidebar-helpline__heading'>Any Questions?</h4>
									<p className='sidebar-helpline__para'>
										Lorem ipsum dolor sit amet, consectet ur adipiscing elit, sedpr do eiusmod tempor incididunt ut.
									</p>
									<div className='sidebar-helpline__contact'>
										<a href='#!' className='sidebar-helpline__contact--phone'>
											<svg className='sidebar-helpline__contact--icon'>
												<use xlinkHref='/img/sprite.svg#icon-phone' />
											</svg>
											+91 1234567890
										</a>
										<a href='#!' className='sidebar-helpline__contact--email'>
											<svg className='sidebar-helpline__contact--icon'>
												<use xlinkHref='/img/sprite.svg#icon-mail' />
											</svg>
											info@website.com
										</a>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section className='tour-reviews mb-3'>
						<h3 className='tour-reviews__title'>Tour Reviews</h3>

						<div className='tour-review'>
							<div className='tour-review__name'>
								<img src='./img/user-3.jpg' alt='Name' className='tour-review__name--img' />
								<h5 className='tour-review__name--title'>Miyah Myles</h5>
							</div>
							<p className='tour-review__review'>
								Cras mollis nisi parturient mi nec aliquet suspendisse sagittis eros condimentum scelerisque taciti
								mattis praesent feugiat eu nascetur a tincidunt
							</p>
						</div>

						<div className='tour-review'>
							<div className='tour-review__name'>
								<img src='./img/user-3.jpg' alt='Name' className='tour-review__name--img' />
								<h5 className='tour-review__name--title'>Miyah Myles</h5>
							</div>
							<p className='tour-review__review'>
								Cras mollis nisi parturient mi nec aliquet suspendisse sagittis eros condimentum scelerisque taciti
								mattis praesent feugiat eu nascetur a tincidunt
							</p>
						</div>

						<div className='tour-review'>
							<div className='tour-review__name'>
								<img src='./img/user-3.jpg' alt='Name' className='tour-review__name--img' />
								<h5 className='tour-review__name--title'>Miyah Myles</h5>
							</div>
							<p className='tour-review__review'>
								Cras mollis nisi parturient mi nec aliquet suspendisse sagittis eros condimentum scelerisque taciti
								mattis praesent feugiat eu nascetur a tincidunt
							</p>
						</div>
					</section>
				</Fragment>
			)}
		</Fragment>
	);
};

export default TourDetailsScren;

import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getTour } from '../../actions/tourActions';

const TourDetails = ({ getTour, tour, match }) => {
	useEffect(() => {
		// getTour(window.location.pathname);
		getTour(match.url);
		//eslint-disable-next-line
	}, []);
	return (
		tour !== null && (
			<Fragment>
				<section className='breadcrumb'>
					<div className='breadcrumb__content'>
						<h1 className='breadcrumb__heading'>{tour.name}</h1>
					</div>
					<nav className='breadcrumb__nav'>
						<ul className='breadcrumb__links'>
							<li>
								<a href='index.html' className='breadcrumb__link'>
									Home
								</a>
							</li>
							<li>
								<a href='tours.html' className='breadcrumb__link'>
									Tours
								</a>
							</li>
							<li>
								<a href='tour-details.html' className='breadcrumb__link active'>
									{tour.name}
								</a>
							</li>
						</ul>
					</nav>
				</section>

				<section className='section-tour mb-3'>
					<div className='section-tour__details'>
						<div className='section-tour__header'>
							<h2 className='section-tour__name'>{tour.name}</h2>
							<p className='section-tour__price'>${tour.price}</p>
						</div>

						<div className='section-tour__img'>
							<img src={`/img/tours/${tour.images[0]}`} alt={`${tour.name} 1`} />
							<img src={`/img/tours/${tour.images[1]}`} alt={`${tour.name} 2`} />
							<img src={`/img/tours/${tour.images[2]}`} alt={`${tour.name} 3`} />
						</div>

						<div className='section-tour__desc'>
							<h3 className='section-tour__desc--heading'>Description</h3>
							<p className='section-tour__desc--content'>{tour.description}</p>
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
								<p>{tour.duration} Days</p>

								<p className='about-tour__name'>
									<svg className='about-tour__icon'>
										<use xlinkHref='/img/sprite.svg#icon-location-pin' />
									</svg>
									Location:
								</p>
								<p>{tour.startLocation.description}</p>
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
									{/* <p>{(tour.startDates[0] * 1).toLocaleString('en-us', { month: 'long', year: 'numeric' })}</p> */}
									<p className='quick-facts__name'>
										<svg className='quick-facts__icon'>
											<use xlinkHref='/img/sprite.svg#icon-trending_up' />
										</svg>
										Difficulty
									</p>
									<p>{tour.difficulty.charAt(0).toUpperCase() + tour.difficulty.slice(1)}</p>
									<p className='quick-facts__name'>
										<svg className='quick-facts__icon'>
											<use xlinkHref='/img/sprite.svg#icon-user' />
										</svg>
										Participants
									</p>
									<p>{tour.maxGroupSize} People</p>
									<p className='quick-facts__name'>
										<svg className='quick-facts__icon'>
											<use xlinkHref='/img/sprite.svg#icon-star-empty' />
										</svg>
										Rating
									</p>
									<p>{tour.ratingsAverage} / 5</p>
								</div>
							</div>

							<div className='tour-guides'>
								<h3 className='tour-guides__title'>Tour Guides for this tour</h3>
								{tour.guides.map((guide) => (
									<div className='tour-guide' key={guide._id}>
										<img src={`/img/users/${guide.photo}`} alt={guide.name} className='tour-guide__img' />
										<div className='tour-guide__details'>
											<h4 className='tour-guide__name'>{guide.name}</h4>
											<p className='tour-guide__desig'>
												{guide.role.split('-').join(' ').charAt(0).toUpperCase() +
													guide.role.split('-').join(' ').slice(1)}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className='section-tour__sidebar'>
						<div className='sidebar__book'>
							<form className='sidebar__form'>
								<h3 className='sidebar__title'>Book this tour</h3>
								<div className='sidebar__group'>
									<input type='text' name='name' className='sidebar__group--input' placeholder='Name' required />
									<label htmlFor='name' className='sidebar__group--label'>
										Name
									</label>
								</div>

								<div className='sidebar__group'>
									<input type='email' name='email' className='sidebar__group--input' placeholder='Email' required />
									<label htmlFor='email' className='sidebar__group--label'>
										Email
									</label>
								</div>

								<div className='sidebar__group'>
									<input type='text' name='phone' className='sidebar__group--input' placeholder='Phone' />
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

					{tour.reviews.map((review) => (
						<div className='tour-review' key={review._id}>
							<div className='tour-review__name'>
								<img src={`/img/users/${review.user.photo}`} alt='Name' className='tour-review__name--img' />
								<h5 className='tour-review__name--title'>{review.user.name}</h5>
							</div>
							<p className='tour-review__review'>{review.review}</p>
						</div>
					))}
				</section>
			</Fragment>
		)
	);
};

const mapStateToProps = (state) => ({
	tour: state.tours.tour
});

export default connect(mapStateToProps, { getTour })(TourDetails);

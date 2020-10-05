import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTopTours, getTopReviews } from './../../actions/tourActions';

import Slider from '../layout/homepage/Slider';
import SearchBox from '../layout/homepage/SearchBox';
import Highlights from '../layout/homepage/Highlights';
import About from '../layout/homepage/About';
import Tour from '../layout/homepage/Tour';
import Review from './../layout/Review';

const Home = ({ getTopTours, getTopReviews, topTours, reviews }) => {
	useEffect(
		() => {
			getTopTours();
			getTopReviews();
		},
		//eslint-disable-next-line
		[]
	);

	return (
		<Fragment>
			<Slider />
			<SearchBox />
			<Highlights />
			<About />

			<section className='tours'>
				<h2 className='heading-2 tours__heading'>Most Popular Tours</h2>

				{topTours !== null && topTours.map((tour) => <Tour key={tour._id} tour={tour} />)}

				<Link to='/tours' className='btn tours__btn mt-2' title='Tour Details'>
					View All Tours &rarr;
				</Link>
			</section>

			<Review reviews={reviews} />
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	topTours: state.tours.topTours,
	reviews: state.tours.reviews
});

export default connect(mapStateToProps, { getTopTours, getTopReviews })(Home);

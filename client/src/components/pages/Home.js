import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getTopTours } from './../../actions/tourActions';

import Slider from './../layout/Slider';
import SearchBox from './../layout/SearchBox';
import Highlights from './../layout/Highlights';
import About from './../layout/About';
import Tour from './../layout/Tour';
import { Link } from 'react-router-dom';

const Home = ({ getTopTours, topTours }) => {
	useEffect(
		() => {
			getTopTours();
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
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	topTours: state.tours.topTours
});

export default connect(mapStateToProps, { getTopTours })(Home);

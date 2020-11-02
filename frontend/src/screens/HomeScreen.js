import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Slider from '../components/Slider';
import SearchBox from './../components/SearchBox';
import Highlights from './../components/Highlights';
import About from './../components/About';
import Tour from './../components/Tour';

import { listTopTours } from './../actions/tourActions';

const HomeScreen = () => {
	const dispatch = useDispatch();

	const topTours = useSelector((state) => state.topTours);
	const { loading, error, tours } = topTours;

	useEffect(
		() => {
			dispatch(listTopTours());
		},
		[ dispatch ]
	);

	return (
		<Fragment>
			<Slider />
			<SearchBox />
			<Highlights />
			<About />

			<section className='tours'>
				<h2 className='heading-2 tours__heading'>Most Popular Tours</h2>

				{loading ? (
					<h2>Loading</h2>
				) : error ? (
					<h3>{error}</h3>
				) : (
					topTours.tours && topTours.tours.data && tours.data.map((tour) => <Tour key={tour._id} tour={tour} />)
				)}

				<Link to='/tours' className='btn tours__btn mt-2' title='Tour Details'>
					View All Tours &rarr;
				</Link>
			</section>

			{/* <Review reviews={reviews} /> */}
		</Fragment>
	);
};

export default HomeScreen;

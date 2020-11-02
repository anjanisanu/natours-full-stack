import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Slider from '../components/Slider';
import SearchBox from './../components/SearchBox';
import Highlights from './../components/Highlights';
import About from './../components/About';
import Tours from './../components/Tours';

import { listTopTours } from './../actions/tourActions';

const HomeScreen = () => {
	const dispatch = useDispatch();

	const topTours = useSelector((state) => state.topTours);

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

			<Tours title='Most Popular Tours' allTours={topTours} button={true} />

			{/* <Review reviews={reviews} /> */}
		</Fragment>
	);
};

export default HomeScreen;

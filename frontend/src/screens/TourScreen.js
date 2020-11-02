import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tours from './../components/Tours';
import { getAllTours } from './../actions/tourActions';

const TourScreen = () => {
	const dispatch = useDispatch();

	const tourList = useSelector((state) => state.tourList);

	useEffect(
		() => {
			dispatch(getAllTours());
		},
		[ dispatch ]
	);

	return (
		<Fragment>
			<Tours title='Most Popular Tours' allTours={tourList} />
		</Fragment>
	);
};

export default TourScreen;

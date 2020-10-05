import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTours } from './../../actions/tourActions';
import Tour from '../layout/homepage/Tour';

const Tours = ({ getTours, tours }) => {
	useEffect(
		() => {
			getTours();
		},
		//eslint-disable-next-line
		[]
	);
	return (
		<section className='tours'>
			<h2 className='heading-2 tours__heading'>All Tours</h2>

			{tours !== null && tours.map((tour) => <Tour key={tour._id} tour={tour} />)}
		</section>
	);
};

const mapStateToProps = (state) => ({
	tours: state.tours.tours
});

export default connect(mapStateToProps, { getTours })(Tours);

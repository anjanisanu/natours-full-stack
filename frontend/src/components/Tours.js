import React from 'react';
import { Link } from 'react-router-dom';
import Tour from './../components/Tour';
import Spinner from './../components/layout/Spinner';

const Tours = ({ title, allTours, button }) => {
	const { loading, error, tours } = allTours;
	return (
		<section className='tours'>
			<h2 className='heading-2 tours__heading'>{title}</h2>

			{loading ? (
				<Spinner />
			) : error ? (
				<h3>{error}</h3>
			) : (
				allTours.tours && allTours.tours.data && tours.data.map((tour) => <Tour key={tour._id} tour={tour} />)
			)}

			{button && (
				<Link to='/tours' className='btn tours__btn mt-2' title='Tour Details'>
					View All Tours &rarr;
				</Link>
			)}
		</section>
	);
};

export default Tours;

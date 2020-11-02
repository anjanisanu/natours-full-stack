import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Slider from '../components/Slider';
import SearchBox from './../components/SearchBox';
import Highlights from './../components/Highlights';
import About from './../components/About';
import Tour from './../components/Tour';

const HomeScreen = () => {
	return (
		<Fragment>
			<Slider />
			<SearchBox />
			<Highlights />
			<About />

			<section className='tours'>
				<h2 className='heading-2 tours__heading'>Most Popular Tours</h2>

				{/* {topTours !== null && topTours.map((tour) => <Tour key={tour._id} tour={tour} />)} */}
				<Tour />
				<Tour />
				<Tour />

				<Link to='/tours' className='btn tours__btn mt-2' title='Tour Details'>
					View All Tours &rarr;
				</Link>
			</section>

			{/* <Review reviews={reviews} /> */}
		</Fragment>
	);
};

export default HomeScreen;

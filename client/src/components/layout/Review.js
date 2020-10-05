import React from 'react';

const Review = ({ tour, reviews }) => {
	return (
		<section className='tour-reviews mb-3'>
			<h3 className='tour-reviews__title'>Tour Reviews</h3>

			{tour &&
				tour.reviews.map((review) => (
					<div className='tour-review' key={review._id}>
						<div className='tour-review__name'>
							<img src={`/img/users/${review.user.photo}`} alt='Name' className='tour-review__name--img' />
							<h5 className='tour-review__name--title'>{review.user.name}</h5>
						</div>
						<p className='tour-review__review'>{review.review}</p>
					</div>
				))}

			{reviews &&
				reviews.map((review) => (
					<div className='tour-review' key={review._id}>
						<div className='tour-review__name'>
							<img src={`/img/users/${review.user.photo}`} alt='Name' className='tour-review__name--img' />
							<h5 className='tour-review__name--title'>{review.user.name}</h5>
						</div>
						<p className='tour-review__review'>{review.review}</p>
					</div>
				))}
		</section>
	);
};

export default Review;

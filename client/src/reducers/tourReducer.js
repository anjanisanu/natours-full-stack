import { GET_TOURS, GET_TOP_TOURS, GET_TOP_REVIEWS, GET_TOUR, TOUR_ERROR } from './../actions/types';

const intialState = {
	topTours: null,
	tours: null,
	tour: null,
	reviews: null,
	current: null,
	error: null
};

export default (state = intialState, action) => {
	switch (action.type) {
		case GET_TOURS:
			return {
				...state,
				tours: action.payload
			};

		case GET_TOP_TOURS:
			return {
				...state,
				topTours: action.payload
			};

		case GET_TOP_REVIEWS:
			return {
				...state,
				reviews: action.payload
			};

		case GET_TOUR:
			return {
				...state,
				tour: action.payload
			};

		case TOUR_ERROR:
			return {
				...state,
				error: action.payload
			};

		default:
			return state;
	}
};

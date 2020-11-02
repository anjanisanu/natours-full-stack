import {
	TOP_TOUR_REQUEST,
	TOP_TOUR_SUCCESS,
	TOP_TOUR_FAIL,
	TOUR_DETAILS_REQUEST,
	TOUR_DETAILS_SUCCESS,
	TOUR_DETAILS_FAIL
} from './../constants/tourConstants';

export const topToursReducer = (state = { tours: [] }, action) => {
	switch (action.type) {
		case TOP_TOUR_REQUEST:
			return { loading: true };

		case TOP_TOUR_SUCCESS:
			return { loading: false, tours: action.payload };

		case TOP_TOUR_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

export const tourDetailsReducer = (state = {}, action) => {
	switch (action.type) {
		case TOUR_DETAILS_REQUEST:
			return { loading: true };

		case TOUR_DETAILS_SUCCESS:
			return { loading: false, tour: action.payload };

		case TOUR_DETAILS_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

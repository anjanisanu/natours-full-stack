import {
	TOP_TOUR_REQUEST,
	TOP_TOUR_SUCCESS,
	TOP_TOUR_FAIL,
	TOUR_DETAILS_REQUEST,
	TOUR_DETAILS_SUCCESS,
	TOUR_DETAILS_FAIL,
	GET_ALL_TOURS_REQUEST,
	GET_ALL_TOURS_SUCCESS,
	GET_ALL_TOURS_FAIL
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

export const tourListReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_ALL_TOURS_REQUEST:
			return { loading: true };

		case GET_ALL_TOURS_SUCCESS:
			return { loading: false, tours: action.payload };

		case GET_ALL_TOURS_FAIL:
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

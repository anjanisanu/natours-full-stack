import { TOP_TOUR_REQUEST, TOP_TOUR_SUCCESS, TOP_TOUR_FAIL } from './../constants/tourConstants';

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

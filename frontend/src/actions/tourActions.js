import axios from 'axios';

import { TOP_TOUR_REQUEST, TOP_TOUR_SUCCESS, TOP_TOUR_FAIL } from './../constants/tourConstants';

export const listTopTours = () => async (dispatch) => {
	try {
		dispatch({ type: TOP_TOUR_REQUEST });

		const config = {
			'Content-Type': 'application/json'
		};

		const { data } = await axios.get('/tours/top-3-tours', config);

		dispatch({
			type: TOP_TOUR_SUCCESS,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: TOP_TOUR_FAIL,
			payload: err.response && err.response.data.message ? err.response.data.message : err.message
		});
	}
};

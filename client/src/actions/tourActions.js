import axios from 'axios';
import { GET_TOURS, GET_TOP_TOURS, GET_TOP_REVIEWS, GET_TOUR, TOUR_ERROR } from './types';

export const getTours = () => async (dispatch) => {
	try {
		const res = await axios.get('/api/v1/tours');
		const data = res.data.data;

		dispatch({
			type: GET_TOURS,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: TOUR_ERROR,
			payload: err.response.data
		});
	}
};

export const getTopTours = () => async (dispatch) => {
	try {
		const res = await axios.get('/api/v1/tours/top-3-tours');
		const data = res.data.data;

		dispatch({
			type: GET_TOP_TOURS,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: TOUR_ERROR,
			payload: err.response.data
		});
	}
};

export const getTour = (tour) => async (dispatch) => {
	try {
		const res = await axios.get(`/api/v1/${tour}`);
		const data = res.data.data;

		dispatch({
			type: GET_TOUR,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: TOUR_ERROR,
			payload: err.response.data
		});
	}
};

export const getTopReviews = () => async (dispatch) => {
	try {
		const res = await axios.get('/api/v1/reviews?rating=5&limit=3');
		const data = res.data.data;

		dispatch({
			type: GET_TOP_REVIEWS,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: TOUR_ERROR,
			payload: err.response.data
		});
	}
};

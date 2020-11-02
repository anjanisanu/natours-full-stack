import axios from 'axios';

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

export const getAllTours = () => async (dispatch) => {
	try {
		dispatch({ type: GET_ALL_TOURS_REQUEST });

		const config = {
			'Content-Type': 'application/json'
		};

		const { data } = await axios.get(`/tours/`, config);

		dispatch({
			type: GET_ALL_TOURS_SUCCESS,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: GET_ALL_TOURS_FAIL,
			payload: err.response && err.response.data.message ? err.response.data.message : err.message
		});
	}
};

export const tourDetails = (id) => async (dispatch) => {
	try {
		dispatch({ type: TOUR_DETAILS_REQUEST });

		const config = {
			'Content-Type': 'application/json'
		};

		const { data } = await axios.get(`/tours/${id}`, config);

		dispatch({
			type: TOUR_DETAILS_SUCCESS,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: TOUR_DETAILS_FAIL,
			payload: err.response && err.response.data.message ? err.response.data.message : err.message
		});
	}
};

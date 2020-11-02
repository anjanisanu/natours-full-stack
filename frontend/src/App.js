import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomeScreen from './screens/HomeScreen';
import TourScreen from './screens/TourScreen';
import TourDetailsScreen from './screens/TourDetailsScren';

const App = () => {
	return (
		<Router>
			<div className='container'>
				<Header />
				<Navbar />
				<main className='main'>
					<Route exact path='/' component={HomeScreen} />
					<Route exact path='/tours' component={TourScreen} />
					<Route exact path='/tours/:id' component={TourDetailsScreen} />
				</main>
				<Footer />
			</div>
		</Router>
	);
};

export default App;

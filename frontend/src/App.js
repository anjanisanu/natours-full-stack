import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';

const App = () => {
	return (
		<div className='container'>
			<Header />
			<Navbar />
			<main className='main'>
				<Router>
					<Route exact path='/' component={HomeScreen} />
				</Router>
			</main>
			<Footer />
		</div>
	);
};

export default App;

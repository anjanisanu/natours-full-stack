import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Header from './components/layout/Header';
import Navabar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import Tours from './components/pages/Tours';
import TourDetails from './components/pages/TourDetails';
import './App.css';

function App() {
	return (
		<Router>
			<Provider store={store}>
				<div className='container'>
					<Header />
					<Navabar />
					<main className='main'>
						<Switch>
							<Route exact path='/' component={Home} />
							<Route exact path='/tours' component={Tours} />
							<Route exact path='/tours/:id' component={TourDetails} />
						</Switch>
					</main>
					<Footer />
				</div>
			</Provider>
		</Router>
	);
}

export default App;

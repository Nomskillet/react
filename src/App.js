
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavorites from './components/AddFavorites';
import RemoveFavorites from './components/RemoveFavorites';
import NavigationBar from './navigation/NavigationBar'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {dispatch, useDispatch} from 'react-redux'
import {movieList} from './actions/movieActions'
import FavoriteMovies from './components/FavoriteMovies';
// import Video from './video/Test.mp4'
import { Player } from 'video-react';




const App = () => {
	const [movies, setMovies] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [searchResults, setSearchResults] = useState([]);
	const dispatch = useDispatch()




	return (

		<>
	
		<NavigationBar />
		<div className='backround'>
		<img src='https://media.wired.com/photos/5e97905fa8fb770008c8478d/16:9/w_2400,h_1350,c_limit/Cul-movietheater-1191021389.jpg' 
		height="75%" width="100%"></img>
		</div>

		<div className='video-background'>
	

		</div>
		
		

		<Player 
			
			className="react-player player-wrapper"
			// src={Video}
      playing
      width="100%"
      height="100%"
	autoPlay={true}
	controls={false}
      >

			</Player>


		
		</>
	);
};

export default App;
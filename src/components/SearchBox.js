
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import MovieList from '../components/MovieList';
import MovieListHeading from '../components/MovieListHeading';
// import SearchBox from './components/SearchBox';
import AddFavorites from '../components/AddFavorites';
import RemoveFavorites from '../components/RemoveFavorites';
import NavigationBar from '../navigation/NavigationBar'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {dispatch, useDispatch} from 'react-redux'
import {movieList} from '../actions/movieActions'
import FavoriteMovies from '../components/FavoriteMovies';

const SearchBox = () => {
	const [movies, setMovies] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [searchResults, setSearchResults] = useState([]);
	const dispatch = useDispatch()
	const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
			console.log(responseJson.Search)
			console.log(movies)
			dispatch(movieList(responseJson.Search))

		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	useEffect(() => {
		const movieFavorites = JSON.parse(
			localStorage.getItem('react-my-app-favorites')
		);

		if (movieFavorites) {
			setFavorites(movieFavorites);
		}
	}, []);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-my-app-favorites', JSON.stringify(items));
	};

	const addFavoriteMovie = (movie) => {
		const newFavoriteList = [...favorites, movie];
		setFavorites(newFavoriteList);
		saveToLocalStorage(newFavoriteList);
	};

	const removeFavoriteMovie = (movie) => {
		const newFavoriteList = favorites.filter(
			(favorite) => favorite.imdbID !== movie.imdbID
		);

		setFavorites(newFavoriteList);
		saveToLocalStorage(newFavoriteList);
	};
	return ( 
	<div className='backroundImageSearch '>
	
	 <NavigationBar />
	
		
			<div className='container-fluid movie-app'>
				<div className='row d-flex align-items-center mt-4 mb-4 textColor'>
					<MovieListHeading heading='Search for Movies' />	
					 <div className='col col-sm-4'>
			
					<input
						className='form-control'
						// value={value}
						onChange={(event) => setSearchValue(event.target.value)}
						placeholder='Type to search...'
					></input>
		</div> 
					{/* <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} /> */}
				</div>
				<div className='row'>
					<MovieList
						// movies={movies}
						// handleFavoritesClick={addFavoriteMovie}
						// favoriteComponent={AddFavorites}
					/>
				</div>
				{/* <div className='row d-flex align-items-center mt-4 mb-4'>
					<MovieListHeading heading='Favorites' />
				</div>  */}
				</div> 
				</div>
	)
};

export default SearchBox;
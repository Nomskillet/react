
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addToFavorite} from '../actions/movieActions'

const MovieList = () => {
	// const FavoriteComponent = props.favoriteComponent;
	let dispatch = useDispatch()
	const [favoriteMovie, setFavoriteMovie] = useState([])
 const movies = useSelector(state=> state.movies)
//  console.log(movies)
	const handleFavoritesClicks = (obj) => {
		dispatch(addToFavorite(obj))
	}

	return (
		<>
			{movies.map((movie, index) => (
				 
				 
				 <div className='image-container d-flex justify-content-start m-3'>
					<img src={movie.Poster} alt='movie'></img>
					
					
					<div onClick={()=> handleFavoritesClicks(movie)} 
						 className='overlay d-flex align-items-center justify-content-center'> 
						<spam className='mr-2'>Add to Favorites</spam>
						<svg 
						xmlns="http://www.w3.org/2000/svg" 
						width="16" 
						height="16" 
						fill="red" 
						class="bi bi-heart-fill" 
						viewBox="0 0 16 16">
						<path 
						fill-rule="evenodd" 
						d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
						</svg>
					</div>
				
				<h1>hello</h1>
				
				<div>

					
						<div class="flip-card">
							<div class="flip-card-inner">
								<div class="flip-card-front">
								<img src={movie.Poster} alt='movie'></img>
								</div>
								<div class="flip-card-back">
								<p>{movie.Title}</p>
								<p></p>
								<p></p>
								</div>
							</div>
							</div>
						</div>
				
				
				</div>


			
			))}
		</>
	);
};

export default MovieList;


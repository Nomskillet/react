
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addToFavorite} from '../actions/movieActions'

const MovieList = () => {
	// const FavoriteComponent = props.favoriteComponent;
	let dispatch = useDispatch()
	const [details, setDetails] = useState()
	const [favoriteMovie, setFavoriteMovie] = useState([])
 const movies = useSelector(state=> state.movies)
//  console.log(movies)
	const handleFavoritesClicks = (obj) => {
		dispatch(addToFavorite(obj))
	}

	const displayDetails = async (id) => {
		console.log(id)
		let results = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=129ba69a`)
		let data = await results.json()
		console.log(data)
		setDetails(data)
	 }

	return (
		<>
			{movies.map((movie, index) => (
				 
				 
				 <div className='image-container d-flex justify-content-start m-5'>
					{/* <img src={movie.Poster} alt='movie'></img> */}
					
					
				
				
			
				
				<div>

					
						<div class="flip-card image-container d-flex justify-content-start m-3'" onMouseOver={()=> displayDetails(movie.imdbID)}>
							<div class="flip-card-inner">
								<div class="flip-card-front">
								<img src={movie.Poster} alt='movie'></img>
								</div>
								<div class="flip-card-back">
								<p>{movie.Title}</p>
								{(details) ? <p>{details.Plot}</p>:''}
								{(details) ? <p>{details.Actors}</p>:''}
								{(details) ? <p>metascore{details.Metascore}</p>:''}
								{/* <p>{details.Plot}</p> */}
								<p></p>
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



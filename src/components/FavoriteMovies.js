import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import NavigationBar from '../navigation/NavigationBar'
import MovieListHeading from './MovieListHeading'
import {removeFromFavorite} from '../actions/movieActions'


const FavoriteMovies = (props) => {
  let dispatch = useDispatch()
  let favoriteMovies = useSelector(state=>state.favoriteMovies)
  console.log(favoriteMovies)

  const deleteMovie = (id) => {console.log(id)
     dispatch(removeFromFavorite(id)) }

  return (
    <div className=''>
    
        <NavigationBar/>
        <MovieListHeading heading="Favorite Movies" className="d-flex justify-text-center">
        </MovieListHeading>
         
   {favoriteMovies.map((movie, index) => 
   
//    <div className='image-container d-flex  container-fluid'>
//     <div className='row'>
//     <img src={movie.Poster} alt="moviePoster"></img>
//     {/* <p>{movie.Title}</p> */}
//     <span onClick={()=> deleteMovie(movie.imdbID)} className='mr-2'>Remove from favorites</span>
// 			<svg
// 				width='1em'
// 				height='1em'
// 				viewBox='0 0 16 16'
// 				class='bi bi-x-square'
// 				fill='currentColor'
// 				xmlns='http://www.w3.org/2000/svg'
// 			>
// 				<path
// 					fill-rule='evenodd'
// 					d='M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z'
// 				/>
// 				<path
// 					fill-rule='evenodd'
// 					d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z'
// 				/>
// 			</svg>
// </div>
//    </div>


<div className='image-container d-flex justify-content-start m-3'>
<img src={movie.Poster} alt='movie'></img>
<div
  onClick={()=> deleteMovie(movie.imdbID)}
  className='overlay d-flex align-items-center justify-content-center'
> 
<span onClick={()=> deleteMovie(movie.imdbID)} className='mr-2'>Remove from favorites</span>
			<svg
				width='1em'
				height='1em'
				viewBox='0 0 16 16'
				class='bi bi-x-square'
				fill='currentColor'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					fill-rule='evenodd'
					d='M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z'
				/>
				<path
					fill-rule='evenodd'
					d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z'
				/>
			</svg>
</div>
</div>

   )}

   
        
        
        </div>
  )
}

export default FavoriteMovies


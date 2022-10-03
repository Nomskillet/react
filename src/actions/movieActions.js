import {ADD_TO_MOVIE_LIST, REMOVE_FROM_FAVORITE} from './types'
import {ADD_TO_FAVORITE_MOVIE} from './types'
export const movieList = (obj)=>{
    // console.log(obj)
    return {
        type: ADD_TO_MOVIE_LIST,
        data: obj
    }
}

export const addToFavorite = (movieObj)=>{
    // console.log(movieObj)
    return {
        type: ADD_TO_FAVORITE_MOVIE,
        data: movieObj
    }
}
export const removeFromFavorite = (removeMovieObj)=>{
    // console.log(movieObj)
    return {
        type: REMOVE_FROM_FAVORITE,
        data: removeMovieObj
    }
}
import { ADD_TO_MOVIE_LIST } from "../actions/types"
import { ADD_TO_FAVORITE_MOVIE } from "../actions/types"
import {REMOVE_FROM_FAVORITE} from '../actions/types'

const movieReducer = (state, action) => {

    if(state === undefined){
        state = {
            movies: [],
            favoriteMovies:[]}
    }
    switch(action.type){
        case ADD_TO_MOVIE_LIST:
            return{
                ...state,
                movies:action.data
            }
        case ADD_TO_FAVORITE_MOVIE:
            console.log(action.data)
            return{
                ...state,
                favoriteMovies: state.favoriteMovies.concat(action.data)
            }

        case REMOVE_FROM_FAVORITE:
            return{
                ...state,
                favoriteMovies: state.favoriteMovies.filter(movie=>
              {  return movie.imdbID !== action.data})
            }
            default:
                return state
    }
 }

 export default movieReducer
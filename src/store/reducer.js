import moviesData from "../movies";
import {DELETE_MOVIE,ADD_MOVIE,UP_DATE} from "./actions"

const initialState={movies:moviesData,}


const reducer=(state=initialState,action)=>{

    switch(action.type){

        case DELETE_MOVIE:
            const moviesToKeep=state.movies.filter((movie)=> movie.id !== action.payload.movieId)
            return{
                ...state,
                movies:moviesToKeep,

            }

        case ADD_MOVIE:
            action.payload.newMovie.id=state.movies.length+1   
            action.payload.newMovie.statue="false" 

            return{
                ...state,
                movies:[...state.movies,action.payload.newMovie],
            }


        case UP_DATE:
            let moviestoUpdate=action.payload.toUpdate
            if(moviestoUpdate.statue ==="true")
            moviestoUpdate.statue ="false"
            else moviestoUpdate.statue ="true"
            let newMovies = state.movies.map((movie)=> movie.id === moviestoUpdate.id?moviestoUpdate:movie)
            return{
                ...state,
                movies:newMovies


            }

            default:
                return state




    
    }


}
export default reducer
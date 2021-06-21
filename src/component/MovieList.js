import MovieItem from "./MovieItem"
import { useState } from "react"
import SearchBar from "./SearchBar"
import { useSelector } from "react-redux"
const MovieList =()=>{
const[search,setSearch]=useState("")
const movies=useSelector((state)=>state.movies)


    const moviesArr= movies.filter((movie)=> movie.movieName.toUpperCase().includes(search.toUpperCase()))
    .filter((movie)=> movie.statue === "false").map((movie) => <MovieItem movie={movie} key={movie.id} text="watched"/>)
 let c =moviesArr.length

    return(
        <div>
    <SearchBar setSearch={setSearch}/>
    <p>Wish List {c}</p>
{moviesArr}
        </div>
    )
}


export default MovieList
import MovieItem from "./MovieItem"
import SearchBar from "./SearchBar"
import { useState } from "react"
import { useSelector } from "react-redux"

const WatchedMovies =()=>{
    const[search,setSearch]=useState("")
    const movies=useSelector((state)=>state.movies)

    const moviesArr=movies.filter((movie)=> movie.movieName.toUpperCase().includes(search.toUpperCase()))
    .filter((movie)=> movie.statue === "true")
    .map((movie) => <MovieItem movie={movie} key={movie.id} text="unwatched"/>)

    let c =moviesArr.length

    return(
<div>
    <SearchBar setSearch={setSearch}/>
    <p>Watched {c}</p>
    {moviesArr}
    
 </div>

    )
}

export default WatchedMovies
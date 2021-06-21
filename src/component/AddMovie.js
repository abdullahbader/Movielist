import { useState } from "react"
import { useDispatch } from "react-redux"
import { addMovie } from "../store/actions"

const AddMovie=()=>{
const[movie,setMovie] = useState({

    movieName:"",

})
const dispatch=useDispatch()

    const handleChange=(event)=>{
        setMovie({...movie,[event.target.name]: event.target.value})


    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        dispatch(addMovie(movie))

    }


    return(

        <form onSubmit={handleSubmit}>
            
            <input type="text" name="movieName" onChange={handleChange} value={movie.movieName} />
            <button type="submit">ADD</button>
        </form>
        
    )
}


export default AddMovie
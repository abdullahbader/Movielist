import {deleteMovie} from "../store/actions"
import { useDispatch } from "react-redux"
const DeleteButton = (props)=>{
const dispatch = useDispatch()


    return(
<button onClick={()=>dispatch(deleteMovie(props.movieId))}> Delete</button>


    )
}


export default DeleteButton
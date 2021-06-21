import DeleteButton from "./DeleteButton"
import Watched from "./Watched"
import { Div } from "../styles"
const MovieItem =(props)=>{
   const movie =props.movie


    return(

    
<table class="table-auto">
 
  <tbody>
    <tr>
      <td>{movie.movieName}</td>
      <Div>
      <DeleteButton movieId={movie.id}/>
      <Watched toUpdate={movie} text={props.text} />
      </Div>
        </tr>
  </tbody>
</table>


    )
}


export default MovieItem
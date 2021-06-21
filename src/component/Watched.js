import { useDispatch } from "react-redux"
import {updateState} from "../store/actions"
const Watched =(props)=>{
const dispatch=useDispatch()


// const handleSubmit=(event)=>{
//     event.preventDefault()
//     dispatch(updateState(movie))
//}
    return(
<div>

    <button type="submit" onClick={()=> dispatch(updateState(props.toUpdate))}> {props.text}</button>

</div>

    )
}

export default Watched
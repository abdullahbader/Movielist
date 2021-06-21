export const DELETE_MOVIE="DELETE_MOVIE"
export const ADD_MOVIE="ADD_MOVIE"
export const UP_DATE="UP_DATE"



export const deleteMovie=(movieId)=>{
    return{
        type:DELETE_MOVIE,
        payload:{
            movieId:movieId
        }
    }

}

export const addMovie=(newMovie)=>{

    return{
        type:ADD_MOVIE,
        payload:{
            newMovie:newMovie
        }
    }
}


export const updateState=(toUpdate)=>{

    return{

        type:UP_DATE,
        payload:{
            toUpdate:toUpdate
        }

    }
}
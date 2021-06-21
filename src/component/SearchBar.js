const SearchBar=(props)=>{







    return(

<input onChange={(event)=>props.setSearch(event.target.value)}/>

    )
}


export default SearchBar
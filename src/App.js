import './App.css';
import MovieList from "./component/MovieList"
import "tailwindcss/tailwind.css"
import WatchedMovies from './component/WatchedMovies';
import AddMovie from './component/AddMovie';

function App() {




  return (

   <div>
     <AddMovie/>
<h1> MovieList </h1>
<MovieList/>
<h1> Watched Movies </h1>
<WatchedMovies/>
   </div>
  );
}

export default App;

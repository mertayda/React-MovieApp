import Search from './search.svg';
import { useState, useEffect } from 'react';
import './App.css';
import MovieCard from './MovieCard';


const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=fefc187c"
function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [movies, setMovies] = useState([])
  useEffect(() => {
    searchMovies("Spiderman")

  }, [])

  const searchMovies = async (title) => {

    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search)
  }

  return (

    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search for movies"></input>
        <img src={Search} alt="search" onClick={() => searchMovies(searchTerm)}></img>
      </div>




      {
        movies?.length > 0 ? (
          <div className='container'>
            {movies.map((movie) => (
              <MovieCard movie={movie}></MovieCard>
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )

      }




    </div>
  );
}

export default App;

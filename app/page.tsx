
'use client';

import { useEffect } from 'react';
import { useState } from 'react';
import './globals.css';
import MovieCard from './movieCard/movieCard'
import Image from 'next/image'



//Here is The movies Api key: af49ef9a
const API_URL= 'http://www.omdbapi.com?apikey=af49ef9a';







 function Home() {


  // fetch The API to search for The movie title and setting the parameter (title) to string
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("007");
  }, []);

  const searchMovies = async (title:string) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };


  return (
   <div className='app'>
    <h1>Cinema Corn</h1>

    <div className='search'>
      <input 
       
      placeholder='search for a movie' 
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      <Image
          src="/search.svg"
          alt="search"
          width={180}
          height={37}
          onClick={() => searchMovies(searchTerm)}
          priority
        />
         

     </div>


    {/* cheack if there is a movie or not and runder it if there is*/} 
    
    {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    

   </div>
    
  );
}

//
// export defult Home component
//
export default Home;


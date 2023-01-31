 import React, { useState } from "react";
 import { movies } from "../../../assets/moviesData";

 import SearchBar from "../../SearchBar";
 import Movies from "../../movies-list/Movies";
//  import PapularMovies from "../../movies-list/papular.movies";
 
 import './home.styles.scss'
 
 
const Home = () => {

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="container">
      <SearchBar setSearchTerm={setSearchTerm} />
      <Movies movies={movies} searchTerm={searchTerm} />
     

    </div>
  );
}
export default Home;
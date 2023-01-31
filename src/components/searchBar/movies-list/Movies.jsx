import React from "react";
import './movies.styles.scss'

const Movies = ({ movies, searchTerm }) => {
  //if there is something in search field it will filter the movies and disply
  //if search field is empty it displays the orginal movies list
 
  const filteredMovies = searchTerm
    ? movies.filter((movie) => movie.title.toLowerCase().replace(/ /g, ' '.repeat(110)).includes(searchTerm.toLowerCase().replace(/ /g, ' '.repeat(110))))
    : movies;
 
  return (
    <div className="movies-list" style={{display: 'flex', flexWrap: 'wrap'}}>
   {/* first it checks that is anything matches to the user search if yes than it map over searched movies 
  if no than it symply display no movie found for search field text  */}
    {filteredMovies.length > 0 ? (
                filteredMovies.map(movie => (
               <div key={movie.id} className='movies-images' style={{
                backgroundImage: `url(${movie.imageUrl})`,
             
                
            }}>
                <h3 className='movies-title'>{movie.title}</h3>
            </div>
        ))) : (
        <h3 style={{color: 'red'}}>No movies found for: {searchTerm}</h3>
    )}
</div>
  );
}

export default Movies;





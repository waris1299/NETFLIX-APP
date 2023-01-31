import { movies } from "../../assets/moviesData";


function PapularMovies() {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
}

export default PapularMovies;

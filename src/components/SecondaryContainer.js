import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import MovieCard from "./MovieCard";

const SecondaryContainer = () => {
  const movies = useSelector((strore) => strore.movies);
  console.log("movies", movies);
  return (
    movies?.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-53 pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"UpComing Movies"} movies={movies.upComingMovies} />
          <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
          <MovieList title={"Top Rated"} movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;

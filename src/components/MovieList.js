import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  //  const posterPath =movies[0]?.poster_path
  //  console.log("posterPath", posterPath)
  return (
    <div className="px-6">
      <div className="text-3xl py-4 text-white">{title}</div>
      <div className="flex overflow-x-scroll ">
        <div className="flex">
          {movies &&
            movies.map((item) => (
              <MovieCard key={item.id} posterPath={item.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;

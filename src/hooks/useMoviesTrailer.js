import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constent";
import { addTrailerVideo } from "../utils/playingMoviesSlice";
import { useEffect } from "react";

const useMoviesTrailer  = (movieId) => {
    console.log(movieId)
    const dispatch = useDispatch();
    const getMovieVideo = async () => {
try{
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
    const jsonData  = await data.json();
    console.log("jsonData", jsonData)
    const trailer = jsonData.results?.find(video => video?.type === "Trailer")
    console.log("trailer", trailer)
    dispatch(addTrailerVideo(trailer))
} catch (err) {
    console.log(err)
}
    }
    useEffect(()=>{
        getMovieVideo()
    }, [movieId])
}

export default useMoviesTrailer
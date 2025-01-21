import { useDispatch } from "react-redux"
import { addNowPlayngMovies } from "../utils/playingMoviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constent";

const useNowPlayingMovies = () =>{
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () =>{
        try{
            const data = await fetch(`https://api.themoviedb.org/3/movie/now_playing?page=1`, API_OPTIONS);
            const jsonData = await data.json();
            console.log("data",jsonData?.results)
            dispatch(addNowPlayngMovies(jsonData.results))
        } catch (err){
            console.log(err)
        }
       
    }
    useEffect(()=>{
        getNowPlayingMovies()
    }, [])
}
export default useNowPlayingMovies
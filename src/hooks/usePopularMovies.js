import { useDispatch } from "react-redux"
import { addPopularMovies } from "../utils/playingMoviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constent";

const usePopularMovies = () =>{
    const dispatch = useDispatch();
    const getPopularMovies = async () =>{
        try{
            const data = await fetch(`https://api.themoviedb.org/3/movie/popular?page=1`, API_OPTIONS);
            const jsonData = await data.json();
            console.log("data",jsonData.results)
            dispatch(addPopularMovies(jsonData?.results))
        } catch (err){
            console.log(err)
        }
       
    }
    useEffect(()=>{
        getPopularMovies()
    }, [])
}
export default usePopularMovies
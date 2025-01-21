import { useDispatch } from "react-redux"
import {  addTopRatedMovies } from "../utils/playingMoviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constent";

const useTopRatedMovies = () =>{
    const dispatch = useDispatch();
    const getTopRatedMovies = async () =>{
        try{
            const data = await fetch(`https://api.themoviedb.org/3/movie/top_rated?page=1`, API_OPTIONS);
            const jsonData = await data.json();
            console.log("data",jsonData?.results)
            dispatch(addTopRatedMovies(jsonData.results))
        } catch (err){
            console.log(err)
        }
       
    }
    useEffect(()=>{
        getTopRatedMovies()
    }, [])
}
export default useTopRatedMovies
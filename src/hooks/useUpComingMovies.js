import { useDispatch } from "react-redux"
import {  addUpComingMovies } from "../utils/playingMoviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constent";

const useUpComingMovies = () =>{
    const dispatch = useDispatch();
    const getUpComingMovies = async () =>{
        try{
            const data = await fetch(`https://api.themoviedb.org/3/movie/upcoming?page=1`, API_OPTIONS);
            const jsonData = await data.json();
            console.log("data",jsonData?.results)
            dispatch(addUpComingMovies(jsonData.results))
        } catch (err){
            console.log(err)
        }
       
    }
    useEffect(()=>{
        getUpComingMovies()
    }, [])
}
export default useUpComingMovies
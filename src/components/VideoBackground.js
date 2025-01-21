import { useSelector } from "react-redux"
import useMoviesTrailer from "../hooks/useMoviesTrailer"

const VideoBackground = ({movieId}) =>{
    console.log(movieId)
    const trailerVideo = useSelector(store=> store.movies?.trailerVideo)
    useMoviesTrailer(movieId)
    return (
   <iframe className="w-screen aspect-video" src={`https://www.youtube.com/embed/${trailerVideo?.key}?si=cHoVZPDoH1RPw1A1?&autoplay=1&mute=1`}
 title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    )
}
export default VideoBackground
import React, { useEffect, useState } from 'react'
import categories, { getMovies } from '../../api'
import './banner.css'


export default function Banner() {
    const [movie, setMovie] = useState({})
const fetchRandomMovie = async () =>{
    try {
        const netflixOriginalsCategory =  categories.find((category) => category.name === "netflixOriginals")
        const data = await getMovies(netflixOriginalsCategory.path)
        const movies = data?.results
        const randomIndex = Math.floor(Math.random() * movies.length)
        setMovie(data?.results[randomIndex])
    } catch (error) {
        console.log("banner erro: ",error)
    }
}
    useEffect(() => {
     fetchRandomMovie()
    }, [])
    
    function truncate(str, n) {
        return str?.length > n ? str.substring(0, n - 1) + "..." : str;
      }

  return (
    <header className='banner-container'
    style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        roundPosition: "center-center",
      }}
    >
        <div className='banner-contet'>
        <h1 className='banner-title'>
        {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className='banner-button-container'>
        <button className='banner-button'>Play</button>
        <button className='banner-button'>My list</button>
           
        </div>
        </div>
        <div className="banner-description">
            <h2>{truncate(movie?.overview,150)}</h2>
        </div>
    </header>
  )
}

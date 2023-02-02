//fileiras
import movieTrailer from "movie-trailer";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { getMovies } from "../../api";
import "./row.css";

const imageHost = "https://image.tmdb.org/t/p/original/";

export default function Row({ title, path, isLarge }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const handleOnCLick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie.title || movie.name || movie.original_name || "")
      .then((url)=>{

        setTrailerUrl(url);
      })
      .catch((error)=>{
        console.log("erro fetching movie trailler: ",error)
      })
    }
  };
  const fetchMovies = async (_path) => {
    try {
      const data = await getMovies(_path);
      console.log("data: ", data);
      setMovies(data?.results);
    } catch (error) {
      console.log("fetchMovies error: ", error);
    }
  };

  useEffect(() => {
    fetchMovies(path);
  }, [path]);

  return (
    <div className="row-container">
      <h2 className="row-header">{title}</h2>
      <div className="row-cards">
        {movies?.map((movie) => {
          return (
            <img
              onClick={() => handleOnCLick(movie)}
              className={`movie-card ${isLarge && "movie-card-large"}`}
              key={movie.id}
              src={`${imageHost}${
                isLarge ? movie.backdrop_path : movie.poster_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
      {trailerUrl && <ReactPlayer url={trailerUrl} playing={true} />}
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import axios from '../axios';
import '../styles/Row.css';
import Youtube from "react-youtube";
import movieTrailer from 'movie-trailer';
import Alert from '@material-ui/lab/Alert';
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const [trailerNotFound, setTrailerNotFound] = useState(false);
  //a snippet of code which runs based on a specific condition
  useEffect(() => {
    // if [], run once when the row loads, and dont run it again
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  }
  const handleClick = (movie) => {
    if (trailerUrl || trailerNotFound) {
      setTrailerUrl("");
      setTrailerNotFound(false);
    } else {
      movieTrailer(movie?.name || movie?.title || movie.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
          setTrailerNotFound(false);
        })
        .catch((error) => {
          setTrailerNotFound(true);
          console.log(error);
        });
    }
  };
  return (
		<div className="row">
			<h2>{title}</h2>
			<div className="row__posters">
				{movies.map((movie) => (
					<img
						key={movie.id}
						onClick={() => handleClick(movie)}
						className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
						src={`${base_url}${
							isLargeRow ? movie.poster_path : movie.backdrop_path
						}`}
						alt={movie.name}
					/>
				))}
			</div>

			{trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
			{trailerNotFound && (
				<Alert severity="error">Sorry! Trailer not found</Alert>
			)}
		</div>
	);
}

export default Row

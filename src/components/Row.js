import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../axios";

function Row({ title, fetchURL, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);
  const base_url = "https://image.tmdb.org/t/p/original/";
  console.log(movies);
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;

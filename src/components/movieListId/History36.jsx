import React, { useEffect, useState } from "react";
import "../../index.css";
import { fetchMovieByGenre36 } from "../../service";
import { Link } from "react-router-dom";

export default function History36() {
  const [movieByGenreId, setMovieByGenreId] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setMovieByGenreId(await fetchMovieByGenre36());
    };

    fetchAPI();
  }, []);

  const MovieCardList = movieByGenreId.slice(0, 10000).map((item, index) => {
    return (
      <div className="divSize" key={index}>
        <div className="forPosterBorder">
          <Link to={`/movies/${item.id}`}>
            <img
              src={item.poster}
              alt={item.title}
              className="posterSize img-1"
            />
          </Link>
        </div>
        <div className="forMarginTop">
          <h6 className="movieTitle">{item.title}</h6>
        </div>
      </div>
    );
  });

  return (
    <div className="slidingBox">
        <h3 className="forMarginBottom">Romance</h3>
      <div className="forHorizontal scrollingPart slideAnimation">
        {MovieCardList} {MovieCardList}
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function MovieListForSearch(props) {
  const BookmarkComponent = props.BookmarkComponent;
  return (
    <div className="forHorizontal">
      {props.movies.map((item, index) => (
        <div className="img-container">
          <div>
          <Link to={`/movies/${item.imdbID}`}>
            <img src={item.Poster} alt="movie" className="searchImg"/>
            </Link>
          </div>
          <p className="searchMovie">{item.Title}</p>
          <div
            onClick={() => props.handleBookmark(item)}
            className="overlay"
          >
            <BookmarkComponent />
          </div>
        </div>
      ))}
    </div>
  );
}
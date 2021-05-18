import React, { useEffect, useState } from "react";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieListForSearch from "./MovieListForSearch";
import LogoHeading from "./LogoHeading";
import BookmarkHeading from "./BookmarkHeading";
import SearchBox from "./SearchBox";
import Bookmarking from "./Bookmarking";
import RemoveBookmark from "./RemoveBookmark";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [bookmark, setBookmark] = useState([]);

  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  /*
  useEffect(() => {
    const savedBookmarks = JSON.parse(
      localStorage.getItem("movie-api-app-bookmark")
    );

    setBookmark(savedBookmarks);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("movie-api-app-bookmark", JSON.stringify(items));
  };
  saveToLocalStorage(newBookmarkList);
  saveToLocalStorage(newBookmarkList);
  */

  const addItToBookmark = (item) => {
    const newBookmarkList = [...bookmark, item];
    setBookmark(newBookmarkList);
  };

  const removeItFromBookmark = (item) => {
    const newBookmarkList = bookmark.filter(
      (bookmark) => bookmark.imdbID !== bookmark.imdbID
    );
    setBookmark(newBookmarkList);
  };

  return (
    <div className="movie-app">
      <div className="logoNsearch">
        <LogoHeading heading="Movies App" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="forHorizontal forScroll">
        <MovieListForSearch
          movies={movies}
          BookmarkComponent={Bookmarking}
          handleBookmark={addItToBookmark}
        />
      </div>
      <div>
        <BookmarkHeading heading="Bookmarks" />
      </div>
      <div className="forHorizontal forScroll">
        <MovieListForSearch
          movies={bookmark}
          BookmarkComponent={RemoveBookmark}
          handleBookmark={removeItFromBookmark}
        />
      </div>
    </div>
  );
}

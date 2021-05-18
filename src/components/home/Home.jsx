import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import App from "../ListOfSearchAndBookmark/App";
import Action28 from "../movieListId/Action28";
import Adventure12 from "../movieListId/Adventure12";
import Animation16 from "../movieListId/Animation16";
import Comedy35 from "../movieListId/Comedy35";
import Crime80 from "../movieListId/Crime80";
import Documentary99 from "../movieListId/Documentary99";
import Drama18 from "../movieListId/Drama18";
import Family10751 from "../movieListId/Family10751";
import Fantasy14 from "../movieListId/Fantasy14";
import History36 from "../movieListId/History36";
import Horror27 from "../movieListId/Horror27";
import Music10402 from "../movieListId/Music10402";
import Mystery9648 from "../movieListId/Mystery9648";
import Romance10749 from "../movieListId/Romance10749";
import ScienceFiction878 from "../movieListId/ScienceFiction878";
import TVMovie10770 from "../movieListId/TVMovie10770";
import Thriller53 from "../movieListId/Thriller53";
import War10752 from "../movieListId/War10752";
import Western37 from "../movieListId/Western37";

export default function Home() {
  return (
    <div className="mainContainer">
      <App />
      <Action28 heading="Action" />
      <Adventure12 heading="Adventure" />
      <Animation16 heading="Animation" />
      <Comedy35 heading="Comedy" />
      <Crime80 heading="Crime" />
      <Documentary99 heading="Documentary" />
      <Drama18 heading="Drama" />
      <Family10751 heading="Family" />
      <Fantasy14 heading="Fantasy" />
      <History36 heading="History" />
      <Horror27 heading="Horror" />
      <Music10402 heading="Music" />
      <Mystery9648 heading="Mystery" />
      <Romance10749 heading="Romance" />
      <ScienceFiction878 heading="Science Fiction" />
      <TVMovie10770 heading="TV Movie" />
      <Thriller53 heading="Thriller" />
      <War10752 heading="War" />
      <Western37 heading="Western" />
    </div>
  );
};
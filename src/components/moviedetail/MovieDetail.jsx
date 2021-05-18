import React, { useEffect, useState } from "react";
import {
  fetchCasts,
  fetchMovieDetail,
} from "../../service";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import ReactStars from "react-rating-stars-component";

export default function MovieDetail({ match }) {
  let params = match.params;
  const [detail, setDetail] = useState([]);
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDetail(await fetchMovieDetail(params.id));
      setCasts(await fetchCasts(params.id));
    };
    fetchAPI();
  }, [params.id]);

  const castList = casts.slice(0, 5).map((item, index) => {
    return (
      <div className="castList" key={index}>
        {item.name}
      </div>
    );
  });

  const z = detail.vote_average;

  return (
    <div>
      <div className="forContainer">
        <div className="lhsPart">
          <img
            src={`https://image.tmdb.org/t/p/original/${detail.backdrop_path}`}
            alt={detail.title}
            className="forImg"
          />
        </div>
        <div className="rhsPart">
          <div className="forHorizontal titleNstar">
            <div className="forHorizontal">
              <h1 className="forTitle">
                {detail.title}&nbsp;<span className="forRatings">( {z} )</span>
              </h1>
            </div>

            <div>
              <ReactStars
                count={z}
                size={35}
                color={"#f4c10f"}
                classNames="forStars"
              />
            </div>
          </div>
          <div className="forDate">
            <div>{detail.release_date}</div>
          </div>
          
          <div className="forCast">
            <div>
              <h5>Casts: &nbsp;</h5>
            </div>
            <div>{castList}</div>
          </div>
          <div className="forDescription">
            <h5>Movie Description: &nbsp;</h5> {detail.overview}
          </div>
        </div>
      </div>
    </div>
  );
}

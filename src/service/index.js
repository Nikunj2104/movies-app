import axios from "axios";

const apiKey = "bba60536b83b82c487cea52aaf6c4852";
const url = "https://api.themoviedb.org/3";
const movieUrl = `${url}/movie/`;
const moviesUrl = `${url}/discover/movie`;

export const fetchMovieByGenre = async (genre_id) => {
  try {
    const { data } = await axios.get(moviesUrl, {
      params: {
        api_key: apiKey,
        language: "en_US",
        page: 1,
        with_genres: genre_id,
      },
    });

    const posterUrl = "https://image.tmdb.org/t/p/original/";

    const modifiedData = data["results"].map((m) => ({
      id: m["id"],
      backPoster: posterUrl + m["backdrop_path"],
      popularity: m["popularith"],
      title: m["title"],
      poster: posterUrl + m["poster_path"],
      overview: m["overview"],
      rating: m["vote_average"],
    }));
    return modifiedData;
  } catch (err) {}
};

export const fetchMovieDetail = async (id) => {
  try {
    const { data } = await axios.get(`${movieUrl}/${id}`, {
      params: {
        api_key: apiKey,
        language: "en_US",
      },
    });
    return data;
  } catch (err) {}
};

export const fetchCasts = async (id) => {
  try {
    const { data } = await axios.get(`${movieUrl}/${id}/credits`, {
      params: {
        api_key: apiKey,
      },
    });
    const modifiedData = data["cast"].map((c) => ({
      id: c["id"],
      character: c["character"],
      name: c["name"],
      img: "https://image.tmdb.org/t/p/w200" + c["profile_path"],
    }));
    return modifiedData;
  } catch (err) {}
};

export const fetchMovieByGenre28 = async () => {
  try {
    const { data } = await axios.get(`${moviesUrl}`, {
      params: {
        api_key: apiKey,
        language: "en_US",
        page: 1,
        with_genres: 28
      },
    });

    const posterUrl = "https://image.tmdb.org/t/p/original/";

    const modifiedData = data["results"].map((m) => ({
      id: m["id"],
      backPoster: posterUrl + m["backdrop_path"],
      popularity: m["popularith"],
      title: m["title"],
      poster: posterUrl + m["poster_path"],
      overview: m["overview"],
      rating: m["vote_average"],
    }));
    return modifiedData;
  } catch (err) {}
};

export const fetchMovieByGenre12 = async () => {
  try {
    const { data } = await axios.get(`${moviesUrl}`, {
      params: {
        api_key: apiKey,
        language: "en_US",
        page: 1,
        with_genres: 12
      },
    });

    const posterUrl = "https://image.tmdb.org/t/p/original/";

    const modifiedData = data["results"].map((m) => ({
      id: m["id"],
      backPoster: posterUrl + m["backdrop_path"],
      popularity: m["popularith"],
      title: m["title"],
      poster: posterUrl + m["poster_path"],
      overview: m["overview"],
      rating: m["vote_average"],
    }));
    return modifiedData;
  } catch (err) {}
};

export const fetchMovieByGenre16 = async () => {
  try {
    const { data } = await axios.get(`${moviesUrl}`, {
      params: {
        api_key: apiKey,
        language: "en_US",
        page: 1,
        with_genres: 16
      },
    });

    const posterUrl = "https://image.tmdb.org/t/p/original/";

    const modifiedData = data["results"].map((m) => ({
      id: m["id"],
      backPoster: posterUrl + m["backdrop_path"],
      popularity: m["popularith"],
      title: m["title"],
      poster: posterUrl + m["poster_path"],
      overview: m["overview"],
      rating: m["vote_average"],
    }));
    return modifiedData;
  } catch (err) {}
};

export const fetchMovieByGenre35 = async () => {
  try {
    const { data } = await axios.get(`${moviesUrl}`, {
      params: {
        api_key: apiKey,
        language: "en_US",
        page: 1,
        with_genres: 35
      },
    });

    const posterUrl = "https://image.tmdb.org/t/p/original/";

    const modifiedData = data["results"].map((m) => ({
      id: m["id"],
      backPoster: posterUrl + m["backdrop_path"],
      popularity: m["popularith"],
      title: m["title"],
      poster: posterUrl + m["poster_path"],
      overview: m["overview"],
      rating: m["vote_average"],
    }));
    return modifiedData;
  } catch (err) {}
};


export const fetchMovieByGenre80 = async () => {
  try {
    const { data } = await axios.get(`${moviesUrl}`, {
      params: {
        api_key: apiKey,
        language: "en_US",
        page: 1,
        with_genres: 80
      },
    });

    const posterUrl = "https://image.tmdb.org/t/p/original/";

    const modifiedData = data["results"].map((m) => ({
      id: m["id"],
      backPoster: posterUrl + m["backdrop_path"],
      popularity: m["popularith"],
      title: m["title"],
      poster: posterUrl + m["poster_path"],
      overview: m["overview"],
      rating: m["vote_average"],
    }));
    return modifiedData;
  } catch (err) {}
};

export const fetchMovieByGenre99 = async () => {
  try {
    const { data } = await axios.get(`${moviesUrl}`, {
      params: {
        api_key: apiKey,
        language: "en_US",
        page: 1,
        with_genres: 99
      },
    });

    const posterUrl = "https://image.tmdb.org/t/p/original/";

    const modifiedData = data["results"].map((m) => ({
      id: m["id"],
      backPoster: posterUrl + m["backdrop_path"],
      popularity: m["popularith"],
      title: m["title"],
      poster: posterUrl + m["poster_path"],
      overview: m["overview"],
      rating: m["vote_average"],
    }));
    return modifiedData;
  } catch (err) {}
};

export const fetchMovieByGenre18 = async () => {
  try {
    const { data } = await axios.get(`${moviesUrl}`, {
      params: {
        api_key: apiKey,
        language: "en_US",
        page: 1,
        with_genres: 18
      },
    });

    const posterUrl = "https://image.tmdb.org/t/p/original/";

    const modifiedData = data["results"].map((m) => ({
      id: m["id"],
      backPoster: posterUrl + m["backdrop_path"],
      popularity: m["popularith"],
      title: m["title"],
      poster: posterUrl + m["poster_path"],
      overview: m["overview"],
      rating: m["vote_average"],
    }));
    return modifiedData;
  } catch (err) {}
};

export const fetchMovieByGenre10751 = async () => {
  try {
    const { data } = await axios.get(`${moviesUrl}`, {
      params: {
        api_key: apiKey,
        language: "en_US",
        page: 1,
        with_genres: 10751
      },
    });

    const posterUrl = "https://image.tmdb.org/t/p/original/";

    const modifiedData = data["results"].map((m) => ({
      id: m["id"],
      backPoster: posterUrl + m["backdrop_path"],
      popularity: m["popularith"],
      title: m["title"],
      poster: posterUrl + m["poster_path"],
      overview: m["overview"],
      rating: m["vote_average"],
    }));
    return modifiedData;
  } catch (err) {}
};

export const fetchMovieByGenre14 = async () => {
  try {
    const { data } = await axios.get(`${moviesUrl}`, {
      params: {
        api_key: apiKey,
        language: "en_US",
        page: 1,
        with_genres: 14
      },
    });

    const posterUrl = "https://image.tmdb.org/t/p/original/";

    const modifiedData = data["results"].map((m) => ({
      id: m["id"],
      backPoster: posterUrl + m["backdrop_path"],
      popularity: m["popularith"],
      title: m["title"],
      poster: posterUrl + m["poster_path"],
      overview: m["overview"],
      rating: m["vote_average"],
    }));
    return modifiedData;
  } catch (err) {}
};

export const fetchMovieByGenre36 = async () => {
  try {
    const { data } = await axios.get(`${moviesUrl}`, {
      params: {
        api_key: apiKey,
        language: "en_US",
        page: 1,
        with_genres: 36
      },
    });

    const posterUrl = "https://image.tmdb.org/t/p/original/";

    const modifiedData = data["results"].map((m) => ({
      id: m["id"],
      backPoster: posterUrl + m["backdrop_path"],
      popularity: m["popularith"],
      title: m["title"],
      poster: posterUrl + m["poster_path"],
      overview: m["overview"],
      rating: m["vote_average"],
    }));
    return modifiedData;
  } catch (err) {}
};

export const fetchMovieByGenre27 = async () => {
  try {
    const { data } = await axios.get(`${moviesUrl}`, {
      params: {
        api_key: apiKey,
        language: "en_US",
        page: 1,
        with_genres: 27
      },
    });

    const posterUrl = "https://image.tmdb.org/t/p/original/";

    const modifiedData = data["results"].map((m) => ({
      id: m["id"],
      backPoster: posterUrl + m["backdrop_path"],
      popularity: m["popularith"],
      title: m["title"],
      poster: posterUrl + m["poster_path"],
      overview: m["overview"],
      rating: m["vote_average"],
    }));
    return modifiedData;
  } catch (err) {}
};

export const fetchMovieByGenre10402 = async () => {
  try {
    const { data } = await axios.get(`${moviesUrl}`, {
      params: {
        api_key: apiKey,
        language: "en_US",
        page: 1,
        with_genres: 10402
      },
    });

    const posterUrl = "https://image.tmdb.org/t/p/original/";

    const modifiedData = data["results"].map((m) => ({
      id: m["id"],
      backPoster: posterUrl + m["backdrop_path"],
      popularity: m["popularith"],
      title: m["title"],
      poster: posterUrl + m["poster_path"],
      overview: m["overview"],
      rating: m["vote_average"],
    }));
    return modifiedData;
  } catch (err) {}
};

export const fetchMovieByGenre9648 = async () => {
  try {
    const { data } = await axios.get(`${moviesUrl}`, {
      params: {
        api_key: apiKey,
        language: "en_US",
        page: 1,
        with_genres: 9648
      },
    });

    const posterUrl = "https://image.tmdb.org/t/p/original/";

    const modifiedData = data["results"].map((m) => ({
      id: m["id"],
      backPoster: posterUrl + m["backdrop_path"],
      popularity: m["popularith"],
      title: m["title"],
      poster: posterUrl + m["poster_path"],
      overview: m["overview"],
      rating: m["vote_average"],
    }));
    return modifiedData;
  } catch (err) {}
};

export const fetchMovieByGenre10749 = async () => {
  try {
    const { data } = await axios.get(`${moviesUrl}`, {
      params: {
        api_key: apiKey,
        language: "en_US",
        page: 1,
        with_genres: 10749
      },
    });

    const posterUrl = "https://image.tmdb.org/t/p/original/";

    const modifiedData = data["results"].map((m) => ({
      id: m["id"],
      backPoster: posterUrl + m["backdrop_path"],
      popularity: m["popularith"],
      title: m["title"],
      poster: posterUrl + m["poster_path"],
      overview: m["overview"],
      rating: m["vote_average"],
    }));
    return modifiedData;
  } catch (err) {}
};

export const fetchMovieByGenre878 = async () => {
  try {
    const { data } = await axios.get(`${moviesUrl}`, {
      params: {
        api_key: apiKey,
        language: "en_US",
        page: 1,
        with_genres: 878
      },
    });

    const posterUrl = "https://image.tmdb.org/t/p/original/";

    const modifiedData = data["results"].map((m) => ({
      id: m["id"],
      backPoster: posterUrl + m["backdrop_path"],
      popularity: m["popularith"],
      title: m["title"],
      poster: posterUrl + m["poster_path"],
      overview: m["overview"],
      rating: m["vote_average"],
    }));
    return modifiedData;
  } catch (err) {}
};

export const fetchMovieByGenre10770 = async () => {
  try {
    const { data } = await axios.get(`${moviesUrl}`, {
      params: {
        api_key: apiKey,
        language: "en_US",
        page: 1,
        with_genres: 10770
      },
    });

    const posterUrl = "https://image.tmdb.org/t/p/original/";

    const modifiedData = data["results"].map((m) => ({
      id: m["id"],
      backPoster: posterUrl + m["backdrop_path"],
      popularity: m["popularith"],
      title: m["title"],
      poster: posterUrl + m["poster_path"],
      overview: m["overview"],
      rating: m["vote_average"],
    }));
    return modifiedData;
  } catch (err) {}
};

export const fetchMovieByGenre53 = async () => {
  try {
    const { data } = await axios.get(`${moviesUrl}`, {
      params: {
        api_key: apiKey,
        language: "en_US",
        page: 1,
        with_genres: 53
      },
    });

    const posterUrl = "https://image.tmdb.org/t/p/original/";

    const modifiedData = data["results"].map((m) => ({
      id: m["id"],
      backPoster: posterUrl + m["backdrop_path"],
      popularity: m["popularith"],
      title: m["title"],
      poster: posterUrl + m["poster_path"],
      overview: m["overview"],
      rating: m["vote_average"],
    }));
    return modifiedData;
  } catch (err) {}
};


export const fetchMovieByGenre10752 = async () => {
  try {
    const { data } = await axios.get(`${moviesUrl}`, {
      params: {
        api_key: apiKey,
        language: "en_US",
        page: 1,
        with_genres: 10752
      },
    });

    const posterUrl = "https://image.tmdb.org/t/p/original/";

    const modifiedData = data["results"].map((m) => ({
      id: m["id"],
      backPoster: posterUrl + m["backdrop_path"],
      popularity: m["popularith"],
      title: m["title"],
      poster: posterUrl + m["poster_path"],
      overview: m["overview"],
      rating: m["vote_average"],
    }));
    return modifiedData;
  } catch (err) {}
};

export const fetchMovieByGenre37 = async () => {
  try {
    const { data } = await axios.get(`${moviesUrl}`, {
      params: {
        api_key: apiKey,
        language: "en_US",
        page: 1,
        with_genres: 37
      },
    });

    const posterUrl = "https://image.tmdb.org/t/p/original/";

    const modifiedData = data["results"].map((m) => ({
      id: m["id"],
      backPoster: posterUrl + m["backdrop_path"],
      popularity: m["popularith"],
      title: m["title"],
      poster: posterUrl + m["poster_path"],
      overview: m["overview"],
      rating: m["vote_average"],
    }));
    return modifiedData;
  } catch (err) {}
};
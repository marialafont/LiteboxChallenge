import { createContext, Suspense, useEffect, useState } from 'react';
import { getMovies } from '../services/getMovies';

export const MoviesContext = createContext();

const apiData = getMovies('https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20');

export const MoviesProvider = ({ children }) => {
  const [featuredMovie, setFeaturedMovie] = useState({});
  const [uploadedMovies, setUploadedMovies] = useState([]);
  const [myMovies, setMyMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const data = apiData.read();

  useEffect(() => {
    const { results } = data;
    setMovies(results);
    setFeaturedMovie(results[Math.floor(Math.random() * 4)]);
  }, []);

  useEffect(() => {
    const localStorageMovies = localStorage.getItem('my movies');
    setMyMovies(JSON.parse(localStorageMovies));
  }, [uploadedMovies]);

  return (
    <MoviesContext.Provider value={{ featuredMovie, movies, uploadedMovies, setUploadedMovies, myMovies }}>
      <Suspense>{children}</Suspense>
    </MoviesContext.Provider>
  );
};

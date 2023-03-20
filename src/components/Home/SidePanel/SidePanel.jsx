import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { MoviesContext } from '../../../context/MoviesContext';
import { SideMovie } from './SideMovie/SideMovie';
import { motion, AnimatePresence } from 'framer-motion';

export const SidePanel = () => {
  const { movies, myMovies } = useContext(MoviesContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showPopular, setShowPopular] = useState(true);
  const [showMyMovies, setShowMyMovies] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef();

  const popularMovies = useMemo(() => movies.slice(0, 4), [movies]);

  const handleClickOutside = (event) => {
    if (showDropdown && dropdownRef.current && !dropdownRef.current.contains(event.target) && !buttonRef?.current?.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return (
    <motion.aside variants={sidePanel} initial="initial" animate="end" className="sidePanel_container">
      <div className="sidePanel_selector">
        <p>VER:</p>
        <button ref={buttonRef} onClick={() => setShowDropdown(!showDropdown)}>
          <p>{showPopular ? 'POPULARES' : 'MIS PELICULAS'}</p>
          <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L6.54557 6.54557L12.0911 1" stroke="white" strokeWidth="2" />
          </svg>
        </button>
        <AnimatePresence>
          {showDropdown && (
            <motion.div
              ref={dropdownRef}
              variants={toggleDropdown}
              initial="initial"
              animate="end"
              exit="exit"
              key="dropdown"
              className="sidePanel_selector-dropdown"
            >
              <span />
              <div className="dropdown-selection-container">
                <div className="selector-dropdown-selection">
                  <button
                    onClick={() => {
                      setShowPopular(true);
                      setShowMyMovies(false);
                    }}
                    style={showPopular ? { fontWeight: 700 } : { fontWeight: 400 }}
                  >
                    POPULARES
                  </button>
                  {showPopular && (
                    <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" />
                    </svg>
                  )}
                </div>
                <div className="selector-dropdown-selection">
                  <button
                    onClick={() => {
                      setShowPopular(false);
                      setShowMyMovies(true);
                    }}
                    style={showMyMovies ? { fontWeight: 700 } : { fontWeight: 400 }}
                  >
                    MIS PELICULAS
                  </button>
                  {showMyMovies && (
                    <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" />
                    </svg>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence mode="wait">
        {showPopular && (
          <motion.div variants={toggleMovies} initial="initial" animate="end" exit="exit" key="popularMovies" className="sidePanel_movies-column">
            {popularMovies.map((movie) => (
              <SideMovie key={movie.id} movie={movie} />
            ))}
          </motion.div>
        )}
        {showMyMovies && (
          <motion.div variants={toggleMovies} initial="initial" animate="end" exit="exit" key="myMovies" className="sidePanel_movies-column">
            {myMovies?.map((movie) => (
              <SideMovie key={movie.id} movie={movie} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.aside>
  );
};

const sidePanel = {
  initial: { opacity: 0, x: '100vw' },
  end: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
      delay: 1,
    },
  },
};

const toggleDropdown = {
  initial: { opacity: 0 },
  end: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const toggleMovies = {
  initial: { opacity: 0 },
  end: {
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.7,
    },
  },
};

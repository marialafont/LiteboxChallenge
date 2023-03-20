import { useContext } from 'react';
import { MoviesContext } from '../../context/MoviesContext';
import { SidePanel } from './SidePanel/SidePanel';
import { imageUrl } from './utils';
import { motion } from 'framer-motion';

export const Home = () => {
  const { featuredMovie } = useContext(MoviesContext);

  return (
    <main className="home_main-container">
      <div className="home_container">
        <motion.img
          variants={blackground}
          initial="initial"
          animate="end"
          className="home_hero"
          src={imageUrl + featuredMovie?.backdrop_path}
          alt="Featured Movie"
        />
        <motion.div variants={gradient} initial="initial" animate="end" className="home_gradient" />
        <div className={`home_content ${featuredMovie?.title?.length < 25 ? 'short-content' : ''}`}>
          <div className="home_featured-movie">
            <motion.p variants={subtitle} initial="initial" animate="end">
              Original de
              <span> Liteflix</span>
            </motion.p>
            <motion.p
              variants={title}
              initial="initial"
              animate="end"
              className={`home_featured-movie-title ${featuredMovie?.title?.length > 25 ? 'large-text' : ''}`}
            >
              {featuredMovie?.title}
            </motion.p>
            <div className="home_buttons-container">
              <motion.button variants={button} initial="initial" animate="end" whileHover="hover" className="home_play-button">
                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.9423 8.2363L2.625 1.875V14.125L11.9423 8.2363Z" stroke="white" />
                </svg>
                <p>Reproducir</p>
              </motion.button>
              <motion.button variants={button} initial="initial" animate="endAfter" whileHover="hover" className="home_list-button">
                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 0V14" stroke="white" />
                  <path d="M14.5 7L0.5 7" stroke="white" />
                </svg>
                <p>Mi Lista</p>
              </motion.button>
            </div>
          </div>
          <SidePanel />
        </div>
      </div>
    </main>
  );
};

const blackground = {
  initial: { opacity: 0, scale: 1 },
  end: {
    opacity: 1,
    scale: [1.2, 1],
    transition: {
      duration: 3,
    },
  },
};

const gradient = {
  initial: { opacity: 0 },
  end: {
    opacity: 1,
    transition: {
      delay: 2.5,
      duration: 1,
    },
  },
};

const title = {
  initial: { y: '-50px', opacity: 0 },
  end: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 2,
      delay: 0.5,
    },
  },
};

const subtitle = {
  initial: { x: '-100vw', opacity: 0 },
  end: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      delay: 1.3,
    },
  },
};

const button = {
  initial: { x: '100px', opacity: 0 },
  end: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      delay: 0.6,
    },
  },
  endAfter: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      delay: 0.8,
    },
  },
  hover: {
    y: '-10px',
    transition: {
      type: 'spring',
      stiffness: 200,
    },
  },
};

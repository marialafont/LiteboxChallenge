import { useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import profile from '../../assets/images/profile.png';
import { MoviesContext } from '../../context/MoviesContext';
import { UploadMovie } from './UploadMovie';
import { motion, AnimatePresence } from 'framer-motion';

export const AddMovieModal = ({ closeModal }) => {
  const { uploadedMovies, setUploadedMovies } = useContext(MoviesContext);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [myMovieTitle, setMyMovieTitle] = useState('');
  const [disableButton, setDisableButton] = useState(true);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const movieToUpload = { ...uploadedFile, title: myMovieTitle, id: uuidv4() };
    const newMovies = [...uploadedMovies, movieToUpload];
    setUploadedMovies(newMovies);
    window.localStorage.setItem('my movies', JSON.stringify(newMovies));
    setDisableButton(true);
    setUploadSuccess(true);
  };

  useEffect(() => {
    if (uploadedFile === null || myMovieTitle === '') {
      setDisableButton(true);
    }
    if (uploadedFile !== null && myMovieTitle !== '') {
      setDisableButton(false);
    }
  }, [uploadedFile, myMovieTitle]);

  const handleInput = (e) => setMyMovieTitle(e.target.value);

  return (
    <motion.div variants={modal} initial="initial" animate="end" exit="exit" key="addMovieModal" className="modal_container">
      <button className="modal_close-icon" onClick={closeModal}>
        <motion.svg variants={hoverItems} whileHover="close" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5147 1.51472L18.4853 18.4853" stroke="white" strokeLinecap="square" />
          <path d="M1.5147 18.4853L18.4853 1.51472" stroke="white" strokeLinecap="square" />
        </motion.svg>
      </button>
      <AnimatePresence mode="wait">
        {!uploadSuccess ? (
          <motion.span variants={upload} initial={false} animate="end" exit="exit" key="step1">
            <div className="modal_header">
              <button className="modal_menu">
                <svg width="27" height="14" viewBox="0 0 27 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 1H27" stroke="white" />
                  <path d="M0 7H27" stroke="white" />
                  <path d="M10 13H27" stroke="white" />
                </svg>
              </button>
              <div className="modal_logo">
                <span>LITE</span>FLIX
              </div>
              <div className="modal_profile">
                <img src={profile} alt="profile" />
              </div>
            </div>
            <form className="modal_content" onSubmit={handleSubmit}>
              <p className="modal_content-title">AGREGAR PELÍCULA</p>
              <UploadMovie setUploadedFile={setUploadedFile} uploadedFile={uploadedFile} />
              <motion.input
                whileFocus={{ scale: 1.1 }}
                value={myMovieTitle}
                onChange={handleInput}
                placeholder="TÍTULO"
                className="modal_input-title"
                type="text"
              />
              <button disabled={disableButton} className="modal_add-movie-button">
                SUBIR PELÍCULA
              </button>
            </form>
            <button onClick={closeModal} className="modal_close-button">
              SALIR
            </button>
          </motion.span>
        ) : (
          <motion.span variants={upload} initial="initial" animate="end" key="step2">
            <div className="modal_header">
              <button className="modal_menu">
                <svg width="27" height="14" viewBox="0 0 27 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 1H27" stroke="white" />
                  <path d="M0 7H27" stroke="white" />
                  <path d="M10 13H27" stroke="white" />
                </svg>
              </button>
              <div className="modal_logo">
                <span>LITE</span>FLIX
              </div>
              <div className="modal_profile">
                <img src={profile} alt="profile" />
              </div>
            </div>
            <div className="modal_success-container">
              <p className="modal_logo desktop">
                <span>LITE</span>FLIX
              </p>
              <p className="modal_success-message">¡FELICITACIONES!</p>
              <p className="modal_success-text">{myMovieTitle} FUE CORRECTAMENTE SUBIDA</p>
              <motion.button variants={hoverItems} whileHover="button" onClick={closeModal} className="modal_success-close">
                IR A HOME
              </motion.button>
            </div>
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const modal = {
  initial: { opacity: 0, y: '100vh' },
  end: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    y: '100vh',
    transition: {
      duration: 0.3,
    },
  },
};

const hoverItems = {
  close: {
    rotate: [-180, 0],
    transition: {
      duration: 0.4,
    },
  },
  button: {
    y: '-10px',
  },
};

const upload = {
  initial: { opacity: 0 },
  end: {
    opacity: 1,
  },
  exit: { opacity: 0 },
};

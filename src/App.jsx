import { useState } from 'react';
import { Home } from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import Modal from 'react-modal';
import { AddMovieModal } from './components/AddMovieModal/AddMovieModal';
import { motion, AnimatePresence } from 'framer-motion';

Modal.setAppElement('#root');

export const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  function openModal() {
    setModalOpen(true);
  }
  function closeModal() {
    setModalOpen(false);
  }

  return (
    <>
      <Navbar openModal={openModal} />
      <Home />
      <AnimatePresence>
        {modalOpen && (
          <>
            <motion.div variants={overlay} initial="initial" animate="end" exit="exit" key="overlay" className="modal_overlay" />
            <Modal isOpen={modalOpen} onRequestClose={closeModal} overlayClassName="disableOverlay" className="addMovieModal" contentLabel="Add Movie Modal">
              <AddMovieModal closeModal={closeModal} />
            </Modal>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

const overlay = {
  initial: { opacity: 0 },
  end: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

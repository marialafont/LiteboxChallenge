import { useEffect, useState } from 'react';
import profile from '../../assets/images/profile.png';
import { SideMenu } from './SideMenu/SideMenu';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = ({ openModal }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  useEffect(() => {
    if (openModal) {
      setOpenSideMenu(false);
    }
  }, [openModal]);

  return (
    <nav>
      <motion.div variants={navbar} initial="initial" animate="end" className="navbar_container">
        <div className="navbar_logo">
          <span>LITE</span>FLIX
        </div>
        <div className="navbar_add-movie">
          <motion.button variants={hoverItems} whileHover="add" onClick={openModal}>
            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 0V14" stroke="white" />
              <path d="M14.5 7L0.5 7" stroke="white" />
            </svg>
            <p>Agregar pelicula</p>
          </motion.button>
        </div>
        <button onClick={() => setOpenSideMenu(true)} className="navbar_menu-button">
          <motion.svg variants={hoverItems} whileHover="menu" width="27" height="14" viewBox="0 0 27 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1H27" stroke="white" />
            <path d="M0 7H27" stroke="white" />
            <path d="M10 13H27" stroke="white" />
          </motion.svg>
        </button>
        <motion.div className="navbar_notification">
          <motion.svg variants={hoverItems} whileHover="notification" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1_391)">
              <path
                d="M20.8 8.66661C20.8 6.69643 19.9783 4.80694 18.5155 3.41382C17.0527 2.02069 15.0687 1.23804 13 1.23804C10.9314 1.23804 8.9474 2.02069 7.48462 3.41382C6.02183 4.80694 5.20005 6.69643 5.20005 8.66661C5.20005 17.3333 1.30005 19.8095 1.30005 19.8095H24.7C24.7 19.8095 20.8 17.3333 20.8 8.66661Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.249 23.5238C15.0204 23.899 14.6924 24.2105 14.2977 24.427C13.903 24.6435 13.4555 24.7575 13 24.7575C12.5445 24.7575 12.097 24.6435 11.7023 24.427C11.3076 24.2105 10.9795 23.899 10.751 23.5238"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <circle cx="20.5" cy="5.5" r="4.5" fill="#64EEBC" />
            <defs>
              <clipPath id="clip0_1_391">
                <rect width="26" height="26" fill="white" />
              </clipPath>
            </defs>
          </motion.svg>
        </motion.div>
        <div className="navbar_profile">
          <img src={profile} alt="profile" />
        </div>
      </motion.div>
      <AnimatePresence>{openSideMenu && <SideMenu setOpenSideMenu={setOpenSideMenu} openModal={openModal} />}</AnimatePresence>
    </nav>
  );
};

const navbar = {
  initial: { opacity: 0, scale: 1.3 },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2,
      delay: 0.2,
    },
  },
};

const hoverItems = {
  add: {
    x: '7px',
    textShadow: '1px 1px 1px rgba(255, 255, 255, 0.65)',
  },
  notification: {
    fill: '#ffffff',
    rotateZ: -3,
    transition: {
      type: 'spring',
      stiffness: 200,
    },
  },
  menu: {
    scale: 1.1,
  },
};

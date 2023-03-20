import profile from '../../../assets/images/profile.png';
import { motion } from 'framer-motion';

export const SideMenu = ({ setOpenSideMenu, openModal }) => {
  return (
    <>
      <motion.div variants={overlay} initial="initial" animate="end" exit="exit" key="overlay" className="sideMenu_overlay" />
      <motion.div variants={sideMenu} initial="initial" animate="end" exit="exit" key="sideMenu" className="sideMenu_container">
        <div className="sideMenu_header">
          <button onClick={() => setOpenSideMenu(false)} className="sideMenu_close">
            <motion.svg variants={hoverItems} whileHover="close" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.5147 1.51472L18.4853 18.4853" stroke="white" strokeLinecap="square" />
              <path d="M1.5147 18.4853L18.4853 1.51472" stroke="white" strokeLinecap="square" />
            </motion.svg>
          </button>
          <div className="sideMenu_logo">
            <span>LITE</span>FLIX
          </div>
          <div className="sideMenu_notification">
            <motion.svg
              variants={hoverItems}
              whileHover="notification"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_391)">
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
          </div>
          <div className="sideMenu_profile">
            <img src={profile} alt="profile" />
          </div>
        </div>

        <div className="sideMenu_links-container">
          <ul className="sideMenu_links">
            <motion.li variants={hoverItems} whileHover="links">
              INICIO
            </motion.li>
            <motion.li variants={hoverItems} whileHover="links">
              SERIES
            </motion.li>
            <motion.li variants={hoverItems} whileHover="links">
              PELÍCULAS
            </motion.li>
            <motion.li variants={hoverItems} whileHover="links">
              AGREGADAS RECIENTEMENTE
            </motion.li>
            <motion.li variants={hoverItems} whileHover="links">
              POPULARES
            </motion.li>
            <motion.li variants={hoverItems} whileHover="links">
              MIS PELÍCULAS
            </motion.li>
            <motion.li variants={hoverItems} whileHover="links">
              MI LISTA
            </motion.li>
          </ul>
          <motion.button variants={hoverItems} whileHover="links" onClick={openModal} className="sideMenu_addMovie">
            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 0V14" stroke="white" />
              <path d="M14.5 7L0.5 7" stroke="white" />
            </svg>
            <p>AGREGAR PELÍCULA</p>
          </motion.button>
          <motion.button variants={hoverItems} whileHover="signOut">
            CERRAR SESIÓN
          </motion.button>
        </div>
      </motion.div>
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

const sideMenu = {
  initial: { opacity: 0, x: '100vw' },
  end: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    x: '100vw',
    transition: {
      duration: 0.5,
    },
  },
};

const hoverItems = {
  links: { textShadow: '2px 2px 1px rgba(100, 238, 188, 1', x: '10px' },
  signOut: {
    borderBottom: '2px solid #64eebc',
    x: '7px',
    scale: 1.1,
  },
  close: {
    rotate: [-180, 0],
    transition: {
      duration: 0.4,
    },
  },
  notification: {
    fill: '#ffffff',
    rotateZ: -5,
  },
};

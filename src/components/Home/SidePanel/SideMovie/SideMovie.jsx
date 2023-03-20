import { imageUrl } from '../../utils';
import { motion } from 'framer-motion';

export const SideMovie = ({ movie }) => {
  return (
    <motion.div variants={sideMovie} whileHover="hover" className="sideMovie_container">
      <img src={movie?.backdrop_path ? imageUrl + movie?.backdrop_path : movie.src} alt="Movie" className="sideMovie_image" />
      <div className="sideMovie_content">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="19.5" fill="#242424" fillOpacity="0.5" stroke="white" />
          <path fillRule="evenodd" clipRule="evenodd" d="M26.6484 20.2701L16 13V27L26.6484 20.2701Z" stroke="white" />
        </svg>
        <p>{movie?.title}</p>
      </div>
      <div className="gradient"></div>
      <div className="sideMovie_overlay">
        <div className="sideMovie_overlay-content">
          <div className="sideMovie_overlay-title">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="11.5" fill="#242424" fillOpacity="0.5" stroke="white" />
              <path fillRule="evenodd" clipRule="evenodd" d="M15.9891 12.162L9.6001 7.79993V16.1999L15.9891 12.162Z" stroke="white" />
            </svg>
            <p>{movie?.title}</p>
          </div>
          <div className="sideMovie_overlay-info">
            <div className="sideMovie_vote">
              <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.81064 0.557022C5.87212 0.376184 6.12788 0.376184 6.18936 0.557023L7.34407 3.95378C7.37132 4.03393 7.44608 4.08825 7.53073 4.08939L11.1181 4.13794C11.309 4.14052 11.3881 4.38377 11.2351 4.49812L8.36141 6.64597C8.2936 6.69666 8.26505 6.78454 8.29011 6.8654L9.3525 10.2922C9.40905 10.4746 9.20214 10.6249 9.04611 10.5148L6.11536 8.44545C6.0462 8.39662 5.9538 8.39662 5.88464 8.44545L2.95389 10.5148C2.79786 10.6249 2.59095 10.4746 2.6475 10.2922L3.70989 6.8654C3.73495 6.78454 3.7064 6.69666 3.63859 6.64597L0.764906 4.49812C0.611916 4.38377 0.690952 4.14052 0.881936 4.13794L4.46927 4.08939C4.55392 4.08825 4.62868 4.03393 4.65593 3.95378L5.81064 0.557022Z"
                  fill="#64EEBC"
                />
              </svg>
              <p>{movie?.vote_average ? movie?.vote_average : '-'}</p>
            </div>
            <p>{movie?.release_date ? movie?.release_date.substring(0, 4) : '-'}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const sideMovie = {
  hover: {
    scale: 1.1,
  },
};

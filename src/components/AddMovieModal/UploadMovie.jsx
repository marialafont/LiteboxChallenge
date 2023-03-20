import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion, AnimatePresence } from 'framer-motion';

export function UploadMovie({ setUploadedFile, uploadedFile }) {
  const [completed, setCompleted] = useState(false);
  const [invalidSize, setInvalidSize] = useState(false);

  const onDropAccepted = useCallback((acceptedFiles) => {
    setInvalidSize(false);
    acceptedFiles.map((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedFile({
          src: e.target.result,
        });
      };
      reader.readAsDataURL(file);
      return file;
    });
    setTimeout(function () {
      setCompleted(true);
    }, 1000);
  }, []);

  const onDropRejected = useCallback(() => {
    setInvalidSize(true);
  });

  const { getRootProps, getInputProps } = useDropzone({
    onDropAccepted,
    onDropRejected,
    noKeyboard: true,
    accept: {
      'image/*': ['.jpeg', '.png', '.jpg'],
    },
    maxSize: 10485760,
  });

  return (
    <div className="uploadMovie_container">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {!uploadedFile && (
          <div className="uploadMovie_inactive">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.9946 11.7082L8.1588 4.58472C7.27098 3.77767 5.83169 3.77767 4.94408 4.58472C4.05612 5.39167 4.05612 6.70015 4.94408 7.50732L11.7755 13.7177L12.1771 13.3522L5.34575 7.14207C4.67987 6.53675 4.67987 5.55532 5.34575 4.95C6.01167 4.34459 7.09114 4.34459 7.75695 4.95L15.593 12.0735C16.7027 13.0823 16.7027 14.7181 15.593 15.7268C14.4831 16.7357 12.6839 16.7357 11.5742 15.7268L2.7338 7.69017C1.18031 6.27778 1.18031 3.9879 2.7338 2.57551C4.28755 1.16327 6.80644 1.16327 8.36004 2.57551L15.1911 8.78587L15.593 8.42071L8.7614 2.21035C6.98561 0.596226 4.10671 0.596614 2.33128 2.21113C0.555884 3.82551 0.556311 6.44269 2.33213 8.05669L11.1726 16.092C12.5041 17.3027 14.6631 17.3027 15.9946 16.092C17.3263 14.8814 17.3263 12.9188 15.9946 11.7082Z"
                fill="white"
              />
              <path
                d="M15.9946 11.7082L8.1588 4.58472C7.27098 3.77767 5.83169 3.77767 4.94408 4.58472C4.05612 5.39167 4.05612 6.70015 4.94408 7.50732L11.7755 13.7177L12.1771 13.3522L5.34575 7.14207C4.67987 6.53675 4.67987 5.55532 5.34575 4.95C6.01167 4.34459 7.09114 4.34459 7.75695 4.95L15.593 12.0735C16.7027 13.0823 16.7027 14.7181 15.593 15.7268C14.4831 16.7357 12.6839 16.7357 11.5742 15.7268L2.7338 7.69017C1.18031 6.27778 1.18031 3.9879 2.7338 2.57551C4.28755 1.16327 6.80644 1.16327 8.36004 2.57551L15.1911 8.78587L15.593 8.42071L8.7614 2.21035C6.98561 0.596226 4.10671 0.596614 2.33128 2.21113C0.555884 3.82551 0.556311 6.44269 2.33213 8.05669L11.1726 16.092C12.5041 17.3027 14.6631 17.3027 15.9946 16.092C17.3263 14.8814 17.3263 12.9188 15.9946 11.7082"
                stroke="white"
              />
            </svg>
            <p />
          </div>
        )}

        {uploadedFile && (
          <div className="progress-container">
            <AnimatePresence mode="wait">
              {!completed && (
                <motion.p variants={uploading} initial="initial" animate="end" exit="exit" key="uploading" className="progress-bar-label">
                  CARGANDO
                </motion.p>
              )}
              {completed && (
                <motion.p variants={uploaded} initial="initial" animate="end" key="uploaded" className="progress-bar-label">
                  100% CARGADO
                </motion.p>
              )}
            </AnimatePresence>
            <div class="progress-bar" />
            {completed && (
              <motion.p variants={uploading} initial="initial" animate="end" className="progress-message">
                ¡LISTO!
              </motion.p>
            )}
          </div>
        )}
      </div>
      {invalidSize && (
        <motion.p variants={uploading} initial="initial" animate="end" className="invalid-size">
          Ingrese un archivo de hasta 10MB
        </motion.p>
      )}
    </div>
  );
}

const uploading = {
  initial: { opacity: 0 },
  end: {
    opacity: 1,
  },
  exit: { opacity: 0 },
};

const uploaded = {
  initial: { opacity: 0, x: '10px' },
  end: {
    opacity: 1,
    x: 0,
  },
};

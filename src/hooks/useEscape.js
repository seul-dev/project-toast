import React from 'react';

const useEscape = (key, callback) => {
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === key) {
        callback();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [key, callback]);
};

export default useEscape;

import { useEffect, useState } from 'react';

export const useScrollToTop = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  useEffect(() => {
    setIsScrolling(true);
    return () => setIsScrolling(false);
  }, []);

  const scrollToTop = () => {
    if (isScrolling) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };
  return scrollToTop;
};

import { useEffect } from 'react';

/**
 * Custom hook to trigger scroll animations using IntersectionObserver.
 * Elements with class 'scroll-reveal' will receive 'is-visible' when entering the viewport.
 */
export function useScrollReveal() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -80px 0px',
      threshold: 0.15
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Once animated, unobserve so it stays static
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const elements = document.querySelectorAll('.scroll-reveal');

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

import { useEffect } from 'react';

/**
 * Custom hook to trigger scroll animations using IntersectionObserver.
 * Sets data-revealed="true" so React re-renders never revert visibility.
 */
export function useScrollReveal() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute('data-revealed', 'true');
          entry.target.classList.add('is-revealed');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const elements = document.querySelectorAll('.scroll-reveal');

    elements.forEach((el) => observer.observe(el));

    // Ensure all already revealed elements stay visible
    const mutationObserver = new MutationObserver(() => {
      const allRevealed = document.querySelectorAll('[data-revealed="true"]');
      allRevealed.forEach(el => el.classList.add('is-revealed'));
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true, attributes: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}

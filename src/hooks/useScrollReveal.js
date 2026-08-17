import { useEffect } from 'react';

/**
 * Scroll reveal hook that ensures all elements remain visible.
 */
export function useScrollReveal() {
  useEffect(() => {
    // Ensure all elements have full visibility
    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.classList.add('is-visible');
    });
  }, []);
}

import { useEffect } from 'react';

/**
 * Hook to trigger scroll animations on elements with the '.reveal' class.
 * Re-runs when dependencies change (e.g., when dynamic project data is loaded).
 */
export default function useScrollAnimation(dependencies = []) {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Apply delay style inline for staggered effects
            const delay = entry.target.getAttribute('data-delay') || '0s';
            entry.target.style.setProperty('--delay', delay);
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => {
      reveals.forEach((el) => observer.unobserve(el));
    };
  }, dependencies);
}

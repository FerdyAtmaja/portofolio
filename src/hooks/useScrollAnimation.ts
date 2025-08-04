import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for applying animations when an element is scrolled into view.
 * @param options - IntersectionObserver options.
 * @returns A tuple containing a ref to attach to the element and a boolean indicating visibility.
 */
export const useScrollAnimation = (options?: IntersectionObserverInit) => {
  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    let observer: IntersectionObserver;
    
    try {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        },
        {
          threshold: 0.1,
          ...options,
        }
      );

      const currentElement = elementRef.current;
      if (currentElement) observer.observe(currentElement);

      return () => {
        if (currentElement && observer) {
          try {
            observer.unobserve(currentElement);
          } catch (error) {
            console.warn('Failed to unobserve element:', error);
          }
        }
      };
    } catch (error) {
      console.warn('IntersectionObserver failed:', error);
      setIsVisible(true);
    }
  }, [options]);

  return [elementRef, isVisible] as const;
};
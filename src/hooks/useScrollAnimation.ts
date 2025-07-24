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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        ...options,
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) observer.observe(currentElement);

    return () => currentElement && observer.unobserve(currentElement);
  }, [options]);

  return [elementRef, isVisible] as const;
};
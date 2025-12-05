import { useEffect, useState } from 'react'

import {
  useIntersectionObserver,
  type UseIntersectionObserverOptions,
  type UseIntersectionObserverResult,
} from './use-intersection-observer'

export interface UseSectionRevealOptions extends UseIntersectionObserverOptions {
  /**
   * Optional delay before marking the section as revealed (in milliseconds)
   */
  revealDelay?: number;
}

export interface UseSectionRevealResult extends UseIntersectionObserverResult {
  /**
   * Becomes true once the section has intersected (and remains true if freezeOnceVisible is enabled)
   */
  hasRevealed: boolean;
}

export function useSectionReveal(
  options: UseSectionRevealOptions = {}
): UseSectionRevealResult {
  const isClient = typeof window !== 'undefined';
  const isCompactViewport = isClient ? window.matchMedia('(max-width: 768px)').matches : false;

  const {
    revealDelay,
    freezeOnceVisible,
    threshold = isCompactViewport ? 0.2 : 0.35,
    rootMargin = isCompactViewport ? '-5% 0px -10% 0px' : '-10% 0px -20% 0px',
    ...observerOptions
  } = options;
  const shouldFreeze = freezeOnceVisible ?? true;

  const observer = useIntersectionObserver({
    ...observerOptions,
    threshold,
    rootMargin,
    freezeOnceVisible: shouldFreeze,
  });

  const [hasRevealed, setHasRevealed] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      setHasRevealed(true);
      return;
    }

    let timer: ReturnType<typeof window.setTimeout> | undefined;

    if (observer.isIntersecting) {
      if (revealDelay && revealDelay > 0) {
        timer = window.setTimeout(() => setHasRevealed(true), revealDelay);
      } else {
        setHasRevealed(true);
      }
    } else if (!shouldFreeze) {
      setHasRevealed(false);
    }

    return () => {
      if (timer !== undefined) {
        window.clearTimeout(timer);
      }
    };
  }, [observer.isIntersecting, revealDelay, shouldFreeze]);

  return {
    ...observer,
    hasRevealed,
  };
}

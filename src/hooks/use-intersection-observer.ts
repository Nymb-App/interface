import { useEffect, useMemo, useRef, useState } from "react";

function createThrottledCallback<T extends (...args: unknown[]) => void>(
  callback: T,
  delay: number
) {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  let lastArgs: Parameters<T> | null = null;
  const run = () => {
    if (lastArgs) {
      callback(...lastArgs);
      lastArgs = null;
    }
    timeoutId = null;
  };

  return (...args: Parameters<T>) => {
    lastArgs = args;
    if (timeoutId === null) {
      run();
      timeoutId = setTimeout(() => {
        run();
      }, delay);
    }
  };
}

export interface UseIntersectionObserverOptions {
  threshold?: ResponsiveValue<number | number[]>;
  rootMargin?: ResponsiveValue<string>;
  root?: Element | null;
  freezeOnceVisible?: boolean; // Останавливает наблюдение после первого появления
  enabled?: boolean; // Позволяет отключить observer
}

export interface UseIntersectionObserverResult {
  isIntersecting: boolean;
  entry: IntersectionObserverEntry | null;
  ref: (node: Element | null) => void;
}

type BreakpointKey = "mobile" | "tablet" | "desktop";

interface ResponsiveConfig<T> {
  base: T;
  mobile?: T;
  tablet?: T;
  desktop?: T;
  breakpoints?: Partial<Record<BreakpointKey, number>>;
}

type ResponsiveValue<T> = T | ResponsiveConfig<T>;

const DEFAULT_BREAKPOINTS: Record<BreakpointKey, number> = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
};

function getViewportSize() {
  if (typeof window === "undefined") {
    return { width: 0, height: 0 };
  }

  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

function isResponsiveConfig<T>(
  value: ResponsiveValue<T>
): value is ResponsiveConfig<T> {
  return (
    value !== null &&
    typeof value === "object" &&
    !Array.isArray(value) &&
    ("base" in value ||
      "mobile" in value ||
      "tablet" in value ||
      "desktop" in value)
  );
}

function resolveResponsiveValue<T>(
  value: ResponsiveValue<T>,
  width: number
): T {
  if (!isResponsiveConfig(value)) {
    return value as T;
  }

  const { base, mobile, tablet, desktop, breakpoints } = value;
  const effectiveBreakpoints = {
    ...DEFAULT_BREAKPOINTS,
    ...breakpoints,
  };

  if (width <= effectiveBreakpoints.mobile) {
    return mobile ?? base;
  }

  if (width <= effectiveBreakpoints.tablet) {
    return tablet ?? mobile ?? base;
  }

  if (width <= effectiveBreakpoints.desktop) {
    return desktop ?? tablet ?? base;
  }

  return desktop ?? base;
}

/**
 * Универсальный хук для IntersectionObserver
 *
 * @example
 * // Базовое использование
 * const { isIntersecting, ref } = useIntersectionObserver()
 * return <div ref={ref}>{isIntersecting ? 'Видимо' : 'Скрыто'}</div>
 *
 * @example
 * // Lazy loading изображения
 * const { isIntersecting, ref } = useIntersectionObserver({
 *   threshold: 0.1,
 *   rootMargin: '50px',
 *   freezeOnceVisible: true
 * })
 * return <img ref={ref} src={isIntersecting ? actualSrc : placeholder} />
 */
export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
): UseIntersectionObserverResult {
  const {
    threshold = 0,
    rootMargin = "0px",
    root = null,
    freezeOnceVisible = false,
    enabled = true,
  } = options;

  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<Element | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const frozenRef = useRef(false);
  const [viewport, setViewport] = useState(getViewportSize);
  const rafIdRef = useRef<number | null>(null);

  const hasResponsiveThreshold = isResponsiveConfig(threshold);
  const hasResponsiveRootMargin = isResponsiveConfig(rootMargin);
  const shouldTrackViewport = hasResponsiveThreshold || hasResponsiveRootMargin;

  useEffect(() => {
    if (!shouldTrackViewport || typeof window === "undefined") {
      return;
    }

    const updateViewport = () => {
      setViewport(getViewportSize());
    };

    const throttledUpdate = createThrottledCallback(updateViewport, 200);

    throttledUpdate();

    window.addEventListener("resize", throttledUpdate, { passive: true });
    window.addEventListener("orientationchange", throttledUpdate, {
      passive: true,
    });

    return () => {
      window.removeEventListener("resize", throttledUpdate);
      window.removeEventListener("orientationchange", throttledUpdate);
    };
  }, [shouldTrackViewport]);

  const resolvedThreshold = useMemo(
    () => resolveResponsiveValue(threshold, viewport.width),
    [threshold, viewport.width]
  );

  const resolvedRootMargin = useMemo(
    () => resolveResponsiveValue(rootMargin, viewport.width),
    [rootMargin, viewport.width]
  );

  // Callback для установки ref
  const setRef = (node: Element | null) => {
    elementRef.current = node;
  };

  useEffect(() => {
    const element = elementRef.current;

    // Если observer отключен или элемента нет
    if (!enabled || !element) {
      return;
    }

    // Если уже "заморожено" после первого появления
    if (freezeOnceVisible && frozenRef.current) {
      return;
    }

    // Создаем observer
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;

        if (rafIdRef.current !== null) {
          cancelAnimationFrame(rafIdRef.current);
        }

        rafIdRef.current = requestAnimationFrame(() => {
          setEntry(entry);
          setIsIntersecting(isElementIntersecting);
          rafIdRef.current = null;
        });

        // Если нужно "заморозить" после первого появления
        if (freezeOnceVisible && isElementIntersecting) {
          frozenRef.current = true;
          observerRef.current?.disconnect();
        }
      },
      {
        threshold: resolvedThreshold,
        rootMargin: resolvedRootMargin,
        root,
      }
    );

    observerRef.current.observe(element);

    // Cleanup
    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      observerRef.current?.disconnect();
    };
  }, [enabled, resolvedThreshold, resolvedRootMargin, root, freezeOnceVisible]);

  return {
    isIntersecting,
    entry,
    ref: setRef,
  };
}

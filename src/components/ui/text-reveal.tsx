import { cn } from "@/lib/utils";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import { useEffect, useRef, useState, type ReactNode } from "react";

// Функция для разбиения текста на строки на основе offsetTop
function splitTextIntoLines(element: HTMLElement): HTMLElement[][] {
  const words: HTMLElement[] = [];

  // Сохраняем HTML разметку (например, highlighted spans)
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = element.innerHTML;

  // Копируем все вычисленные стили
  const computedStyle = window.getComputedStyle(element);
  tempDiv.style.cssText = computedStyle.cssText;

  // ВАЖНО: устанавливаем точную ширину оригинального элемента
  tempDiv.style.width = `${element.offsetWidth}px`;
  tempDiv.style.position = "absolute";
  tempDiv.style.visibility = "hidden";
  tempDiv.style.whiteSpace = "pre-wrap";
  tempDiv.style.left = "-9999px";
  tempDiv.style.top = "0";
  tempDiv.style.color = "white";

  document.body.appendChild(tempDiv);

  // Разбиваем на слова, сохраняя HTML структуру
  const walker = document.createTreeWalker(tempDiv, NodeFilter.SHOW_TEXT, null);

  const textNodes: Text[] = [];
  let node;
  while ((node = walker.nextNode())) {
    textNodes.push(node as Text);
  }

  textNodes.forEach((textNode) => {
    const parentElement = textNode.parentElement;
    if (!parentElement) return;

    const wordsArray = (textNode.textContent || "").split(/(\s+)/);
    const fragment = document.createDocumentFragment();

    wordsArray.forEach((word) => {
      if (word.trim()) {
        const span = document.createElement("span");
        span.textContent = word;
        span.style.display = "inline-block";

        // Копируем все inline стили от родителя
        const parentStyles = window.getComputedStyle(parentElement);
        if (parentStyles.color && parentStyles.color !== "rgb(255, 255, 255)") {
          span.style.color = parentStyles.color;
        }

        // Копируем классы
        if (parentElement.className) {
          span.className = parentElement.className;
        }

        fragment.appendChild(span);
        words.push(span);
      } else if (word) {
        // Пробелы
        const space = document.createTextNode(word);
        fragment.appendChild(space);
      }
    });

    parentElement.replaceChild(fragment, textNode);
  });

  // Группируем слова по строкам на основе offsetTop
  const lines: HTMLElement[][] = [];
  let currentLine: HTMLElement[] = [];
  let lastTop = -1;

  words.forEach((word) => {
    const top = word.offsetTop;
    // console.log(`Word: "${word.textContent}", Top: ${top}`);

    // Используем допуск в 5px для определения новой строки
    if (
      lastTop !== -1 &&
      Math.abs(top - lastTop) > 5 &&
      currentLine.length > 0
    ) {
      lines.push(currentLine);
      currentLine = [];
    }
    currentLine.push(word);
    lastTop = top;
  });

  if (currentLine.length > 0) {
    lines.push(currentLine);
  }

  console.log(`Найдено строк: ${lines.length}`);
  lines.forEach((line, i) => {
    console.log(`Строка ${i + 1}:`, line.map((w) => w.textContent).join(" "));
  });

  document.body.removeChild(tempDiv);
  return lines;
}

// Функция для оборачивания строк в span'ы для анимации
function wrapLinesInSpans(element: HTMLElement): HTMLElement[] {
  const lines = splitTextIntoLines(element);
  const lineWrappers: HTMLElement[] = [];

  console.log(`Оборачиваем ${lines.length} строк`);

  // Очищаем элемент
  element.innerHTML = "";

  lines.forEach((lineWords) => {
    // Внешний wrapper с overflow: hidden
    const outerWrapper = document.createElement("span");
    outerWrapper.style.display = "block";
    outerWrapper.style.overflow = "hidden";
    outerWrapper.className = "line-wrapper";

    // Внутренний wrapper для анимации
    const innerWrapper = document.createElement("span");
    innerWrapper.style.display = "block";
    innerWrapper.className = "line-inner";

    // Собираем текст строки из слов, воссоздавая оригинальную разметку
    lineWords.forEach((word, wordIndex) => {
      // Клонируем узел со всеми стилями и классами
      const clonedWord = word.cloneNode(true) as HTMLElement;
      // Меняем display обратно на inline для естественного потока
      clonedWord.style.display = "inline";

      innerWrapper.appendChild(clonedWord);

      // Добавляем пробел после каждого слова, кроме последнего
      if (wordIndex < lineWords.length - 1) {
        innerWrapper.appendChild(document.createTextNode(" "));
      }
    });

    outerWrapper.appendChild(innerWrapper);
    element.appendChild(outerWrapper);
    lineWrappers.push(innerWrapper);
  });

  return lineWrappers;
}

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  threshold?: number;
}

export const Reveal = ({
  className,
  children,
  duration = 0.8,
  delay = 0.3,
  threshold = 0.2,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element); // анимация 1 раз
        }
      },
      {
        threshold, // ← контролируешь процент видимости
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <>
      <style>
        {`
          @keyframes reveal {
              0% {
                  transform: translate(0, 100%);
              }
              100% {
                  transform: translate(0, 0);
              }
          }
        `}
      </style>
      <div className="w-full overflow-hidden">
        <div
          ref={ref}
          className={cn("inline-block fill-mode-[backwards]", className)}
          style={{
            opacity: visible ? 100 : 0,
            animation: visible
              ? `reveal ${duration}s cubic-bezier(0.77, 0, 0.175, 1) ${delay}s backwards`
              : "none",
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
};

gsap.registerPlugin(CustomEase);

export const TextReveal = ({
  children,
  className,
  duration = 1,
  delay = 0,
  threshold = 0.2,
}: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [readyToAnimate, setReadyToAnimate] = useState(threshold === 0);
  const [isSplit, setIsSplit] = useState(false);

  useEffect(() => {
    if (threshold === 0) return; // запуск сразу

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.intersectionRatio >= threshold) {
          setReadyToAnimate(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  useEffect(() => {
    if (!readyToAnimate) return;
    if (!ref.current) return;

    // Находим целевой элемент (параграф)
    const target =
      (ref.current.firstElementChild as HTMLElement | null) || ref.current;

    // Используем нашу функцию для разбиения на строки
    const lines = wrapLinesInSpans(target);

    console.log(`Анимируем ${lines.length} строк`);
    console.log("Элементы для анимации:", lines);

    // Показываем контент после разбиения
    setIsSplit(true);

    // Анимируем строки
    const tl = gsap.timeline({
      delay,
      defaults: {
        ease: CustomEase.create("custom", "M0,0 C0,1 0.504,1 1,1 "),
      },
    });

    tl.from(lines, {
      y: 80,
      opacity: 0,
      duration: duration,
      stagger: 0.1,
    });

    return () => {
      tl.kill();
    };
  }, [readyToAnimate, delay, duration]);

  return (
    <div
      ref={ref}
      className={cn("w-full", className)}
      style={{ visibility: isSplit ? "visible" : "hidden" }}
    >
      {children}
    </div>
  );
};

export const TextRevealP = ({
  children,
  className = "",
  duration = 1,
  delay = 0,
  threshold = 0,
}: Props) => {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const [ready, setReady] = useState(threshold === 0);

  // Intersection Observer
  useEffect(() => {
    if (threshold === 0) {
      setReady(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
          setReady(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  // GSAP mask animation
  useEffect(() => {
    if (!ready || !ref.current) return;

    const el = ref.current;

    // IMPORTANT: must have overflow:hidden so mask works properly
    el.style.overflow = "hidden";

    // Start fully hidden (mask covers everything)
    gsap.set(el, {
      maskImage: "linear-gradient(to bottom, black 0%, black 0%)",
      maskSize: "100% 200%",
      maskPosition: "0 100%",
    });

    // Animate mask upwards => reveal text line-by-line effect
    gsap.to(el, {
      maskPosition: "0 0%",
      duration,
      delay,
      ease: "power3.out",
    });
  }, [ready, duration, delay]);

  return (
    <p ref={ref} className={className} style={{ display: "block" }}>
      {children}
    </p>
  );
};

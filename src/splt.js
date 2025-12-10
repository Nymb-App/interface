document.fonts.ready.then(() => {
  document.body.classList.remove("gsap-fix");
  gsap.registerPlugin(SplitText, CustomEase);

  // Функция для анимации текста с SplitText
  const animateText = (selector, options = {}) => {
    const element = document.querySelector(selector);
    if (!element) return null;

    const {
      delay = 0,
      duration = 1,
      yOffset = 100,
      stagger = 0.15,
      revertOnComplete = false,
    } = options;

    const split = SplitText.create(selector, {
      type: "lines",
      linesClass: "line",
      mask: true,
    });

    const tl = gsap.timeline({
      defaults: {
        ease: CustomEase.create("custom", "M0,0 C0,1 0.504,1 1,1"),
      },
      onComplete: () => {
        if (revertOnComplete) {
          split.revert();
        }
      },
    });

    tl.from(
      split.lines,
      {
        duration,
        y: yOffset,
        stagger,
      },
      delay
    );

    return { split, timeline: tl };
  };

  // Intersection Observer для триггера анимации при скролле
  const animateOnScroll = (selector, options = {}) => {
    const element = document.querySelector(selector);
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateText(selector, options);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
  };

  // Анимация для mission description
  animateOnScroll(".mission__description", {
    delay: 0.3,
    duration: 1,
    yOffset: 80,
    stagger: 0.1,
  });
});

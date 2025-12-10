document.fonts.ready.then(() => {
    document.body.classList.remove('gsap-fix');
    gsap.registerPlugin(SplitText, CustomEase)
    let heroTitle = SplitText.create(".hero__title", {
        type: "lines",
        aria: "auto",
        linesClass: "line++",
        mask: "lines",
        autoSplit: true,
    });
    let heroDescription = SplitText.create(".hero__description", {
        type: "lines",
        aria: "auto",
        linesClass: "line",
        mask: "lines",
        autoSplit: true,
    });

    let tl = gsap.timeline({
        defaults: {
            ease: CustomEase.create("custom", "M0,0 C0,1 0.504,1 1,1 "),
        },
        onComplete: () => {
            heroTitle.revert();
            heroDescription.revert();
        },
    });

    tl.from(heroTitle.lines, {
        duration: 1,
        y: 100,
        stagger: 0.15,
    });
    tl.from(heroDescription.lines, {
        duration: 1,
        y: 100,
        stagger: 0.15,
    }, "0.3");
});
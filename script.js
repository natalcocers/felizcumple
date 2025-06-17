gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollSmoother.create({
  smooth: 1,
  effects: true,
  normalizeScroll: true
});

const splitLetters = SplitText.create(
  document.querySelector(".opacity-reveal")
);
gsap.set(splitLetters.chars, { opacity: 0, y: "50%", filter: "blur(30px)" });
gsap
  .timeline()
  .to(
    splitLetters.chars,
    {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1.65,
      ease: "power4.out",
      stagger: 0.04
    },
    0
  )
  .to(
    document.querySelector(".hero-heading"),
    {
      opacity: 1
    },
    0
  );

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".bg-color-black",
      start: "start 40%",
      end: "start 40%",
      scrub: 1
    }
  })
  .to(document.querySelector("body"), {
    ["--bg-color"]: "#000",
    ["--text-color"]: "#fff"
  });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".bg-color-white",
      start: "start 40%",
      end: "start 40%",
      scrub: 1
    }
  })
  .to(document.querySelector("body"), {
    ["--bg-color"]: "#fff",
    ["--text-color"]: "#000"
  });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".bg-color-yellow",
      start: "start 40%",
      end: "start 40%",
      scrub: 1
    }
  })
  .to(document.querySelector("body"), {
    ["--bg-color"]: "#fae4ba",
    ["--text-color"]: "#000"
  });

setTimeout(() => {
  const stickySections = document.querySelectorAll(".sticky-section");

  stickySections.forEach((section) => {
    const stickyPin = section.querySelector(".sticky-pin");
    const stickyContent = section.querySelector(".sticky-content");

    const pinEnd = stickyContent.offsetHeight - stickyPin.offsetHeight;

    ScrollTrigger.create({
      trigger: stickyPin, // trigger element
      start: "top top", // when the top of the trigger hits the top of the viewport
      end: `+=${pinEnd}`, // end after scrolling pinEnd height in px
      pin: true // stick the trigger element
    });
  });
}, 100);
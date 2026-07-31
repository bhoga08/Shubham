import gsap from "gsap";

export const playIntro = (finishIntro) => {
  const tl = gsap.timeline({
    defaults: {
      ease: "power4.inOut",
    },

    onComplete: finishIntro,
  });

  tl.from(".intro-logo", {
    y: 80,
    opacity: 0,
    duration: 1,
  })

    .from(
      ".intro-subtitle",
      {
        y: 30,
        opacity: 0,
        duration: 0.7,
      },
      "-=.6"
    )

    .from(
      ".intro-line-fill",
      {
        width: 0,
        duration: 1.4,
      },
      "-=.3"
    )

    .to({}, { duration: .4 })

    .to(".intro-top", {
      y: "-100%",
      duration: 1.2,
    })

    .to(
      ".intro-bottom",
      {
        y: "100%",
        duration: 1.2,
      },
      "<"
    )

    .to(".intro-wrapper", {
      opacity: 0,
      duration: .3,
      pointerEvents: "none",
    });
};
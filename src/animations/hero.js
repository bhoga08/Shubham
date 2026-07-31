import gsap from "gsap";

export const heroReveal = () => {

    const tl = gsap.timeline();

    tl.from(".hero-title",{

        y:100,

        opacity:0,

        duration:1,

        ease:"power4.out"

    })

    .from(".hero-text",{

        y:60,

        opacity:0,

        duration:.7

    },"-=.5")

    .from(".hero-buttons",{

        y:40,

        opacity:0,

        duration:.6

    },"-=.4")

    .from(".hero-image",{

        x:120,

        opacity:0,

        duration:1

    },"-=.8");

}
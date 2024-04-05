// IMPORTS
import "./style.css";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

import SplitType from "split-type";


// const aboutLink = SplitType.create(".nav-link");
// const aboutLinkChars = aboutLink.chars;

// gsap.fromTo(
//     aboutLinkChars,
//     {
//         y: -50,
//     },
//     {
//         y: 0,
//         opacity: 1,
//         duration: 2,
//         ease: "power4.out",
//     }
// );

// Intro Section Animation
let introTimeline = gsap.timeline();

const projectLogo = document.querySelector(".project-logo");

introTimeline.fromTo(
    projectLogo,
    {
        opacity: 0,
    },
    {
        opacity: 1,
        duration: 0.8,
        ease: "power1.inOut",
    }
);

const promoviendoTitle = document.querySelector(".promoviendo-title");

introTimeline.fromTo(
    promoviendoTitle,
    {
        text: "",
        opacity: 0,
        width: "0rem",
    },
    {
        text: "Promoviendo",
        opacity: 1,
        duration: 0.4,
        width: "66rem",
        ease: "power1.inOut",
    },
    ">",
);

















const scrollReminder = document.querySelector(".scroll-reminder", {
    types: "chars",
});

gsap.to(scrollReminder, {
    opacity: 0,
    scrollTrigger: {
        trigger: scrollReminder,
        pin: true,
        start: "top bottom-=100",
        end: "+=100",
        scrub: true,
        // markers: true,
    },
});

// Lenis scrolling
const lenis = new Lenis();

lenis.on("scroll", (e) => {
    console.log(e);
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

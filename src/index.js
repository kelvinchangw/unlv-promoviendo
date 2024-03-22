// IMPORTS
import "./style.css";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

import SplitType from "split-type";

const fundingSectionText = SplitType.create(".funding-section-text");
const chars = fundingSectionText.chars;

gsap.fromTo(
    chars,
    { y: -100, opacity: 0 },
    {
        y: 0,
        opacity: 1,
        // ease: "power4.out",
        scrollTrigger: {
            trigger: ".funding-section-text", // Use the class name directly if SplitType doesn't provide a reference to the DOM element
            start: "top bottom-=400",
            end: "+=600", // Adjust as needed for when the animation should end
            scrub: true, // Optional: smooths the animation in relation to the scrolling
            markers: true, // Uncomment for debugging the start and end points
        },
    }
);

const nameBrand = SplitType.create(".project-title");
const nameBrandChars = nameBrand.chars;

gsap.fromTo(
    nameBrandChars,
    {
        y: -50,
    },
    {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power4.out",
    }
);

const aboutLink = SplitType.create(".nav-link");
const aboutLinkChars = aboutLink.chars;

gsap.fromTo(
    aboutLinkChars,
    {
        y: -50,
    },
    {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power4.out",
    }
);

const introSectionText = document.querySelector(
    ".intro-section-information-text"
);

// gsap.to(introSectionText, {
//     duration: 3,
//     text: "Promoviendo La Esperanza Equitativa/Advancing Equitable Teaching Practices to Reduce Systemic Inequities in Computer Science Courses for Latinx Students",
//     ease: "none",
// });

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

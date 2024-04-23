// IMPORTS
import "./style.css";

import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

import SplitType from "split-type";

// Lenis scrolling initialization
const lenis = new Lenis();
lenis.on("scroll", (e) => {
    console.log(e);
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// ENABLE AFTER COMPLETION OF DEVELOPING
// window.addEventListener("load", () => {
//     // Scroll to the top with no delay
//     lenis.scrollTo(0, {
//         duration: 0,
//         onComplete: () => {
//             // Prevent scrolling until initial animations complete
//             lenis.stop();
//         },
//     });
// });

// Intro Section Animation
// Initial GSAP animation setup
let introTimeline = gsap.timeline();

const projectLogo = document.querySelector(".project-logo");
const promoviendoTitle = document.querySelector(".promoviendo-title");
const headerContent = document.querySelector(".header-content");
const body = document.body;

introTimeline
    .fromTo(
        projectLogo,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "power1.inOut" }
    )
    .fromTo(
        promoviendoTitle,
        { text: "", opacity: 0, width: "0rem" },
        {
            text: "Promoviendo",
            opacity: 1,
            duration: 0.4,
            width: "60rem",
            ease: "power1.inOut",
        },
        ">"
    )
    .fromTo(headerContent, { opacity: 0 }, { opacity: 1, duration: 0.4 }, ">")
    .fromTo(
        body,
        { overflow: "hidden" },
        {
            overflow: "auto",
            onComplete: () => {
                lenis.start(); // Enable scrolling with Lenis after animations
            },
        },
        ">-0.4" // This will start changing 0.4 seconds before the last animation completes
    );

// Use Lenis for anchor links to maintain consistency
function handleNavClick(e) {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
        const offsetTop = targetSection.offsetTop; // Get the top position of the target section
        const padding = 100; // Flat amount of padding on top in pixels
        lenis.scrollTo(offsetTop - padding, 1000); // Scroll to the section with padding on top
    }
}

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
    link.addEventListener("click", handleNavClick);
});

// Header scrolling animation
const headerSection = document.querySelector("header");
const introSection = document.querySelector(".intro-section");

gsap.to(headerSection, {
    scrollTrigger: {
        trigger: introSection,
        start: "top top",
        end: "+=100",
        scrub: true,
    },
    padding: "1rem",
    backgroundColor: "#1C1C1C",
    backgroundImage:
        "radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px",
    backgroundSize: "4px 4px",
});

const scrollReminder = document.querySelector(".scroll-reminder", {
    types: "chars",
});

// gsap.to(scrollReminder, {
//     opacity: 0,
//     scrollTrigger: {
//         trigger: scrollReminder,
//         pin: true,
//         start: "top bottom-=100",
//         end: "+=100",
//         scrub: true,
//         // markers: true,
//     },
// });

// IMPORTS
import "./style.css";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

// GSAP PLUGIN REGISTRATION
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// LENIS SCROLLING SETUP
const lenis = new Lenis();
lenis.on("scroll", (e) => {
    console.log(e);
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// WINDOW LOAD EVENT
window.addEventListener("load", () => {
    // Scroll to the top at the beginning
    lenis.scrollTo(0, {
        duration: 0.001,
        onComplete: () => {
            // Prevent scrolling until initial animations are complete
            lenis.stop();
        },
    });
});

// ELEMENT SELECTION
const projectLogo = document.querySelector(".project-logo");
const promoviendoTitle = document.querySelector(".promoviendo-title");
const headerContent = document.querySelector(".header-content");
const body = document.body;
const aboutSection = document.querySelector(".about-section");

// GSAP TIMELINE FOR INTRO ANIMATION
let introTimeline = gsap.timeline();

introTimeline
    .fromTo(projectLogo, { opacity: 0 }, { opacity: 1, duration: 0.8, ease: "power1.inOut" })
    .fromTo(promoviendoTitle, { text: "", opacity: 0, width: "0rem" }, {
        text: "Promoviendo",
        opacity: 1,
        duration: 0.4,
        width: "60rem",
        ease: "power1.inOut",
    }, ">")
    .fromTo(headerContent, { opacity: 0 }, { opacity: 1, duration: 0.4 }, ">")
    .fromTo(body, { overflow: "hidden" }, {
        overflow: "auto",
        onComplete: () => {
            lenis.start();
        },
    }, ">-0.4")
    .fromTo(aboutSection, { opacity: 0 }, { opacity: 1 }, ">-0.2");

// NAVIGATION LINKS INTERACTION
function handleNavClick(e) {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
        const offsetTop = targetSection.offsetTop;
        const padding = 100;
        lenis.scrollTo(offsetTop - padding, 1000);
    }
}

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
    link.addEventListener("click", handleNavClick);
});

// HEADER SCROLLING EFFECT
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
    backgroundColor: "#0a0a0a",
    backgroundImage: "radial-gradient(rgba(204, 204, 204, 0.15) 1px, transparent 1px)",
    backgroundSize: "4px 4px",
    boxShadow: "0 0 16px 0px #EFEFEF",
});

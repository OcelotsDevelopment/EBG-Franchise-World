import { gsap } from 'gsap';

gsap.to(".rentsupto", {
    // y: (index) => index === 0 ? -10 : 10,
    scale: 1.5,
    yoyo: true,
    duration: 1,
    delay: 0.2,
    ease: "none",
    repeat: -1
  })
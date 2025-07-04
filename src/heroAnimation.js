import { gsap } from 'gsap';

// Your image paths
const images = [
  './public/assets/hero1.jpg',
  './public/assets/hero2.jpg',
  './public/assets/hero3.png',
];

let currentImageIndex = 0;
let backgroundAnimation;

// Method 1: Simple Fade Animation (Recommended)
function startBackgroundAnimation() {
  const heroSection = document.querySelector('.hero-bg');
  
  backgroundAnimation = gsap.to({}, {
    duration: 2,
    repeat: -1,
    onRepeat: function() {
      const nextIndex = (currentImageIndex + 1) % images.length;
      
      // Create a smooth crossfade effect
      gsap.to(heroSection, {
        duration: 1.5,
        ease: 'power2.inOut',
        onStart: function() {
          // Change background image
          heroSection.style.backgroundImage = `url(${images[nextIndex]})`;
        }
      });
      
      currentImageIndex = nextIndex;
    },
    delay: 4 // Change every 4 seconds
  });
}

startBackgroundAnimation();
import { gsap } from 'gsap';

// const images = [
//   './public/assets/hero1.webp',
//   './public/assets/hero4.jpg',
// ];

const hedr = [
  "Unleash New Business <br>Possibilities",
  "Join India’s Premier<br> Franchise & Business Expo"
];

let currentImageIndex = 0;

function startImageCrossfade() {
  const img1 = document.getElementById('heroImg1');
  const img2 = document.getElementById('heroImg2');
  const heroText = document.getElementById('heroText');

  setInterval(() => {
    console.log("is ansaidm");
    
    // Toggle index
    currentImageIndex = (currentImageIndex + 1) % 2;

    if (currentImageIndex === 1) {
      // Fade out img1, fade in img2
      gsap.to(img1, { opacity: 0, duration: 1.2, ease: "power2.inOut" });
      gsap.to(img2, { opacity: 1, duration: 1.2, ease: "power2.inOut" });
    } else {
      // Fade in img1, fade out img2
      gsap.to(img1, { opacity: 1, duration: 1.2, ease: "power2.inOut" });
      gsap.to(img2, { opacity: 0, duration: 1.2, ease: "power2.inOut" });
    }

    // Update hero text
    if (heroText) heroText.innerHTML = hedr[currentImageIndex];
  }, 4000); // Change every 4 seconds
}

startImageCrossfade();
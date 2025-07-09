import { gsap } from "gsap";

const hedr = [
  "Unleash New Business <br>Possibilities",
  "India’s top franchise show<br>Explore franchise growth",
  "Top franchise event<br>Boost your  growth"
];

let currentImageIndex = 1;

function startImageCrossfade() {
  const img1 = document.getElementById("heroImg1");
  const img2 = document.getElementById("heroImg2");
  const img3 = document.getElementById("heroImg3");
  const heroText = document.getElementById("heroText");

  setInterval(() => {
    if (currentImageIndex === 1) {
      // Show img1, hide others
      gsap.to(img1, { opacity: 0, duration: 1.2, ease: "power2.inOut" });
      gsap.to(img2, { opacity: 0.5, duration: 1.2, ease: "power2.inOut" });
      gsap.to(img3, { opacity: 0, duration: 1.2, ease: "power2.inOut" });
    } else if (currentImageIndex === 2) {
      // Show img2, hide others
      gsap.to(img1, { opacity: 0, duration: 1.2, ease: "power2.inOut" });
      gsap.to(img2, { opacity: 0, duration: 1.2, ease: "power2.inOut" });
      gsap.to(img3, { opacity: 0.5, duration: 1.2, ease: "power2.inOut" });
    } else if (currentImageIndex === 0) {
      // Show img3, hide others
      gsap.to(img1, { opacity: 0.5, duration: 1.2, ease: "power2.inOut" });
      gsap.to(img2, { opacity: 0, duration: 1.2, ease: "power2.inOut" });
      gsap.to(img3, { opacity: 0, duration: 1.2, ease: "power2.inOut" });
    }

    // Update hero text
    if (heroText) heroText.innerHTML = hedr[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % 3;

  }, 4000); // Change every 4 seconds
}

startImageCrossfade();

gsap.to(".line", {
  y: (index) => (index === 0 ? -10 : 10),
  yoyo: true,
  duration: 0.5,
  delay: 0.2,
  ease: "power1.inOut",
  repeat: -1,
});

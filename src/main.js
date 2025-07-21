import "./style.css";
// Supports weights 100-900
import "@fontsource-variable/roboto";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./oppor";
import "./heroAnimation";
import "./mobileMenu";
import "./bookForm";
import "./generalAnime";

document.querySelectorAll('a[href^="#"]').forEach((elem) => {
  elem.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(elem.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      offsetTop: 20,
    });
  });
});

function updateCountdown() {
  //   var currentDate = new Date();
  //   currentDate.setDate(currentDate.getDate() + 1);
  //   const endDate = currentDate.getTime();
  //   const now = new Date().getTime();
  //   const timeLeft = endDate - now;

  //   if (timeLeft <= 0) {
  //     document.getElementById("ebg-timer").textContent = "Offer Closed";
  //     return;
  //   }

  //   const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  //   const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  //   const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  //   const seconds = Math.floor((timeLeft / 1000) % 60);

  //   document.getElementById(
  //     "ebg-timer"
  //   ).textContent = `${days} Days ${hours} Hr ${minutes} Min ${seconds} Sec`;

  var currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1);
  currentDate.setHours(0, 0, 0, 0); // Set to 12:00 AM (midnight)
  const endDate = currentDate.getTime();
  const now = new Date().getTime();
  const timeLeft = endDate - now;

  if (timeLeft <= 0) {
    document.getElementById("ebg-timer").textContent = "Offer Closed";
    return;
  }

  const hours = Math.floor(timeLeft / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  document.getElementById(
    "ebg-timer"
  ).textContent = `${hours} Hr ${minutes} Min ${seconds} Sec`;
}

updateCountdown(); // initial call
setInterval(updateCountdown, 1000);

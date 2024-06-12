const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", () => {
  window.location.href = "../page/login.html";
});
const exploreJob = document.getElementById("exploreJob");

exploreJob.addEventListener("click", () => {
  window.location.href = "../page/jobVacancy.html";
});

// --------------------------------------------------------------

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

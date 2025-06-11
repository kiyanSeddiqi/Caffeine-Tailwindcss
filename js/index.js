// ===== header slider =====

const headerSwiper = new Swiper(".header-swiper", {
  direction: "horizontal",
  loop: true,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".header-swiper__next-btn",
    prevEl: ".header-swiper__prev-btn",
  },
});

// ===== new products slider =====
const newProductSwiper = new Swiper(".newProduct-swiper", {
  direction: "horizontal",
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".newProduct__next-btn",
    prevEl: ".newProduct__prev-btn",
  },
  slidesPerView: 1,
  spaceBetween: 20,
  // Breakpoints
  breakpoints: {
    350: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },

    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 5,
    },
  },
});

// ===== best-selling slider =====
const bestSellingSwiper = new Swiper(".bestSelling-swiper", {
  direction: "horizontal",
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 3600,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".bestSelling__next-btn",
    prevEl: ".bestSelling__prev-btn",
  },
  slidesPerView: 1,
  spaceBetween: 20,
  // Breakpoints
  breakpoints: {
    350: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },

    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 5,
    },
  },
});

// ===== offer slider =====
const offerSwiper = new Swiper(".offerSwiper", {
  direction: "horizontal",
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 3300,
    disableOnInteraction: false,
  },
  // slidesPerView: 4,
  spaceBetween: 20,
  // Breakpoints
  breakpoints: {
    350: {
      slidesPerView: 1,
    },

    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1280: {
      slidesPerView: 4,
    },
  },
});

// ===== Countdown timer =====
function updateTimers() {
  const offerTimerContainer = document.querySelector(".offer-countdwon-content");
  const endTime = new Date(offerTimerContainer.dataset.endTime).getTime();
  const now = new Date().getTime();
  const timeRemaining = endTime - now;

  if (timeRemaining > 0) {
    let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    hours = hours < 10 ? "0" + hours : hours;

    const displaySec = document.querySelector(".offer-countdwon__sec");
    const displayMin = document.querySelector(".offer-countdwon__min");
    const displayHour = document.querySelector(".offer-countdwon__hour");
    displaySec.textContent = seconds;
    displayMin.textContent = minutes;
    displayHour.textContent = hours;
  } else {
    offerTimerContainer.innerHTML = `<p class="offer__expired-text text-rose-400">منقضی شد</p>;`;
  }
}
setInterval(updateTimers, 1000);

const detailSwiper = new Swiper(".product-details__swiper", {
  direction: "horizontal",
  loop: true,
  effect: "fade",
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

// Show more comment
const hiddenComments = document.querySelectorAll(".hidden-comment-box");

const showCommentBtn = document.querySelector(".show-comment-btn");
const showCommentIcon = document.querySelector(".show-comment-icon");
const showCommentText = document.querySelector(".show-comment-text");
let flag = true;
showCommentBtn.addEventListener("click", () => {
  hiddenComments.forEach((item) => {
    item.classList.toggle("hidden");
  });
  if (flag) {
    showCommentText.innerHTML = "کمتر";
    flag = !flag;
  } else {
    showCommentText.innerHTML = "بیشتر";
    flag = !flag;
  }
  showCommentIcon.classList.toggle("rotate-180");
});

// related product slider
const relatedProductSwiper = new Swiper(".relatedProduct__swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 1000,
  navigation: {
    nextEl: ".relatedProduct__next-btn",
    prevEl: ".relatedProduct__prev-btn",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  // Breakpoints
  breakpoints: {
    380: {
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

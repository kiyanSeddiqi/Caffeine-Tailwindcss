// toggle shop filter
const accordionBtns = document.querySelectorAll(".accordion-header");

accordionBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const parentEl = e.target.closest(".accordion");

    const accordionArrowIcon = parentEl.querySelector(".size-4");
    console.log(accordionArrowIcon);
    accordionArrowIcon.classList.toggle("-rotate-90");
    const accordionMenu = parentEl.querySelector(".accordion-content");
    accordionMenu.classList.toggle("hidden");
  });
});

// Price Range =========
window.addEventListener("load", () => {
  slideMin();
  slideMax();
});

const minVal = document.querySelector(".min-range");
const maxVal = document.querySelector(".max-range");
const priceInputMin = document.querySelector(".min-input");
const priceInputMax = document.querySelector(".max-input");
const minGap = 0;
const range = document.querySelector(".price-range__progressbar");
const sliderMinValue = parseInt(minVal.min);
const sliderMaxValue = parseInt(maxVal.max);

function slideMin() {
  let gap = parseInt(maxVal.value) - parseInt(minVal.value);
  if (gap <= minGap) {
    minVal.value = parseInt(maxVal.value) - minGap;
  }
  priceInputMin.innerHTML = minVal.value;
  setArea();
}
function slideMax() {
  let gap = parseInt(maxVal.value) - parseInt(minVal.value);
  if (gap <= minGap) {
    maxVal.value = parseInt(minVal.value) + minGap;
  }
  priceInputMax.innerHTML = maxVal.value;
  setArea();
}

function setArea() {
  range.style.left = (minVal.value / sliderMaxValue) * 100 + "%";
  range.style.right = 100 - (maxVal.value / sliderMaxValue) * 100 + "%";
}

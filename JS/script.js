//start images slider
let images = Array.from(document.querySelectorAll(".landing img")),
  slidesCounts = images.length,
  currentSlide = 2,
  prevBtn = document.querySelector("#prev"),
  nextBtn = document.querySelector("#next"),
  mainUl = document.querySelector(".landing ul"),
  bullets = Array.from(document.querySelectorAll(".landing ul li"));
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
checker();
function nextSlide() {
  if (nextBtn.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide++;
    checker();
  }
}
function prevSlide() {
  if (prevBtn.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide--;
    checker();
  }
}
setInterval(function name() {
  if (currentSlide < 3) {
    currentSlide += 1;
    checker();
  } else {
    currentSlide = 1;
    checker();
  }
}, 8000);
function checker() {
  removeAllActiveClasses();
  images[currentSlide - 1].classList.add("active");
  mainUl.children[currentSlide - 1].classList.add("active");
  if (currentSlide == 1) {
    prevBtn.classList.add("disabled");
  } else {
    prevBtn.classList.remove("disabled");
  }
  if (currentSlide == slidesCounts) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }
}
for (let i = 1; i <= slidesCounts; i++) {
  bullets[i - 1].setAttribute("data-index", i);
}
for (let i = 0; i < bullets.length; i++) {
  bullets[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    checker();
  };
}
function removeAllActiveClasses() {
  images.forEach((img) => img.classList.remove("active"));
  bullets.forEach((bullet) => bullet.classList.remove("active"));
}
// Start menu
let menuBtn = document.getElementById("menuBtn"),
  menuLinks = document.getElementById("menu");
menuBtn.addEventListener("click", () => {
  if (menuLinks.style.display === "flex") {
    menuLinks.style.display = "none";
  } else {
    menuLinks.style.display = "flex";
  }
});

// start filter portfolio
const buttons = document.querySelectorAll(".portfolio li");
const boxs = document.querySelectorAll(".box");
buttons.forEach((item) => {
  item.addEventListener("click", () => {
    buttons.forEach((item) => {
      item.className = "";
    });
    item.className = "active";
    let values = item.textContent;
    boxs.forEach((show) => {
      show.style.display = "none";
      if (show.getAttribute("filtering-id") === values || values === "All") {
        show.style.display = "block";
      }
    });
  });
});
// End filter portfolio

let mainTestimonialContainer = document.querySelector(
    "#testimonials-container"
  ),
  currentTestimonialSlide = 1,
  testimonialSlidesCount = 3,
  testimonialBullets = Array.from(document.querySelectorAll("#bullets li"));
function theChecker() {
  removeActiveTestimonial();
  testimonialBullets[currentTestimonialSlide - 1].classList.add("active");

  if (currentTestimonialSlide == 1) {
    mainTestimonialContainer.style.transform = "translateX(120%)";
  } else if (currentTestimonialSlide == 2) {
    mainTestimonialContainer.style.transform = "translateX(0%)";
  } else if (currentTestimonialSlide == 3) {
    mainTestimonialContainer.style.transform = "translateX(-120%)";
  }
}
theChecker();

function removeActiveTestimonial() {
  testimonialBullets.forEach((liBullet) => liBullet.classList.remove("active"));

}
for (let i = 1; i <= testimonialSlidesCount; i++) {
  testimonialBullets[i - 1].setAttribute("data-index", i);
}
for (let i = 0; i < testimonialBullets.length; i++) {
  testimonialBullets[i].onclick = function () {
    currentTestimonialSlide = testimonialBullets[i].getAttribute("data-index");
    theChecker();
  };
}

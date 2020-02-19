import { base } from "./base";

//Слайдер 1
export const firstSlider = () => {
  base.polosa.forEach(el => {
    let count = 0;
    setInterval(() => {
      count -= 650;

      el.style.transform = `translate3d(${count}px, 0px, 0px)`;
      if (count == -1300) {
        count = 650;
      }
    }, 2000);
  });
};
//Слайдер 1

//Слайдер 2
let comentSlide = base.comentSlide;
let count = 0;
export const sliderTwo = () => {
  document.querySelector(".sliderRigth").addEventListener("click", () => {
    for (let i = 0; i < comentSlide.length; i++) {
      comentSlide[i].classList.add("active");
    }
    comentSlide[count].classList.remove("active");
    count++;
    if (count === comentSlide.length) {
      count = 0;
    }
  });

  function sliderLeft() {
    for (let i = 0; i < comentSlide.length; i++) {
      comentSlide[i].classList.add("active");
    }
    comentSlide[count].classList.remove("active");
    count--;
    if (count === -1) {
      count = comentSlide.length - 1;
    }
  }
  sliderLeft();

  document.querySelector(".sliderLeft").addEventListener("click", sliderLeft);
};
//Слайдер 2

//Слайдер 3
export const slider3 = () => {
  const slider = document.querySelector(".catalog");
  const sliderImg = document.querySelectorAll(".catalog-box");

  //let count = 0;

  setInterval(() => {
    slider.style.transform = `translate(-330px)`;
    slider.style.transition = "all ease 3s";
  }, 1000);

  slider.addEventListener("transitionend", function() {
    slider.appendChild(slider.firstElementChild);
    slider.style.transition = "none";
    slider.style.transform = `translate(-5px)`;

    setTimeout(function() {
      slider.style.transition = "all ease 3s";
    });
  });
};

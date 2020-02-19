import { base } from "./views/base";
import { firstSlider, sliderTwo, slider3 } from "./views/sliders";
import { basket } from "./views/basket";
import { createCardGoods } from "./views/shopList";

if (document.querySelector(".goods")) {
  createCardGoods.render();
  createCardGoods.changeStoreBtn();
  basket.render();
  basket.changeStoreBtn();
}

if (document.querySelector(".index")) {
  createCardGoods.render();
  createCardGoods.changeStoreBtn();
  basket.render();
  basket.changeStoreBtn();
  //Слайдер 1
  firstSlider();

  //Слайдер 2
  sliderTwo();

  //Слайдер 2
  slider3();
}

base.basketOpen.addEventListener("click", () => {
  base.basket.style.transition = "all ease 1s";
  base.basket.style.transform = "translateY(0%)";
  base.header.style.display = "none";
  base.allElements.style.display = "none";
  basket.render();
});
base.basketClose.addEventListener("click", () => {
  base.basket.style.transform = "translateY(-101%)";
  //createCardGoods.changeStoreBtn();
  base.header.style.display = "block";
  base.allElements.style.display = "block";
});

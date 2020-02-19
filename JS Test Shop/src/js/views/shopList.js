import { base } from "./base";
import { localStor } from "./LocaleStor";
import List from "../models/List";

class Products {
  constructor() {
    this.classNameActive = "active";
    this.labelAdd = "До корзини";
    this.labelRemove = "Видалити з корзини";
  }

  render() {
    const productsStore = localStor.getProducts();

    List.forEach(({ id, img, name, info, price, discount }) => {
      let activeClass = "";
      let activeText = "";

      if (productsStore.indexOf(id) === -1) {
        activeText = this.labelAdd;
      } else {
        activeClass = this.classNameActive;
        activeText = this.labelRemove;
      }

      const markup = ` 
        <div class="catalog-box">
          <div class="catalog-cart">
           <img class="catalog-img" src="${img}" alt="" />
           <h3>${name}</h3>
           <p>${price} $ <span>${discount ? discount + " $" : " "} </span></p>
           <button class="addCart ${activeClass}" data-goods-id="${id}" >${activeText}</button>
          </div>
      </div>`;

      base.goodsBox.insertAdjacentHTML("afterbegin", markup);
    });
  }

  changeStoreBtn() {
    document.querySelectorAll(".catalog-box").forEach(m => {
      m.addEventListener("click", event => {
        const target = event.target;
        if (target.classList.contains("addCart")) {
          //задаєм в 2 ключа

          //Деструктиризація
          const { pushProduct, products } = localStor.putProducts(
            target.getAttribute("data-goods-id")
          );

          if (pushProduct) {
            target.classList.add("active");
            target.innerHTML = this.labelRemove;
          } else {
            target.classList.remove("active");
            target.innerHTML = this.labelAdd;
          }
        }
      });
    });
  }
}

export const createCardGoods = new Products();

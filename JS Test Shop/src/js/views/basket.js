import { base } from "./base";
import { localStor } from "./LocaleStor";
import List from "../models/List";
let allPrice = 0;
class Shopping {
  render() {
    const productsStore = localStor.getProducts();
    let markup = "";

    let markup2 = "";

    List.forEach(({ id, img, name, price }) => {
      if (productsStore.indexOf(id) !== -1) {
        markup += `
        <div class="cartBasket">
         <img class="imgBasket" src="${img}" alt="" />
         <div class="infoCart">
          <h3>${name}</h3>
          <p>Ціна: <span class="price">${price} $</span></p>
       
        </div>
        <button class="delCart" data-goods-id="${id}" >X</button>
       </div>
      `;
        base.allBasket.innerHTML = markup;
        //base.allBasket.insertAdjacentHTML("afterbegin", markup);
        allPrice += price;

        markup2 = `
        <h2>Загальна сума</h2>
        <span class="price">${allPrice} $</span>
        `;
        base.totalPrice.innerHTML = markup2;
      }
    });
  }
  renderPrice(target) {
    console.log(allPrice);
    let markup2 = "";
    List.forEach(({ id, img, name, price }) => {
      if (id === target) {
        allPrice -= price;
        markup2 = `
        <h2>Загальна сума</h2>
        <span class="price">${allPrice} $</span>
        `;
        base.totalPrice.innerHTML = markup2;
      }
    });
  }

  changeStoreBtn() {
    document.querySelectorAll(".allBasket").forEach(m => {
      m.addEventListener("click", event => {
        const target = event.target;
        if (target.classList.contains("delCart")) {
          basket.renderPrice(target.getAttribute("data-goods-id"));
          target.parentNode.style.display = "none";
          localStor.putProducts(target.getAttribute("data-goods-id"));
          document.querySelectorAll(".addCart").forEach(add => {
            if (
              add.getAttribute("data-goods-id") ===
              target.getAttribute("data-goods-id")
            ) {
              add.classList.remove("active");
              add.innerHTML = "До корзини";
            }
          });
        }
      });
    });
  }
}

export const basket = new Shopping();

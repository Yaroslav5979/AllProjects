class ServiseCart {
  constructor(
    containerCounter,
    containerCart,
    productsCatalog,
    containerProducts,
    productsCatalogTelefon
  ) {
    this.containerCounter = document.querySelector(containerCounter);
    this.containerCart = document.querySelector(containerCart);
    this.containerProducts = document.querySelector(containerProducts);
    this.productsCatalog = productsCatalog;
    this.productsCatalogTelefon = productsCatalogTelefon;
    this.create();
  }
  create() {
    this.containerCounter.addEventListener("click", function() {
      this.style.display = "none";
      serviseCart.containerCart.style.display = "flex";
      serviseCart.containerCart.style.transform = "translateY(0%)";
      serviseCart.containerProducts.style.display = "none";

      let productsCart = serviseCart.getProductsCart();
      let countTogether = 0;
      let products = serviceStore.getProducts();
      let wrapper = document.createElement("slot");

      for (let i = 0; i < productsCart.length; i++) {
        //Загальна сума товарів в корзині
        countTogether += productsCart[i].price;

        //Перебираєм каталого з продуктами
        let item = serviceCreateElement.getElement({
          //Передаєм параметри options в функцію  getElement
          tagName: "div",
          className: "item"
        });

        let name = serviceCreateElement.getElement({
          //Передаєм параметри options в функцію  getElement
          tagName: "div",
          className: "name",
          innerText: productsCart[i].name
        });
        let img = serviceCreateElement.getElement({
          tagName: "div",
          className: "img",
          backgroundImage: `url(${productsCart[i].img})`
        });
        let price = serviceCreateElement.getElement({
          tagName: "div",
          className: "price",
          innerText: productsCart[i].price.toLocaleString() + " USD"
        });

        wrapper.appendChild(item); //Приймаєм парамитри з фун. getElement
        item.appendChild(name);
        item.appendChild(img);
        item.appendChild(price);
      }

      let together = serviceCreateElement.getElement({
        tagName: "div",
        className: "together",
        innerText: `Total: ${countTogether} USD`
      });

      //Закрити корзину
      let close = serviceCreateElement.getElement({
        tagName: "div",
        className: "cart-close"
      });

      close.addEventListener("click", function() {
        serviseCart.containerCounter.style.display = "flex";

        // serviseCart.containerCart.style.display = "none";
        serviseCart.containerProducts.style.display = "flex";
        serviseCart.containerCart.style.transform = "translateY(-100%)";
        setTimeout(function() {
          serviseCart.containerCart.innerHTML = "";
        }, 500);
      });

      serviseCart.containerCart.appendChild(wrapper);
      serviseCart.containerCart.appendChild(close);
      serviseCart.containerCart.appendChild(together);
    });
  }
  getProductsCart() {
    let products = serviceStore.getProducts();
    let productsCart = [];

    for (let i = 0; i < this.productsCatalog.length; i++) {
      //Якщо є співпадіння по id то вернеться index співпадіння інакше вернеться -1
      //Якщо не -1 то співпадіння є
      if (products.indexOf(this.productsCatalog[i].id) !== -1) {
        productsCart.push(this.productsCatalog[i]);
      }
    }
    return productsCart;
  }
}
let serviseCart = new ServiseCart(
  ".container-counter",
  ".container-cart",
  productsCatalog,
  ".container-products"
);

document.querySelector(".menu-btn").addEventListener("click", function() {
  document.querySelector(".menu").classList.toggle("menu-active");
});

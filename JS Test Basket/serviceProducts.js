//сервіс на телефони
// class ServiceProductsTelephone {
//   constructor(containerProductsTelephone, productsCatalogTelefon) {
//     this.containerTelephone = document.querySelector(
//       containerProductsTelephone
//     );
//     this.catalogTelefon = productsCatalogTelefon;

//     this.create();
//   }

//   create() {
//     let wrapper = document.createElement("slot");

//     for (let i = 0; i < this.catalogTelefon.length; i++) {
//       let item = document.createElement("div");
//       item.getAttribute("class", "item");
//       wrapper.appendChild(item);
//     }
//     this.containerTelephone.appendChild(wrapper);
//   }
// }

// let serviceProductsTelephone = new ServiceProductsTelephone(
//   ".container-productsTelephone",
//   productsCatalogTelefon
// );
///////////////////////////////////////////////////////////////////////////////

class ServiceProducts {
  constructor(containerProducts, productsCatalog, containerCounter) {
    ////Камери
    this.container = document.querySelector(containerProducts);
    this.containerCounter = document.querySelector(containerCounter); //Корзина
    this.productsCatalog = productsCatalog;

    this.create();
  }
  create() {
    let wrapper = document.createElement("slot");

    let products = serviceStore.getProducts();

    //Присвоюєм корзині довжину товарів в масиві при перезагрузці сторінки
    this.containerCounter.innerText = products.length;

    let activeClass;
    let activeText;

    for (let i = 0; i < this.productsCatalog.length; i++) {
      //Залишаєм активну кнопку при перезагрузці сторінки
      let index = products.indexOf(this.productsCatalog[i].id);
      if (index == -1) {
        activeClass = "";
        activeText = "Add to cart";
      } else {
        activeClass = " btn-active";
        activeText = "remove form cart";
      }

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
        innerText: this.productsCatalog[i].name
      });
      let img = serviceCreateElement.getElement({
        tagName: "div",
        className: "img",
        backgroundImage: `url(${this.productsCatalog[i].img})`
      });
      let price = serviceCreateElement.getElement({
        tagName: "div",
        className: "price",
        innerText: this.productsCatalog[i].price.toLocaleString() + " USD"
      });

      let btn = serviceCreateElement.getElement({
        tagName: "button",
        //Залишаєм актину кнопку при перезагрузці сторінки
        //На елементі буде зразу 2 класа
        className: "btn" + activeClass,
        //Залишаєм активну кнопку при перезагрузці сторінки
        innerText: activeText,
        id: this.productsCatalog[i].id
      });

      btn.addEventListener("click", function() {
        let id = this.getAttribute("data-id");
        //// id зберігаєм в LocalStorage через  serviceStore.js
        let result = serviceStore.putProduct(id);

        //Присвоюєм корзині довжину товарів в масиві при кліку
        serviceProducts.containerCounter.innerText = result.products.length;

        //Приймає true або false
        if (result.pushProduct) {
          this.classList.add("btn-active");
          this.innerText = "remove form cart";
        } else {
          this.classList.remove("btn-active");
          this.innerText = "Add to cart";
        }
      });
      item.addEventListener("mouseover", function() {
        this.style.boxShadow = "-16px 16px 12px -3px rgba(20, 20, 16, 1)";
      });
      item.addEventListener("mouseout", function() {
        this.style.boxShadow = "-2px 9px 12px -6px rgba(20, 20, 16, 1)";
      });

      wrapper.appendChild(item); //Приймаєм парамитри з фун. getElement
      item.appendChild(name);
      item.appendChild(img);
      item.appendChild(price);
      item.appendChild(btn);
    }
    this.container.appendChild(wrapper);
  }
  // getElement(options) {
  //   //Приймаєм параметри з item
  //   let element = document.createElement(options.tagName);
  //   //Якщо таке свойство є то ми добавляєм
  //   if ("className" in options) {
  //     element.setAttribute("class", options.className);
  //   }

  //   if ("innerText" in options) {
  //     element.innerText = options.innerText;
  //   }

  //   if ("backgroundImage" in options) {
  //     element.style.backgroundImage = options.backgroundImage;
  //   }
  //   if ("id" in options) {
  //     element.setAttribute("data-id", options.id);
  //   }

  //   return element;
  // }
  actions() {}
}

let serviceProducts = new ServiceProducts(
  ".container-products",
  productsCatalog,
  ".container-counter"
);

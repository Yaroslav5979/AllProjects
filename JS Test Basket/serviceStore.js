class ServiceStore {
  constructor() {}
  getProducts() {
    let products = [];
    let productsLocalStorage = localStorage.getItem("products");
    if (productsLocalStorage !== null) {
      products = JSON.parse(productsLocalStorage);
    }
    return products;
  }
  putProduct(id) {
    let products = this.getProducts(); //Викликаєм функцію

    let index = products.indexOf(id);

    //Провіряжм чи є таке значення
    //Якщо нема то добавляєм /якщо він не вертає -1
    let pushProduct;
    if (index === -1) {
      products.push(id);
      pushProduct = true;
    }
    //Якщо він є то видаляєм
    else {
      products.splice(index, 1);
      pushProduct = false;
    }

    localStorage.setItem("products", JSON.stringify(products));

    return {
      pushProduct: pushProduct,
      products: products
    };
  }
}

let serviceStore = new ServiceStore();

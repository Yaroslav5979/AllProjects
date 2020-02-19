class ServiceCreateElement {
  getElement(options) {
    //Приймаєм параметри з item
    let element = document.createElement(options.tagName);
    //Якщо таке свойство є то ми добавляєм
    if ("className" in options) {
      element.setAttribute("class", options.className);
    }

    if ("innerText" in options) {
      element.innerText = options.innerText;
    }

    if ("backgroundImage" in options) {
      element.style.backgroundImage = options.backgroundImage;
    }
    if ("id" in options) {
      element.setAttribute("data-id", options.id);
    }

    return element;
  }
}

let serviceCreateElement = new ServiceCreateElement();

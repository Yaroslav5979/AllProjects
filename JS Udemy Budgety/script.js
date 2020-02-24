// let budgetController = (function() {
//   let Expense = function(id, description, value) {
//     this.id = id;
//     this.description = description;
//     this.value = value;
//   };

//   let Income = function(id, description, value) {
//     this.id = id;
//     this.description = description;
//     this.value = value;
//   };

//   let data = {
//     allItems: {
//       exp: [],
//       inc: []
//     },
//     totals: {
//       exp: 0,
//       ic: 0
//     }
//   };

//   return {
//     addItem: function(type, des, val) {
//       let newItem, ID;

//       //Create new ID

//       if (data.allItems[type].length > 0) {
//         ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
//       } else {
//         ID = 0;
//       }

//       //Crreate nw item based on inc or exp type
//       if (type === "exp") {
//         newItem = new Expense(ID, des, val);
//       } else if (type === "inc") {
//         newItem = new Income(ID, des, val);
//       }

//       //Push in into our data structure
//       data.allItems[type].push(newItem);

//       //Return the new element
//       return newItem;
//     },
//     testing: function() {
//       console.log(data);
//     }
//   };
// })();

// let UIController = (function() {
//   let DOMstrings = {
//     // we store variables
//     inputType: ".add__type",
//     inputDescription: ".add__description",
//     inputValue: ".add__value",
//     inputBtn: ".add__btn",
//     incomeContainer: ".income__list",
//     expensesContainer: ".expenses__list"
//   };
//   return {
//     getInput: function() {
//       return {
//         type: document.querySelector(DOMstrings.inputType).value, //will be either inc or exp
//         description: document.querySelector(DOMstrings.inputDescription).value,
//         value: document.querySelector(DOMstrings.inputValue).value
//       };
//     },
//     addListItem: function(obj, type) {
//       let html, newHTML;
//       //Create HTML string with placeholder text

//       if (type === "inc") {
//         element = DOMstrings.incomeContainer;
//         html = `<div class="item clearfix" id="income-%id%">
//         <div class="item__description">%description%</div>
//         <div class="right clearfix"><div class="item__value">
//         %value%</div><div class="item__delete">
//         <button class="item__delete--btn"><i class="ion-ios-close-outline">
//         </i></button></div></div></div>`;
//       } else {
//         element = DOMstrings.expensesContainer;
//         html = `<div class="item clearfix" id="expense-%id%">
//         <div class="item__description">%description%</div>
//         <div class="right clearfix"><div class="item__value">
//         %value%</div><div class="item__percentage">21%</div>
//         <div class="item__delete"><button class="item__delete--btn">
//         <i class="ion-ios-close-outline"></i></button></div></div></div>`;
//       }

//       //Replace the placehorlder text with some actual data
//       newHTML = html.replace(`%id%`, obj.id);
//       newHTML = newHTML.replace(`%description%`, obj.description);
//       newHTML = newHTML.replace(`%value%`, obj.value);

//       //Insert the HTML into the DOM
//       document.querySelector(element).insertAdjacentHTML("beforeend", newHTML);
//     },
//     getDOMstring: function() {
//       return DOMstrings;
//     }
//   };
// })();

// //GlOBAL APP CONTROLLER
// let controller = (function(budgetCtrl, UIctrl) {
//   let setupEventListeners = function() {
//     let DOM = UIctrl.getDOMstring(); //get store variables

//     document.querySelector(DOM.inputBtn).addEventListener("click", ctrAddItem);

//     document.addEventListener("keypress", function(event) {
//       //event.which - для старих браузерів
//       if (event.keyCode === 13 || event.which === 13) {
//         ctrAddItem();
//       }
//     });
//   };

//   let ctrAddItem = function() {
//     let input, newItem;

//     // 1.Get the filed input data
//     input = UIctrl.getInput();

//     // 2.Add the item to the budget controller
//     newItem = budgetCtrl.addItem(input.type, input.description, input.value);
//     console.log(newItem);
//     // 3.Add the item to the UI
//     UIController.addListItem(newItem, input.type);

//     // 4.Calculate the budget
//     // 5.Display the budget on the UI
//   };

//   return {
//     init: function() {
//       setupEventListeners();
//     }
//   };
// })(budgetController, UIController);

// controller.init();

///
///
///

//БЮДЖЕТ - КОНТРОЛЕР;
let budgetController = (function() {
  let Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
    this.percentage = -1;
  };
  Expense.prototype.calcPercentage = function(totalInc) {
    if (totalInc > 0) {
      this.percentage = Math.round((this.value / totalInc) * 100);
    } else {
      this.percentage = -1;
    }
  };
  Expense.prototype.getPercentage = function() {
    return this.percentage;
  };

  let Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  let calculateTotal = function(type) {
    let sum = 0;
    data.allItems[type].forEach(function(current) {
      sum += current.value;
    });
    data.totals[type] = sum;
  };

  let data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    },
    budget: 0,
    percentage: -1
  };

  return {
    addItem: function(type, des, val) {
      let newItem, ID;

      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }

      if (type === "exp") {
        newItem = new Expense(ID, des, val);
      } else if (type === "inc") {
        newItem = new Income(ID, des, val);
      }
      data.allItems[type].push(newItem);

      return newItem;
    },

    deleteItem: function(type, id) {
      let ids = data.allItems[type].map(function(current) {
        return current.id;
      });
      let index = ids.indexOf(id);
      if (index !== -1) {
        data.allItems[type].splice(index, 1);
      }
    },

    calculateBudget: function() {
      //1.Розрахувати доходи і витрати
      calculateTotal("exp");
      calculateTotal("inc");
      //2.Розрахувати бюджет: дохід - витрати
      data.budget = data.totals.inc - data.totals.exp;
      //3.Розрахувати % доходу що ми потратили
      if (data.totals.inc > 0) {
        data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
      } else {
        data.percentage = -1;
      }
    },

    calculateProcentages: function() {
      data.allItems.exp.forEach(function(cur) {
        cur.calcPercentage(data.totals.inc);
      });
    },
    getPercentage: function() {
      let allPerc = data.allItems.exp.map(function(cur) {
        return cur.getPercentage();
      });
      return allPerc;
    },

    getBudget: function() {
      return {
        budget: data.budget,
        totalInc: data.totals.inc,
        totalExp: data.totals.exp,
        percentage: data.percentage
      };
    },

    testing: function() {
      console.log(data.allItems);
    }
  };
})();

let formatNumber = function(num, type) {
  let numSplit, int, dec;
  num = Math.abs(num);
  num = num.toFixed(2);

  numSplit = num.split(".");

  int = numSplit[0];

  if (int.length > 3) {
    int = int.substr(0, int.length - 3) + "," + int.substr(int.length - 3, 3); // input 4580, output 4,580
  }
  dec = numSplit[1];

  if (type === "inc") {
    return `+ ${int},${dec}`;
  } else {
    return `- ${int},${dec}`;
  }
};

//UI КОНТРОЛЕР
let UIController = (function() {
  let DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn",
    incomeContainer: ".income__list",
    expensesContainer: ".expenses__list",
    budgetLabel: ".budget__value",
    incomeLabel: ".budget__income--value",
    expensesLabel: ".budget__expenses--value",
    percentageLabel: ".budget__expenses--percentage",
    container: ".container",
    expensePercLabel: ".item__percentage",
    dateLabel: ".budget__title--month"
  };

  /// callback функція
  let nodeListForEach = function(list, callback) {
    for (let i = 0; i < list.length; i++) {
      callback(list[i], i);
    }
  };

  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
      };
    },

    addListItem: function(obj, type) {
      let html, newHTML, element;
      //1.Створюєм строку з HTML текстом
      if (type === "inc") {
        element = DOMstrings.incomeContainer;
        html = `<div class="item clearfix" id="inc-%id%">
    <div class="item__description">%description%</div>
    <div class="right clearfix">
        <div class="item__value">%value%</div>
        <div class="item__delete">
            <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
        </div>
    </div>
</div> `;
      } else if (type === "exp") {
        element = DOMstrings.expensesContainer;
        html = `<div class="item clearfix" id="exp-%id%">
    <div class="item__description">%description%</div>
    <div class="right clearfix">
        <div class="item__value">%value%</div>
        <div class="item__percentage">21%</div>
        <div class="item__delete">
            <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
        </div>
    </div>
  </div>`;
      }

      //2.Заміняєм текст з фактичними даними

      newHTML = html.replace("%id%", obj.id);
      newHTML = newHTML.replace("%description%", obj.description);
      newHTML = newHTML.replace("%value%", formatNumber(obj.value, type));

      //3.Вставляєм HTML в DOM
      document.querySelector(element).insertAdjacentHTML("beforeend", newHTML);
    },

    deleteListItem: function(selectorID) {
      let el = document.getElementById(selectorID);
      el.parentNode.removeChild(el);
    },

    clearFields: function() {
      let fields = document.querySelectorAll(
        DOMstrings.inputDescription + ", " + DOMstrings.inputValue
      );

      let fieldsArr = Array.prototype.slice.call(fields);

      fields.forEach(function(current, index, array) {
        current.value = "";

        fields[0].focus();
      });
      // document.querySelector(DOMstrings.inputDescription).value = "";
      // document.querySelector(DOMstrings.inputValue).value = "";
    },

    displayBudget: function(obj) {
      let type;
      if (obj.budget > 0) {
        type = "inc";
      } else {
        type = "exp";
      }

      //Виводим бюджет на головний дисплей
      document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(
        obj.budget,
        type
      );
      document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(
        obj.totalInc,
        "inc"
      );
      document.querySelector(
        DOMstrings.expensesLabel
      ).textContent = formatNumber(obj.totalExp, "exp");

      if (obj.percentage > 0) {
        document.querySelector(DOMstrings.percentageLabel).textContent =
          obj.percentage + "%";
      } else {
        document.querySelector(DOMstrings.percentageLabel).textContent = "---";
      }
    },
    displayPercentages: function(percantages) {
      let fields = document.querySelectorAll(DOMstrings.expensePercLabel);

      nodeListForEach(fields, function(current, index) {
        if (percantages[index] > 0) {
          current.textContent = percantages[index] + "%";
        } else {
          current.textContent = "---";
        }
      });
    },

    displayMonth: function() {
      let now = new Date();
      let month = now.getMonth();
      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      let year = now.getFullYear();
      document.querySelector(DOMstrings.dateLabel).textContent =
        months[month] + " " + year;
    },

    changeType: function() {
      let fields = document.querySelectorAll(
        DOMstrings.inputType +
          "," +
          DOMstrings.inputDescription +
          "," +
          DOMstrings.inputValue
      );
      nodeListForEach(fields, function(cur) {
        cur.classList.toggle("red-focus");
      });

      document.querySelector(DOMstrings.inputBtn).classList.toggle("red");
    },

    getDOMstring: function() {
      return DOMstrings;
    }
  };
})();

//Глобальний контроль додатків
let controller = (function(budgetCtrl, UICtrl) {
  /////////////////////////////

  let setupEventListeners = function() {
    ///Запускаєм функцію через init
    let DOM = UICtrl.getDOMstring();
    document.querySelector(DOM.inputBtn).addEventListener("click", ctrAddItem);
    document.addEventListener("keypress", function(event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrAddItem();
      }
    });
    document
      .querySelector(DOM.container)
      .addEventListener("click", ctrlDeleteItem);

    document
      .querySelector(DOM.inputType)
      .addEventListener("change", UICtrl.changeType);
  };

  let updateBudget = function() {
    //1.Розрахувати бюджет
    budgetCtrl.calculateBudget();
    //2.Вернути бюджет
    let budget = budgetCtrl.getBudget();
    //3.Відобразити бюджет в інтерфейсі
    UIController.displayBudget(budget);
  };

  let updatePercentages = function() {
    //1.Розрахувати проценти
    budgetCtrl.calculateProcentages();
    //2.Читаєм проценти з контроллера бюджету
    let percantages = budgetCtrl.getPercentage();
    //3.Обновити інтерфейс користувача

    UICtrl.displayPercentages(percantages);
  };

  let ctrAddItem = function() {
    //1.Получити вхідні дані
    let input = UICtrl.getInput();
    if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
      //2.Добавити елемент контролеру бюджету
      let newItem = budgetCtrl.addItem(
        input.type,
        input.description,
        input.value
      );
      budgetCtrl.testing();
      console.log(newItem);
      //3.Добавити новий елемент на інтерфейс користувача
      UICtrl.addListItem(newItem, input.type);

      //4.Очистити поля
      UICtrl.clearFields();

      //5.Обрахувати і обновити бюджет
      updateBudget();

      //6.Обрахувати і обновити проценти
      updatePercentages();
    }
  };
  let ctrlDeleteItem = function(event) {
    let itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
    console.log(itemID);
    if (itemID) {
      //itemID = inc-1
      let splitID = itemID.split("-");

      let type = splitID[0];

      let ID = parseInt(splitID[1]);

      //1.Видалити елемент з структури даних
      budgetCtrl.deleteItem(type, ID);

      //2.Видалити елемент з інтерфейсу
      UICtrl.deleteListItem(itemID);

      //3.Обновляєм і показуєм новий бюдет
      updateBudget();

      //4.Обрахувати і обновити проценти
      updatePercentages();
    }
  };
  return {
    init: function() {
      UICtrl.displayMonth();
      setupEventListeners();
      updateBudget();
    }
  };
})(budgetController, UIController);

controller.init();

function getId(a) {
  return document.getElementById(a);
}

let productsCatalog = [
  {
    id: "el1",
    name: "Canon EOS R",
    price: 1000,
    img: "https://i.ytimg.com/vi/0IJJf_Hu_SI/maxresdefault.jpg"
  },
  {
    id: "el2",
    name: "Чашка",
    price: 50,
    img:
      "https://images.unsplash.com/photo-1571993923332-0b5f48d2a01e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=647&q=80"
  },
  {
    id: "el3",
    name: "Apple iPhone X12",
    price: 2000,
    img:
      "https://images.unsplash.com/photo-1570125517852-0f82b4c1f74d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
  },
  {
    id: "el4",
    name: "Sony Cyber-shot",
    price: 3000,
    img:
      "https://images.unsplash.com/photo-1568378710933-345c61fc7520?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80"
  },
  {
    id: "el5",
    name: "Canon EOS 650D",
    price: 3500,
    img:
      "https://images.unsplash.com/photo-1566398130845-6d470a8e96ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=804&q=80"
  },
  {
    id: "el6",
    name: "Sony DSLR",
    price: 2500,
    img:
      "https://images.unsplash.com/photo-1490497250490-7a00e9bf1e1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "el7",
    name: "Sony Alpha DSLR",
    price: 3800,
    img:
      "https://images.unsplash.com/photo-1534864376787-74b2ba2f7991?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "el8",
    name: "Canon EOS 65D",
    price: 1800,
    img:
      "https://images.unsplash.com/photo-1542567455-cd733f23fbb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "el9",
    name: "Minolta SLR",
    price: 1500,
    img:
      "https://images.unsplash.com/photo-1529734781665-be642ec8fc8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  }
];

let userName = document.querySelector(".UserName");
let textComents = document.querySelector(".textComents");

///Слайдер
let count = 0;
setInterval(() => {
  count += 50;
  if (count > 1140) {
    count = 0;
  }
  document.querySelector(".slideBorder").style.left = -count + "px";
}, 500);

/////////////////////////
/////////////////////////

document.getElementById("Send").addEventListener("mouseover", function() {
  document.getElementById("Send").style.boxShadow =
    "-16px 16px 12px -3px rgba(20, 20, 16, 1)";
});
document.getElementById("Send").addEventListener("mouseout", function() {
  document.getElementById("Send").style.boxShadow = "none";
});
//////////////////////////////
/////////////////////////
/////////////////////////
///////////Коментарі
let comments = [];
loadComents();
document.getElementById("Send").onclick = function() {
  let name = document.querySelector(".UserName");
  let textComent = document.querySelector(".textComents");

  let comment = {
    userName: name.value,
    text: textComent.value,
    time: Math.floor(Date.now() / 1000)
  };
  name.value = "";
  textComent.value = "";

  comments.push(comment);

  saveComments();
  showComents();
};

function saveComments() {
  localStorage.setItem("comments", JSON.stringify(comments));
}

function loadComents() {
  if (localStorage.getItem("comments"))
    comments = JSON.parse(localStorage.getItem("comments"));
  showComents();
}

function showComents() {
  let outComent = document.querySelector(".outComent");

  let out = "";
  comments.forEach(function(item) {
    out += `<h2 class='outName'>${item.userName}</h2>
    <p  class='commentsText'>${item.text}</p><hr>`;
  });
  outComent.innerHTML = out;
}

function timeConverter() {}

let r1 = document.querySelector(".outComent");
function f1() {
  r1.innerHTML += "<div class='someBlock'></div>";
}
f1();
// let count2 = 0;
// setInterval(() => {
//   count2++;
//   let someBlock = document.querySelector(".someBlock");
//   someBlock.style.width = count2 + "px";
// }, 50);

let chek = document.querySelector(".approval");
// AIzaSyAwZCbel2ET_FUhL3oiwrnMFFDiFK7DvOE;

///GOOGLE MAPS

// (function() {
//   var setting = {
//     height: 200,
//     width: "40%",
//     zoom: 15,
//     queryString: "Worcella, Wrocław, Poland",
//     place_id:
//       "EhpXb3JjZWxsYSwgV3JvY8WCYXcsIFBvbGFuZCIuKiwKFAoSCXu4Auh7wg9HEXcTxBLSihKsEhQKEgm_irXUwukPRxH14AXCrlYJtw",
//     satellite: false,
//     centerCoord: [51.10421751968364, 17.044376100000022],
//     cid: "0xac128ad212c41377",
//     lang: "en",
//     cityUrl: "/poland/wroclaw-33154",
//     id: "map-9cd199b9cc5410cd3b1ad21cab2e54d3",
//     embed_id: "133663"
//   };
//   var d = document;
//   var s = d.createElement("script");
//   s.src = "https://1map.com/js/script-for-user.js?embed_id=133663";
//   s.async = true;
//   s.onload = function(e) {
//     window.OneMap.initMap(setting);
//   };
//   var to = d.getElementsByTagName("script")[0];
//   to.parentNode.insertBefore(s, to);
// })();
///GOOGLE MAPS

let inputUser = document.querySelectorAll(".input_user");
let labelText = document.querySelectorAll(".label_text");
console.log(inputUser);

for (let i = 0; i < inputUser.length; i++) {
  inputUser[i].onfocus = function() {
    labelText[i].classList.add("focus");
    labelText[i].style.color = "#ACACAC";
    labelText[i].style.fontSize = "17px";
  };
  inputUser[i].onblur = function() {
    if (inputUser[i].value === "") {
      labelText[i].classList.remove("focus");
      labelText[i].style.color = "black";
      labelText[i].style.fontSize = "17px";
    }
  };
}

//email form
$(document).ready(function() {
  //E-mail Ajax Send
  $("form").submit(function() {
    //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Thank you!");
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
});

$(document).ready(function() {
  var userFeed = new Instafeed({
    get: "user",
    userId: "25945699341",
    limit: 4,
    resolution: "standard_resolution",
    accessToken: "25945699341.1677ed0.423cedac7be64a30a58bb3145964fda7",
    sortBy: "most-recent",
    template:
      '<div class="gallery"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>'
  });
  userFeed.run();
});
document.querySelector(".menuIcon").onclick = function() {
  this.classList.toggle("activeIcon");
  document.querySelector(".mini-menu").classList.toggle("miniMenuX");
};

let xp = document.getElementById("experiences");
let formations = document.getElementById("formations");
let ci = document.getElementById("ci");
function toggle_visibility(id) {
  var e = document.getElementById(id);
  if (e.style.display == "block") {
    e.style.display = "none";
  } else {
    xp.style.display = "none";
    $("#arrowXP").removeClass("arrow2");
    $("#arrowXP").addClass("arrow");
    formations.style.display = "none";
    $("#arrowF").removeClass("arrow2");
    $("#arrowF").addClass("arrow");
    ci.style.display = "none";
    $("#arrowCI").removeClass("arrow2");
    $("#arrowCI").addClass("arrow");
    e.style.display = "block";
  }
  return;
}

let btnL = document.getElementById("btn-for-left-sidebar");
let btnR = document.getElementById("btn-for-right-sidebar");

let col1 = document.getElementById("col-left");
let col2 = document.getElementById("col-right");

let pic = document.getElementById("profilePic");

let changeFont = document.getElementById("change-font");
let neon1 = document.getElementById("neonh1");
let neon2 = document.getElementById("neonh2");
let neon3 = document.getElementById("offcanvasRightLabel");

btnL.addEventListener("click", () => {
  col1.style.backgroundColor = "antiqueWhite";
  col2.style.backgroundColor = "cornsilk";
  col1.style.color = "black";
  col2.style.color = "black";
  pic.src = "img/Etienne-Pogoda-profile-picture.jpg";
  pic.style.borderRadius = "100%";
  changeFont.style.fontFamily = "'Roboto', sans-serif";
  $(neon1).removeClass("neonTitle");
  $(neon2).removeClass("neonTitle");
  $("h3, h4, h5").removeClass("neonOrange");
  $(".leftH3").removeClass("neonLeft");
  $(".entreprise").removeClass("neonOrange");
});

btnR.addEventListener("click", () => {
  col1.style.backgroundColor = "#B5EAAD";
  col2.style.backgroundColor = "#AB99FA";
  col1.style.color = "#3f385f";
  col2.style.color = "#122d0d";
  pic.src = "img/Etienne-Pogoda-profile-picture-alternative.jpg";
  pic.style.borderRadius = "15px";
  changeFont.style.fontFamily = "'Poppins', sans-serif";
  $(neon1).addClass("neonTitle");
  $(neon2).addClass("neonTitle");
  $("h3, h4, h5").addClass("neonOrange");
  $(".leftH3").addClass("neonLeft");
  $(".entreprise").addClass("neonOrange");
});

// Cross to Arrow
$("document").ready(function () {
  $("#toXpContainer").on("click", function () {
    $("#arrowXP").toggleClass("arrow");
    $("#arrowXP").toggleClass("arrow2");
  });
});
$("document").ready(function () {
  $("#toFormationContainer").on("click", function () {
    $("#arrowF").toggleClass("arrow");
    $("#arrowF").toggleClass("arrow2");
  });
});
$("document").ready(function () {
  $("#toCI-Container").on("click", function () {
    $("#arrowCI").toggleClass("arrow");
    $("#arrowCI").toggleClass("arrow2");
  });
});

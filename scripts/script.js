let xp = document.getElementById("experiences");
let formations = document.getElementById("formations");
let ci = document.getElementById("ci");
function toggle_visibility(id) {
  var e = document.getElementById(id);
  if (e.style.display == "block") {
    e.style.display = "none";
  } else {
    xp.style.display = "none";
    formations.style.display = "none";
    ci.style.display = "none";
    e.style.display = "block";
  }
  console.log("clicked");

  return;
}

let btnL = document.getElementById("btn-for-left-sidebar");
let btnR = document.getElementById("btn-for-right-sidebar");

let col1 = document.getElementById("col-left");
let col2 = document.getElementById("col-right");

let pic = document.getElementById("profilePic");

let changeFont = document.getElementById("change-font");

btnL.addEventListener("click", () => {
  col1.style.backgroundColor = "antiqueWhite";
  col2.style.backgroundColor = "cornsilk";
  col1.style.color = "black";
  col2.style.color = "black";
  pic.src = "img/Etienne-Pogoda-profile-picture.jpg";
  pic.style.borderRadius = "100%";
  changeFont.style.fontFamily = "'Roboto', sans-serif";
});

btnR.addEventListener("click", () => {
  col1.style.backgroundColor = "#B5EAAD";
  col2.style.backgroundColor = "#AB99FA";
  col1.style.color = "#3f385f";
  col2.style.color = "#122d0d";
  pic.src = "img/Etienne-Pogoda-profile-picture-alternative.jpg";
  pic.style.borderRadius = "15px";
  changeFont.style.fontFamily = "'Poppins', sans-serif";
});

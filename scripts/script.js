var btn2 = document.getElementById("btn2");
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

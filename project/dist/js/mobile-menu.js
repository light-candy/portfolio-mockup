function menuOn() {
  var x = document.getElementById("mobile-menu");
  var y = document.getElementById("hamburger");
  y.classList.toggle('is-active');
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};

function menuOut(){
  var x = document.getElementById("mobile-menu");
  x.style.display = "none";
  var y = document.getElementById("hamburger");
  y.classList.remove('is-active');
};

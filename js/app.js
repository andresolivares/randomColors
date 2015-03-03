var randomNumber = function () {
  var number = Math.floor(Math.random() * 255);
    return number;
};

var generateColor = function (r, g, b) {
  return "rgb("+randomNumber()+", "+randomNumber()+", "+randomNumber()+")";
};

var theColor = function () {

  var seeTheColor = document.getElementById("seeTheColor");
    seeTheColor.style.backgroundColor = generateColor();

  var theColor = document.getElementById("theColor");
    theColorValue = window.getComputedStyle(seeTheColor).getPropertyValue("background-color");
    theColor.innerHTML = theColorValue;
};

document.addEventListener("DOMContentLoaded", function () {
  theColor();

  var getColor = document.getElementById("seeTheColor");
    getColor.addEventListener("click", function () {
      theColor();
    });

});

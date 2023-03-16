function changeText() {
  var textsArray = [
    "Life is short, make it count.",
    "Believe in yourself and all that you are.",
    "Dream big and chase your goals.",
    "Every day is a new beginning.",
    "Stay positive and keep moving forward.",
  ];
  var number = getRandomNumberBetween(0, textsArray.length - 1);
  console.log("Index: ", number);
  document.getElementById("heading").innerHTML = textsArray[number];
}

function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var numList = [];
var displayNumList = [];
var count = 1;
var id;
var audio = new Audio();
audio.src = "drm.mp3";


window.onload = function () {
  start(35);
  document.getElementById("btn").onclick = function () {
    audio.play();
    document.getElementById("btn").disabled = true;
    roulette();
  };
}

function start(num) {
  for (var i = 1; i <= num; i++) {
    numList.push(i);
  }
}

function displayNum() {
  var id = setInterval(function () {
    var rdmNum = Math.floor(Math.random() * numList.length);
    document.getElementById("num").innerText = numList[rdmNum];
  }, 50);
  setTimeout(function () {
    clearInterval(id);
    document.getElementById("btn").disabled = false;
    var rdmNum = Math.floor(Math.random() * numList.length);
    displayNumList.unshift(numList[rdmNum]);
    document.getElementById("num").innerHTML = numList[rdmNum]
    document.getElementById("history").innerHTML = displayNumList.join("<br>");
    numList.splice(rdmNum, 1);
  }, 3200);
}

function roulette() {
  if (numList.length < 2) {
    alert("終了です。")
    document.getElementById("btn").disabled = true;
    document.getElementById("btn").innerHTML = "終了";
    return
  }
  displayNum();
}
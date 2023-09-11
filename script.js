const ground = document.getElementById("ground");
const dragon = document.getElementById("dragon");
const cactus = document.getElementById("cactus");

const dragonAnimation = dragon.getAnimations()[0];

document.onkeydown = function onKeyDown(event) {
  if (event.code === "Space") {
    dragon.style.bottom = "200px";
  }
};
document.onkeyup = function onKeyUp(event) {
  if (event.code === "Space") {
    dragon.style.bottom = "90px";
  }
};

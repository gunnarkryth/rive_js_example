import { hp, isEating } from "./riveController.js";

let feedButton = document.getElementById("feedButton");

const feed = () => {
  isEating.fire();
  if (hp.value < 90) {
    hp.value = hp.value + 10;
  } else {
    hp.value = 100;
  }
};

feedButton.addEventListener("click", () => {
  feed();
});

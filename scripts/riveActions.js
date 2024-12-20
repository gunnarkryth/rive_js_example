import { hp, isEating } from "./riveController.js";
import { socket } from "./socket/socketController.js";

let feedButton = document.getElementById("feedButton");

const feed = () => {
  // isEating.fire();
  socket.emit("feed", { feed: "Client has fed" });
};

feedButton.addEventListener("click", () => {
  feed();
});

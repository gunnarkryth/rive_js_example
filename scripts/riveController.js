let isEating;
let isSad;
let hp;
let initial_hp = 100;

const riveInstance = new rive.Rive({
  src: "../assets/lion_thing.riv",
  canvas: document.getElementById("riveCanvas"),
  autoplay: true,
  stateMachines: ["controller", "health"],
  onLoad: () => {
    riveInstance.resizeDrawingSurfaceToCanvas();

    // Get controller inputs
    let controller_inputs = riveInstance.stateMachineInputs("controller");
    console.log("Controller", controller_inputs);
    isEating = controller_inputs.find((item) => item.name === "isEating");
    isSad = controller_inputs.find((item) => item.name === "isSad");

    // health input
    let health_inputs = riveInstance.stateMachineInputs("health");
    hp = health_inputs.find((item) => item.name === "hp");

    hp.value = initial_hp;

    setInterval(() => {
      if (hp.value < 90) {
        isSad.value = true;
      } else {
        isSad.value = false;
      }
      hp.value = hp.value - 1;
    }, 500);
  },
});

export { isSad, isEating, hp };

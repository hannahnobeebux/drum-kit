const bassDrum = document.querySelector("#bass-drum");
const crash = document.querySelector("#crash");
const floorTom = document.querySelector("#floor-tom");
const hiHat = document.querySelector("#hi-hat");
const highTom = document.querySelector("#high-tom");
const mediumTom = document.querySelector("#medium-tom");
const ride = document.querySelector("#ride");
const snare = document.querySelector("#snare");


bassDrum.addEventListener("click", () => {
    const sound1 = new Audio();
    sound1.src = "assets/bass-drum.wav";
    sound1.play();
});

crash.addEventListener("click", () => {
    let sound2 = new Audio("assets/crash.wav");
    sound2.play();
});

floorTom.addEventListener("click", () => {
    let sound3 = new Audio("assets/floor-tom.wav");
    sound3.play();
});

hiHat.addEventListener("click", () => {
    let sound4 = new Audio("assets/hi-hat.wav");
    sound4.play();
});

highTom.addEventListener("click", () => {
    let sound5 = new Audio("assets/high-tom.wav");
    sound5.play();
});

mediumTom.addEventListener("click", () => {
    let sound6 = new Audio("assets/medium-tom.wav");
    sound6.play();
});

ride.addEventListener("click", () => {
    let sound7 = new Audio("assets/ride.wav");
    sound7.play();
});

snare.addEventListener("click", () => {
    let sound8 = new Audio("assets/snare.wav");
    sound8.play();
});


// LISTENING FOR KEY PRESS 
document.addEventListener("keypress", function(event) {
  makeSound(event.key);
});

function makeSound(key){

  switch (key) {
    case "w":
      let bassDrum = new Audio("assets/bass-drum.wav");
      bassDrum.play();
      break;

      case "a":
        let crash = new Audio("assets/crash.wav");
        crash.play();
      break;

      case "s":
        let floorTom = new Audio("assets/floor-tom.wav");
        floorTom.play();
      break;

      case "d":
        let hiHat = new Audio("assets/hi-hat.wav");
        hiHat.play();
      break;

      case "f":
        let highTom = new Audio("assets/high-tom.wav");
        highTom.play();
      break;

      case "j":
        let mediumTom = new Audio("assets/medium-tom.wav");
        mediumTom.play();
      break;

      case "k":
        let ride = new Audio("assets/ride.wav");
        ride.play();
      break;

      case "l":
          let snare = new Audio("assets/snare.wav");
          snare.play();
        break;

      default: console.log(buttonInnerHTML);

  }

}





const clock = document.querySelector("#clock");

function getClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

const secHand = document.querySelector("#analog .sec");
const minHand = document.querySelector("#analog .minutes");
const hourHand = document.querySelector("#analog .hours");

function moveHands() {
  const now = new Date();
  const sec = now.getSeconds();
  const min = now.getMinutes() * 60;
  const hour = now.getHours() * 3600;

  secHand.style.animationDelay = "-" + sec + "s";
  minHand.style.animationDelay = "-" + min + "s";
  hourHand.style.animationDelay = "-" + hour + "s";
}

moveHands();

import { gradient1 } from "./background.js";

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

const analog = document.getElementById("analog");
const secHand = analog.querySelector(".sec");
const minHand = analog.querySelector(".minutes");
const hourHand = analog.querySelector(".hours");

function moveHands() {
  const now = new Date();
  const sec = now.getSeconds();
  const min = now.getMinutes() * 60;
  const hour = now.getHours() * 3600;

  analog.style.borderColor = gradient1;
  secHand.style.animationDelay = "-" + sec + "s";
  minHand.style.animationDelay = "-" + min + "s";
  hourHand.style.animationDelay = "-" + hour + "s";
}

moveHands();

function date_clock() {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const d = new Date();
  const date = String(d.getDate()).padStart(2, "0");
  const month = monthNames[d.getMonth()];
  const year = d.getFullYear();
  const day = weekday[d.getDay()];

  const yearEl = document.querySelector("#date span:first-child");
  const monthEl = document.querySelector("#date span:nth-child(2)");
  const weekdayEl = document.querySelector("#date span:last-child");

  yearEl.innerHTML = year;
  monthEl.innerHTML = month;
  weekdayEl.innerHTML = `${date}  ${day}`;
}
date_clock();

// const startNumber = 5;
// const flipCard = document.querySelector(".flip-card");
// const topHalf = flipCard.querySelector(".top");
// const bottomHalf = flipCard.querySelector(".bottom");
// const topFlip = document.createElement("div");
// topFlip.classList.add("top-flip");
// const bottomFlip = document.createElement("div");
// bottomFlip.classList.add("bottom-flip");

// topHalf.textContent = startNumber;
// bottomHalf.textContent = startNumber;
// topFlip.textContent = startNumber + 1;
// bottomFlip.textContent = startNumber;

// flipCard.dataset.currentNumber = startNumber;
// flipCard.dataset.nextNumber = startNumber + 1;

// topFlip.addEventListener("animationstart", (e) => {
//   topHalf.textContent = startNumber + 1;
// });
// topFlip.addEventListener("animationend", (e) => {
//   topFlip.remove();
// });
// bottomFlip.addEventListener("animationend", (e) => {
//   bottomHalf.textContent = startNumber + 1;
//   bottomFlip.remove();
// });

// flipCard.appendChild(topFlip, bottomFlip);

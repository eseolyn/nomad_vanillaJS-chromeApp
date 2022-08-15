const colors_light = [
  "AliceBlue",
  "Azure",
  "Beige",
  "BlanchedAlmond",
  "FloralWhite",
  "GhostWhite",
  "HoneyDew",
  "Ivory",
  "Lavender",
  "LavenderBlush",
  "LightGoldenRodYellow",
  "LightYellow",
  "Linen",
  "MintCream",
  "MistyRose",
  "OldLace",
  "PapayaWhip",
  "SeaShell",
];
const colors_dark = [
  "Black",
  "DarkBlue",
  "DarkGreen",
  "DarkMagenta",
  "DarkOliveGreen",
  "DarkRed",
  "DarkSlateBlue",
  "DarkSlateGray",
  "Indigo",
  "Maroon",
  "MidnightBlue",
];

const body = document.querySelector("body");
const gradient1 = colors_light[Math.floor(Math.random() * colors_light.length)];
const gradient2 = colors_dark[Math.floor(Math.random() * colors_dark.length)];
body.style = `
background: linear-gradient(0.25turn, ${gradient1} 65%, ${gradient2})`;

export { gradient1, gradient2 };

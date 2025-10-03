// js/typewriter.js

const text = "Ethan Toomey";
const element = document.getElementById("typewriter");
let i = 0;

function type() {
  if (i < text.length) {
    element.textContent += text[i];
    i++;
    setTimeout(type, 200);
  }
}

document.addEventListener("DOMContentLoaded", type);

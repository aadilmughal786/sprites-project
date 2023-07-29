const range = document.getElementById("speed");
const sprite = document.querySelector(".sprite");
const speed = document.getElementById("speed-value");

document.addEventListener("DOMContentLoaded", () => {
  speed.innerHTML = `Speed: <span class="chip">${range.value}s</span>`;
  sprite.style.animationDuration = `${range.value}s`;
});

range.addEventListener("change", (e) => {
  let value = e.target.value;
  sprite.style.animationDuration = `${value}s`;
  speed.innerHTML = `Speed: <span class="chip">${value}s</span>`;
});

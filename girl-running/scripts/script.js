const range = document.getElementById("duration");
const sprite = document.querySelector(".sprite");
const duration = document.getElementById("duration-value");

document.addEventListener("DOMContentLoaded", () => {
  duration.innerHTML = `Animation duration: <span class="chip">${range.value}s</span>`;
  sprite.style.animationDuration = `${range.value}s`;
});

range.addEventListener("change", (e) => {
  let value = e.target.value;
  sprite.style.animationDuration = `${value}s`;
  duration.innerHTML = `Animation duration: <span class="chip">${value}s</span>`;
});

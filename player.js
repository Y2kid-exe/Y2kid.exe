const dots = document.getElementById("dots");
const boot = document.getElementById("boot");

let count = 1;

setInterval(() => {
  count++;

  if (count > 3) {
    count = 1;
  }

  dots.textContent = ".".repeat(count);
}, 500);

// Hide boot screen after loading
setTimeout(() => {
  boot.style.opacity = "0";

  setTimeout(() => {
    boot.style.display = "none";
  }, 500);

}, 2500);

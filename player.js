const dots = document.getElementById("dots");
const boot = document.getElementById("boot");

let count = 1;

const dotAnimation = setInterval(() => {
  count++;

  if (count > 3) {
    count = 1;
  }

  dots.textContent = ".".repeat(count);

}, 500);


// Boot sequence
setTimeout(() => {

  boot.style.opacity = "0";

  setTimeout(() => {

    boot.style.display = "none";

  }, 600);

}, 2500);

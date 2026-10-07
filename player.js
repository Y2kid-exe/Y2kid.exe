const dots = document.getElementById("dots");

let count = 1;
setInterval(() => {
  count = (count % 3) + 1;
  dots.textContent = ".".repeat(count);
}, 500);

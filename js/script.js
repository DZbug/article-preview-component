const tooltip = document.querySelector(".tooltip");
const shareBtn = document.querySelector(".share-btn");

shareBtn.addEventListener("click", (e) => {
  if (e.target != tooltip) {
    tooltip.classList.toggle("active");
    shareBtn.classList.toggle("active-btn");
  }
});

document.body.addEventListener("click", (e) => {
  if (
    e.target != shareBtn &&
    e.target != tooltip &&
    tooltip.classList.contains("active")
  ) {
    tooltip.classList.remove("active");
    shareBtn.classList.remove("active-btn");
  }
});

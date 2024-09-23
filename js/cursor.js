// Moving pointer
const mouses = document.querySelectorAll(".mouse");
window.addEventListener("mousemove", (e) => {
  mouses.forEach((mouse) => {
    mouse.style.top = `${e.pageY}px`;
    mouse.style.left = `${e.pageX}px`;
  });
});

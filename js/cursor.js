const buttons = document.querySelectorAll("menu a");

// Moving pointer
window.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

// // Interaction with buttons
// buttons.forEach((btn) => {
//   btn.addEventListener("mouseover", (e) => {
//     cursor.style.height = "fit-content";
//     cursor.innerHTML = btn.querySelector(".label").textContent;
//   });

//   btn.addEventListener("mouseout", (e) => {
//     cursor.style.height = "21px";
//     cursor.innerHTML = "";
//   });
// });

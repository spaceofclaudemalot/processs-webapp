const cursor = document.getElementById("cursor");
const buttons = document.getElementsByTagName("button");
console.log(buttons);

// Moving pointer
window.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

// Interaction with buttons
buttons.forEach((btn) => {
  btn.addEventListener("mouseover", () => {
    cursor.style.height = "800px";
  });

  btn.addEventListener("mouseout", () => {
    cursor.style.height = "21px";
  });
});

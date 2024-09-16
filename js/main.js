const tools = document.getElementById("tools");
// console.log(tools);

window.addEventListener("mousemove", (e) => {
  let scrollValue = window.innerHeight;

  if (scrollValue - 55 < e.pageY) {
    tools.classList.add("active-toolbar");
  } else {
    tools.classList.remove("active-toolbar");
  }
});

tools.addEventListener("mouseover", (e) => {
  tools.classList.add("active-toolbar");
});

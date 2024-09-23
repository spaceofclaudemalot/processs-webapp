const description = document.getElementById("mouse1");

const navbarItems = document.querySelectorAll(
  ".navbar__tools__item, .navbar__options__item"
);

navbarItems.forEach((item) => {
  const tag = item.querySelector(
    ".navbar__tools__item__tag, .navbar__options__item__tag"
  );

  item.addEventListener("mouseover", (e) => {
    description.classList.add("help-on-hover");
    description.innerHTML = tag.innerHTML;
  });

  item.addEventListener("mouseout", (e) => {
    description.classList.remove("help-on-hover");
    description.innerHTML = "";
  });
});

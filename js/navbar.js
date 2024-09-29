const navbarItems = document.querySelectorAll(
  ".navbar__tools__item, .navbar__options__item"
);
const description = document.getElementById("mouse1");

// popup pages
const newTeacher = document.getElementById("new-teacher");

navbarItems.forEach((item) => {
  const tag = item.querySelector(
    ".navbar__notifications__item, .navbar__tools__item__tag, .navbar__options__item__tag"
  );

  item.addEventListener("mouseover", (e) => {
    description.classList.add("help-on-hover");
    description.innerHTML = tag.innerHTML;
  });

  item.addEventListener("mouseout", (e) => {
    description.classList.remove("help-on-hover");
    description.innerHTML = "";
  });

  item.addEventListener("click", (e) => {
    switch (item.id) {
      case "add-teacher":
        newTeacher.classList.remove("hidden");
        newTeacher.classList.add("visible");
        break;

      case "add-settings":
        settings.classList.remove("hidden");
        settings.classList.add("visible");
        break;
    }
  });
});

// Close popup pages --------------------------------------------
const closeBtn = document.querySelectorAll(
  ".popup-page__container__header__close"
);

closeBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btn.parentNode.parentNode.parentNode.classList.add("hidden");
    btn.parentNode.parentNode.parentNode.classList.remove("visible");
  });
});

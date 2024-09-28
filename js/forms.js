const subjects = [
  "Français",
  "Anglais",
  "Espagnol",
  "Maths",
  "PC",
  "SVT",
  "Histoire-Géographie",
  "Instruction civique",
  "Philosophie",
  "économie",
  "EPS",
  "Dessin",
  "Informatique",
  "Musique",
  "Catéchèse",
  "Morale",
  "Latin",
  "Développement personnel",
];

const levels = [
  "6ème",
  "5ème",
  "4ème",
  "3ème",
  "Seconde L",
  "Seconde S",
  "Premiere L'1",
  "Premiere L2",
  "Premiere S2",
  "Terminale L'1",
  "Terminale L2",
  "Terminale S1",
  "Terminale S2",
];

const selectHTML = (subjects) =>
  `<option value="">Choisir une matière</option>${subjects
    .sort()
    .map((subject) => `<option value="${subject}">${subject}</option>`)
    .join("")}`;

document.getElementById("subject1").innerHTML = selectHTML(subjects);
document.getElementById("subject2").innerHTML = selectHTML(subjects);

levels.forEach((level) => {
  document.getElementById("level-courses").innerHTML += `
    <div>
      <input type="checkbox" id="${level}" name="level" value="${level}" />
      <label for="${level}">${level}</label>
    </div>
  `;
});

document
  .querySelector(".navbar__tools__item")
  .addEventListener("click", function () {
    if (document.getElementById("new-teacher").classList.contains("hidden"))
      document.getElementById("new-teacher").classList.remove("hidden");
    document.getElementById("new-teacher").classList.add("visible");
  });

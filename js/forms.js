const forms = document.querySelector("form");

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
  "Économie",
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
  "Seconde G",
  "Seconde L",
  "Seconde S",
  "Premiere G",
  "Premiere L'1",
  "Premiere L2",
  "Premiere S2",
  "Terminale G",
  "Terminale L'1",
  "Terminale L2",
  "Terminale S1",
  "Terminale S2",
];

forms.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("form submitted");
});

const selectHTML = (subjects) =>
  `<option value="">Choisir une matière</option>${subjects
    .sort()
    .map((subject) => `<option value="${subject}">${subject}</option>`)
    .join("")}`;

document.getElementById("subject1").innerHTML = selectHTML(subjects);
document.getElementById("subject2").innerHTML = selectHTML(subjects);

document.querySelector(".infos-teacher__container__classroom > ul").innerHTML =
  levels
    .map(
      (level) =>
        `<li>
        
            <input
              type="checkbox"
              name="${level}" 
              id="${level}" 
              value="${level}" />

            <label for="${level}">${level}</label>
        
        </li>`
    )
    .join("");

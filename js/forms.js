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
  // "Seconde G",
  "Seconde L",
  "Seconde S",
  // "Premiere G",
  "Premiere L'1",
  "Premiere L2",
  "Premiere S1",
  "Premiere S2",
  // "Terminale G",
  "Terminale L'1",
  "Terminale L2",
  "Terminale S1",
  "Terminale S2",
];

// const hoursPerSubject = {};
// levels.forEach((level) => {
//   hoursPerSubject[level] = {};
//   subjects.forEach((subject) => {
//     hoursPerSubject[level][subject] = 0;
//   });
// });

// const hoursByLevel = {
//   "6ème": {
//     Français: 0,
//     Anglais: 0,
//     Espagnol: 0,
//     Maths: 0,
//     PC: 0,
//     SVT: 0,
//     HistoireGéographie: 0,
//     InstructionCivique: 0,
//     Philosophie: 0,
//     Économie: 0,
//     EPS: 0,
//     Dessin: 0,
//     Informatique: 0,
//     Musique: 0,
//     Catéchèse: 0,
//     Morale: 0,
//     Latin: 0,
//     DéveloppementPersonnel: 0,
//   },

// };

// Object.keys(hoursByLevel).forEach((level) => {
//   Object.keys(hoursByLevel[level]).forEach((subject) => {
//     hoursPerSubject[level][subject] = hoursByLevel[level][subject];
//   });
// });

// console.log(hoursByLevel);

const selectHTML = (subjects) =>
  `<option value="">Choisir une matière</option>${subjects
    .sort()
    .map((subject) => `<option value="${subject}">${subject}</option>`)
    .join("")}`;

document.getElementById("subject1").innerHTML = selectHTML(subjects);
document.getElementById("subject2").innerHTML = selectHTML(subjects);

document.getElementById("subject1").addEventListener("change", (e) => {
  const selectedValue = e.target.value;
  const subject2Options = document.getElementById("subject2").options;
  Array.from(subject2Options).forEach((option) => {
    if (option.value === selectedValue) {
      option.disabled = true;
    } else {
      option.disabled = false;
    }
  });
});

document.querySelector(".infos-teacher__container__classroom > ul").innerHTML =
  levels
    .map(
      (level) =>
        `<li class="infos-teacher__container__classroom__item">
            <input
              type="checkbox"
              name="${level}" 
              id="${level}" 
              value="${level}" />

            <label for="${level}">${level}</label>
        </li>`
    )
    .join("");

//++++++++++++++++++++++++
// Form in settings page
//++++++++++++++++++++++++
const infosSchool = document.getElementById("infos-school");
const headerGreetings = document.querySelector(".header__greetings");

if (window.localStorage.schoolNameStorage) {
  headerGreetings.textContent = window.localStorage.schoolNameStorage;
}

infosSchool.addEventListener("submit", (e) => {
  e.preventDefault();
  const schoolNameValue = document.getElementById("school-name").value;
  headerGreetings.textContent = schoolNameValue;
  window.localStorage.schoolNameStorage = schoolNameValue;
});

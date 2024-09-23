let currentDate = new Date();
const monthNames = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

function updateCalendar() {
  const monthYearElement = document.getElementById("month-year");
  const daysElement = document.querySelector(".days");

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  monthYearElement.textContent = `${monthNames[currentMonth]} ${currentYear}`;

  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();

  let dayHtml = "";

  // Jours du mois précédent
  for (let i = firstDay - 1; i >= 0; i--) {
    dayHtml += `<div class="day other-month">${daysInPrevMonth - i}</div>`;
  }

  // Jours du mois actuel
  const today = new Date();
  for (let day = 1; day <= daysInMonth; day++) {
    if (
      day === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear()
    ) {
      dayHtml += `<div class="day today">${day}</div>`;
    } else {
      dayHtml += `<div class="day">${day}</div>`;
    }
  }

  // Jours du mois suivant
  const totalDays = firstDay + daysInMonth;
  const remainingDays = 42 - totalDays; // 6 semaines * 7 jours = 42
  for (let i = 1; i <= remainingDays; i++) {
    dayHtml += `<div class="day other-month">${i}</div>`;
  }

  daysElement.innerHTML = dayHtml;
}

function changeMonth(delta) {
  currentDate.setMonth(currentDate.getMonth() + delta);
  updateCalendar();
}

function goToToday() {
  currentDate = new Date();
  updateCalendar();
}

document
  .getElementById("prev-month")
  .addEventListener("click", () => changeMonth(-1));
document
  .getElementById("next-month")
  .addEventListener("click", () => changeMonth(1));
document.getElementById("today-btn").addEventListener("click", goToToday);

updateCalendar();

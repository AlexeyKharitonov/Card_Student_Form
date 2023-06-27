function displayCurrentAge() {
  if (localStorage.getItem("student")) {
    // год введенный в форму
    const year = localStorage.getItem("student");
    const yearOfBirthFromForm = JSON.parse(year).yearOfBirth;

    // таймстамп года из формы
    const dateYearOfBirth = new Date(yearOfBirthFromForm, 0, 1);
    const yearOfBirth = dateYearOfBirth.getFullYear();
    // console.log("yearOfBirth", yearOfBirth);

    // текущий таймстамп
    const dateNow = Date.now();
    const dateNowYear = new Date(dateNow).getFullYear();
    // console.log("dateNowYear", dateNowYear);

    // считаем текущий возраст
    const currentAge = dateNowYear - yearOfBirth;
    // console.log(`${currentAge} ${"лет"}`);
    return currentAge;
  }

  return null;
}

let age = displayCurrentAge();

function formatAgeString(age) {
  let lastOne = Number(age.toString().slice(-1));
  let lastTwo = Number(age.toString().slice(-2));
  if (
    (lastTwo >= 11 && lastTwo <= 19) ||
    (lastOne >= 5 && lastOne <= 9) ||
    lastOne === 0
  )
    return "лет";
  if (lastOne >= 2 && lastOne <= 4) return "года";
  if (lastOne === 1) return "год";
  return "лет";
}

export { displayCurrentAge, formatAgeString, age };

const countdownDisplay = document.getElementById("countdown-display")
const countDown = document.querySelector(".countdown");
const countHour = document.querySelector(".counthour");
const countMinute = document.querySelector(".countminute");
const countSecond = document.querySelector(".countsecond");

function renderCurrentDay(){
  const christmas = 25
  
  const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  let todaysDate = new Date();
  let day = weekDays[todaysDate.getDay()];
  countdownDisplay.innerHTML += day;
  // Task:
  // - Get today's date (you only need the day).
  // - Calculate remaining days.
  // - Display remaining days in countdownDisplay.
}
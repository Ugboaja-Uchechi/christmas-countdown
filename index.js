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

renderCurrentDay();

const renderCountdown = () => {
    let targetDate = new Date("December 25, 2021 00:00:00").getTime();
    const currentDay = new Date().getTime();
    const timeDifference = targetDate - currentDay;
    
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    
    const targetDay = Math.floor(timeDifference / day);
    const targethour = Math.floor((timeDifference % day) / hour);
    const targetMinute = Math.floor((timeDifference % hour) / minute);
    const targetSecond = Math.floor((timeDifference % minute) / second);
    countDown.innerText = targetDay + " Days";
    countHour.innerText = targethour + " Hours";
    countMinute.innerText = targetMinute + " Minutes";
    countSecond.innerText = targetSecond + " Second";
}
setInterval(renderCountdown, 1000);
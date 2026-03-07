

const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const date =document.querySelector('.date');
const formatToggle = document.getElementById('formatToggle');
const themeToggle = document.getElementById('themeToggle');

let is24Hour = true;
let isDark = true;

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  let suffix = '';
  if (!is24Hour) {
    suffix = hours >= 12 ? ' PM' : ' AM';
    hours = hours % 12 || 12;
  }
  const hoursStr = hours.toString().padStart(2, '0');

  timeEl.textContent = `${hoursStr}:${minutes}:${seconds}${suffix}`;
  const dayName = days[now.getDay()];
  const monthName = months[now.getMonth()];
  const day = now.getDate();
  const year = now.getFullYear();
  date.innerHTML = `${dayName}, ${monthName} ${day}, ${year}`;
}

formatToggle.addEventListener('click', () => {
  is24Hour = !is24Hour;
  formatToggle.textContent = is24Hour ? '24h' : 'AM/PM';
  updateClock();
});

themeToggle.addEventListener('click', () => {
  isDark = !isDark;
  if (isDark) {
    document.body.classList.remove('light');
    themeToggle.textContent = '☀️';
  } else {
    document.body.classList.add('light');
    themeToggle.textContent = '🌙';
  }
});

setInterval(updateClock, 1000);
updateClock();
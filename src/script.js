
/*
const months=["Jan","Feb","Mar","Apr","May","Jun","Jul",
  "Aug","Sep","Oct","Nov",
  "Dec"];

const days=["Sunday","Monday","Tuesday","Wednesday",
"Thursday","Friday","Saturday"];


function getDate(){

var date=new Date();
var year=date.getFullYear();
const month=date.getMonth();
const day=date.getDay();
const dayse=date.getDate();
var hours=date.getHours();
var minutes=date.getMinutes();
var seconds=date.getSeconds();


if(hours<10){
hours='0'+ hours;
}
if(minutes<10){
minutes='0'+ minutes;
}
if(seconds<10){
seconds='0'+ seconds;
}


document.querySelector('.hours').innerHTML=hours;
document.querySelector('.minutes').innerHTML=minutes;
document.querySelector('.seconds').innerHTML=seconds;

var full_date = days[day] + " , " + " " +  months[month]+"," + dayse + " "+ year;
document.querySelector('.date').innerHTML = full_date;




setInterval(getDate,1000);
}
getDate()
*/
/*
 // ==================== ÉLÉMENTS DOM ====================
const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const formatToggle = document.getElementById('formatToggle');
const themeToggle = document.getElementById('themeToggle');

// ==================== ÉTATS ====================
let is24Hour = true;
let isDark = true;

// ==================== JOURS ET MOIS EN FRANÇAIS ====================
const jours = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
const mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

// ==================== MISE À JOUR DE L'HEURE ====================
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  // Gestion du format 12h/24h
  let suffixe = '';
  if (!is24Hour) {
    suffixe = hours >= 12 ? ' PM' : ' AM';
    hours = hours % 12 || 12;
  }
  const heuresStr = hours.toString().padStart(2, '0');

  // Affichage heure
  timeEl.textContent = `${heuresStr}:${minutes}:${seconds}${suffixe}`;

  // Affichage date en français
  const jour = jours[now.getDay()];
  const jourNum = now.getDate();
  const moisNom = mois[now.getMonth()];
  const annee = now.getFullYear();
  dateEl.textContent = `${jour} ${jourNum} ${moisNom} ${annee}`;
}

// ==================== FORMAT 12h/24h ====================
formatToggle.addEventListener('click', () => {
  is24Hour = !is24Hour;
  formatToggle.textContent = is24Hour ? '24h' : 'AM/PM';
  updateClock();
});

// ==================== THÈME CLAIR/SOMBRE ====================
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

// ==================== LANCEMENT ====================
setInterval(updateClock, 1000);
updateClock();
*/

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
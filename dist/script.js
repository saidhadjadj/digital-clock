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
  
  var full_date = days[day] + " , " + dayse+ " " +  months[month]  +", " + year;
  document.querySelector('.date').innerHTML = full_date;
  
 


 setInterval(getDate,1000);
}
getDate()
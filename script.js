const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const newYears = '1 Jan 2022';


function countDown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totalSeconds = (newYearsDate - currentDate)/1000;
    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600)%24; 
    const mins = Math.floor((totalSeconds/60) % 60);
    const seconds = Math.floor(totalSeconds% 60);
    // console.log(newYearsDate - currentDate);
    // console.log(days, hours, mins, seconds);
    

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? ('0'+ String(time)) : time;
}


//initial call

countDown();

setInterval(countDown, 1000);   // this is a method to set any interval which takes parameter as function and limit in milliseconds.
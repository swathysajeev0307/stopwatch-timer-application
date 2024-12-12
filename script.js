/* COPYRIGHT (C) 2024 - SWATHYMOL SAJEEV | GNU General Public License v3.0

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, 
either version 3 of the License, or (at your option) any later version. This program is distributed in the hope that it will be useful,but WITHOUT ANY WARRANTY; 
without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>.  */

let minutes = 0;
let seconds = 0;
let milliSeconds = 0;

let interval;

const addMinutes = document.querySelector(".minutes");
const addSeconds = document.querySelector(".seconds");
const addMilliSeconds = document.querySelector(".milli");

const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const pauseBtn = document.querySelector(".pause");
const resetBtn = document.querySelector(".reset");

const lapList = document.getElementById("laplist");

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);


function startTimer(){

    interval =setInterval(updateTimer, 10);
    startBtn.disabled = true;

}

function stopTimer(){

    clearInterval(interval);
    addToLapList();
    resetTimerData();
    startBtn.disabled = false;

}

function pauseTimer(){

    clearInterval(interval);
    startBtn.disabled = false;

}

function resetTimer(){

    clearInterval(interval);
    resetTimerData();
    startBtn.disabled = false;

}

function updateTimer(){
    milliSeconds++;
    if(milliSeconds === 100){  //1000  1s = 1000milliseconds
        milliSeconds = 0;
        seconds++;
        if(seconds === 60){
            seconds = 0;
            minutes++;
        }
    }

    displayTimer();
}

function displayTimer(){

    addMilliSeconds.textContent = padTime(milliSeconds);
    addSeconds.textContent = padTime(seconds);
    addMinutes.textContent = padTime(minutes);
}

function padTime(time){
    return time.toString().padStart(2,'0');
}

function resetTimerData(){
    minutes = 0;
    seconds = 0;
    milliSeconds = 0;
    displayTimer();
}

function addToLapList(){
    const lapTime = `${padTime(minutes)}:${padTime(seconds)}:${padTime(milliSeconds)}`;

    const listItem = document.createElement('li');
    listItem.innerHTML = `<span>Lap ${lapList.childElementCount + 1}: </span>${lapTime}`;

    lapList.appendChild(listItem);
}
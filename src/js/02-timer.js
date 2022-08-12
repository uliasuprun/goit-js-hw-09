import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
require("flatpickr/dist/themes/material_blue.css");
import Notiflix from 'notiflix';

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
    console.log(selectedDates[0]);
    },
};

startBtn.disabled = true;
flatpickr(input, options);
const dateNow = new Date();

input.addEventListener('input', changeDay);

function changeDay (){
    if (input._flatpickr.selectedDates[0] > dateNow){
        startBtn.disabled = false;
    } else {
        Notiflix.Notify.failure("Please choose a date in the future")
        return;
    };
};

startBtn.addEventListener('click', timerPlay);

function timerPlay () {
    startBtn.disabled = true;
    startBtn.disabled = true;
    console.dir(startBtn)
    console.dir(input)
    const timerId = setInterval(()=>{
        const selectedDay = input._flatpickr.selectedDates[0];
        const currentDay = new Date();
        const daysDiference = selectedDay - currentDay;
        const { days, hours, minutes, seconds } = convertMs(daysDiference);
        dataDays.textContent = days < 10 ? `0${days}` : days;
        dataHours.textContent = hours < 10 ? `0${hours}` : hours;
        dataMinutes.textContent = minutes < 10 ? `0${minutes}` : minutes;
        dataSeconds.textContent = seconds < 10 ? `0${seconds}` : seconds;
    
        if(daysDiference < 0){
            clearInterval(timerId)
            dataDays.textContent = `00`;
            dataHours.textContent = `00`;
            dataMinutes.textContent = `00`;
            dataSeconds.textContent = `00`;
            return
            }
        }, 1000)
    return timerId
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
};
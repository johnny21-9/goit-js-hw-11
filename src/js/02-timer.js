

const Refs = {
    dateInput: document.querySelector('#date-selector'),
    startButton: document.querySelector('button[data-start]'),
    stopButton: document.querySelector('button[data-stop]'),
}
const timerInterfaceRefs = {
    days: document.querySelector('span[data-days]'),
    hours: document.querySelector('span[data-hours]'),
    minutes: document.querySelector('span[data-minutes]'),
    seconds: document.querySelector('span[data-seconds]'),

}

const threeHoursInMs = 10800000;
let CurrentDate = Date.now()+ threeHoursInMs;
let dateChosen;
let dateChosenMs;
let counter;

buttonDisable(Refs.startButton);
buttonDisable(Refs.stopButton);

Refs.dateInput.addEventListener('input', dateCheck);
Refs.startButton.addEventListener('click', startTimer);
Refs.stopButton.addEventListener('click', stopTimer);

function dateCheck(event) {
    stopTimer();
    dateChosen = event.target.value;
    dateChosenMs = new Date(dateChosen).getTime();
    console.log(dateChosenMs);
    if (dateChosenMs < CurrentDate) {
        alertShow()
    } else {
        buttonEnable(Refs.startButton);
        const timeDiferance = dateChosenMs - CurrentDate;
        const timeComponents = convertMs(timeDiferance);
        updateInterface(timeComponents);
    }
}

function startTimer() {
    buttonDisable(Refs.startButton);
    buttonEnable(Refs.stopButton);
    counter = setInterval(() => {
        CurrentDate = Date.now()+ threeHoursInMs;
        const timeDiferance = dateChosenMs - CurrentDate;
        const timeComponents = convertMs(timeDiferance);
        updateInterface(timeComponents);
        if (timeDiferance <= 0) {
            stopTimer();
        }
    }, 1000);
}

function stopTimer() {
    const zeroTime = convertMs(0);
    clearInterval(counter);
    updateInterface(zeroTime);
    buttonDisable(Refs.stopButton);
}

function updateInterface({ days, hours, minutes, seconds }) {
    timerInterfaceRefs.days.textContent = addLeadingZero(days);
    timerInterfaceRefs.hours.textContent = addLeadingZero(hours);
    timerInterfaceRefs.minutes.textContent = addLeadingZero(minutes);
    timerInterfaceRefs.seconds.textContent = addLeadingZero(seconds);
}


function addLeadingZero(value) {
  return String(value).padStart(2, '0');
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
}

function alertShow () {
window.alert("Please choose a date in the future")
};

function buttonDisable(button) {
    button.disabled = true;
}
function buttonEnable(button) {
    button.disabled = false;
}
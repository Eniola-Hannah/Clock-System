
let countUp = 00;
let second_countUp = 00;
let third_countUp = 00;
let fourth_countUp = 00;
let timeout;
const startTime = () =>{
    startPause.innerHTML = "Start"
    milliSeconds.innerHTML = countUp;
    seconds.innerHTML = second_countUp;
    minutes.innerHTML = third_countUp
    hours.innerHTML = fourth_countUp
    countUp++
    timeout = setTimeout(startTime, 10);
    if (milliSeconds.innerHTML == 60){
        second_countUp += 1     // that is let seconds increase by 1
        countUp = 1;            // and let milliseconds go back to 1
    }
    if (seconds.innerHTML == 60){
        third_countUp += 1      // that is let minutes increase by 1
        second_countUp = 1;     // and let seconds go back to 1
    }
    if (minutes.innerHTML == 60){
        fourth_countUp += 1     // that is let hours increase by 1
        third_countUp = 1       // and let minutes go back to 1
    }
}

const pauseTime = () => {
    startPause.innerHTML = "Continue"
    clearTimeout(timeout)
}

const stopTime = () => {
    
    countUp = 00;
    second_countUp = 00;
    third_countUp = 00;
    fourth_countUp = 00;

    clearTimeout(timeout)
    
    milliSeconds.innerHTML = 0;
    seconds.innerHTML = 0;
    minutes.innerHTML = 0;
    hours.innerHTML = 0;
}


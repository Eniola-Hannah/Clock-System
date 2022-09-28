
let countUp = 00;
let second_countUp = 00;
let third_countUp = 00;
let fourth_countUp = 00;
let timeout;
const startTime = () =>{
    startPause.innerHTML = "START"
    milliSeconds.value = countUp;
    seconds.value = second_countUp;
    minutes.value = third_countUp
    hours.value = fourth_countUp
    countUp++
    timeout = setTimeout(startTime, 10);
    if (milliSeconds.value == 60){
        second_countUp += 1     // that is let seconds increase by 1
        countUp = 1;            // and let milliseconds go back to 1
    }
    if (seconds.value == 60){
        third_countUp += 1      // that is let minutes increase by 1
        second_countUp = 1;     // and let seconds go back to 1
    }
    if (minutes.value == 60){
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
    
    milliSeconds.value = 0;
    seconds.value = 0;
    minutes.value = 0;
    hours.value = 0;
}


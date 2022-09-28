const myTimer =()=>{
    const date = new Date()
    timeHours.innerHTML =date.getHours();
    timeMinute.innerHTML =date.getMinutes();
    timeSeconds.innerHTML =date.getSeconds();
    
}
const myInterval = setInterval(myTimer, 1000);

let alarmSong = new Audio("media/Creepy-clock-chiming.mp3")
const setAlarm =()=>{
    let hr = hours.value;
    let min = minutes.value;
    let sec = seconds.value;

    const now = new Date()
    hours.value == hr
    minutes.value == min
    seconds.value == sec
    if(hr == now.getHours() && min == now.getMinutes() && sec == now.getSeconds()){
        alarmSong.play()
        alarmMethod.innerHTML = `
            <button id="snooze" onclick="snoozeAlarm()" class="btn btn-lg btn-info px-3">Snooze</button>
            <button id="dismiss" onclick="dismissAlarm()" class="btn btn-lg btn-info px-3">Dismiss</button>
        `
    }  
    set  = setTimeout(setAlarm, 1000);
} 
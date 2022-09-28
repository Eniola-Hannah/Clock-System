const myTimer =()=>{
    const date = new Date()
    timeHours.innerHTML =date.getHours();
    timeMinute.innerHTML =date.getMinutes();
    timeSeconds.innerHTML =date.getSeconds();
    
}
const myInterval = setInterval(myTimer, 1000);

let alarmSong = new Audio("media/Creepy-clock-chiming.mp3")
const setAlarm =()=>{
    if (hours.value==""||minutes.value==""||seconds.value==""){
        alert("Set in your alarm")
    }else{
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
} 

const snoozeAlarm=()=>{
    alarmQuestion.innerHTML = `Enny Alarm is not for lazy people okay, so we would like you to answer the question below
        <br>
        Q - when did Nigeria gain her independence
        <br>
        <center>
            <input type="text" placeholder="Answer here" id="answer" class="form-control w-25 justify-content-center">
        </center>
    `
    if(answer.value==1960){
        alarmQuestion.innerHTML = "alarm has been snoozed to 1 minute"
    }
}

const dismissAlarm=()=>{
    alarmSong.pause()
    window.location.href = "Alarm.html"
}
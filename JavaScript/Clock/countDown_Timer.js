
const countDown = () => {
    let timeout;
    let myHours = hours.value
    let myMinutes = minutes.value
    let mySeconds = seconds.value
    let countDownSong = new Audio("media/creepy-clock-chiming.mp3")
    mySeconds--
    if(seconds.value == "" && minutes.value == "" && hours.value == ""){
        alert("Input a value")
    }
    else if((minutes.value != "" && seconds.value == "")||(hours.value != "" && minutes.value == "")){
        alert("Make sure there's a value in the seconds")
    }else{
        seconds.value = mySeconds
        minutes.value = myMinutes
        hours.value = myHours
        timeout = setTimeout(countDown, 1000);
        
        if(seconds.value == 0 && minutes.value != 0){
            // alert("done")
            seconds.value = 59;
            minutes.value -= 1
        }
        if(minutes.value == 0 && hours.value != 0){
            // alert("done")
            minutes.value = 59;
            hours.value -= 1
        }
        if(seconds.value == 0 && minutes.value == 0 && hours.value == 0){
            countDownSong.play()
            clearTimeout(timeout)
        }
    } 
    
}


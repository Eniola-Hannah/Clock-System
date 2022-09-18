
const myInterval = setInterval(myTimer, 1000);

function myTimer(){
    const date = new Date()
    display.innerHTML =date.toLocaleTimeString() + "<br>" + date.toDateString();
}

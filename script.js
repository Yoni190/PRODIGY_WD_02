let screen = document.querySelector(".screen");
let container = document.querySelector(".container");
let start = document.getElementById("start");
let watchInterval = null;

function startWatch(){
    let millisecond = 1;
    let second = 0;
    let minute = 0;

    let msNum = `0${millisecond}`;
    let secNum = `0${second}`;
    let minNum = `0${minute}`;
    watchInterval = setInterval(()=>{
        if(millisecond == 100){
            second++;
            if(second > 9){
                secNum = second;
            }
            else{
                secNum = `0${second}`;
            }
            
            millisecond = 0;
        }
        if(second == 60){
            minute++;
            if(minute > 9){
                minNum = minute;
            }
            else{
                minNum = `0${minute}`;
            }
            second = 0;
            millisecond = 0;
            msNum = `0${millisecond}`;
            secNum = `0${second}`;
        }
        if(millisecond > 9) {
            msNum = millisecond;
            screen.textContent = `${minNum}:${secNum}:${msNum}`;
        }
        else {
            screen.textContent = `${minNum}:${secNum}:${msNum}`;
        }
        millisecond++;
    }, 10);
    start.disabled = true;
};

function resetWatch(){
    clearInterval(watchInterval);
    screen.textContent = "00:00:00";
    start.disabled = false;
}

function lap(){
    const para = document.createElement("p");
    const time = document.createTextNode(screen.textContent);
    para.appendChild(time);
    container.append(para);
}
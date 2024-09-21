let screen = document.querySelector(".screen");
let container = document.querySelector(".container");
let start = document.getElementById("start");
let title = document.querySelector(".title");
let buttons = document.querySelectorAll("button");
let mode = document.querySelector(".mode");
let laps = document.querySelector(".laps");
let watchInterval = null;
let started = false;
let isDarkMode = false;

let millisecond = 0;
let second = 0;
let minute = 0;

let msNum = `0${millisecond}`;
let secNum = `0${second}`;
let minNum = `0${minute}`;

function startWatch(){
    started ? started = false : started = true;
    
    if (started){
        start.textContent = "Stop";
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

         }
    else {
        clearInterval(watchInterval);
        start.textContent = "Start";
    }
};

function resetWatch(){
    clearInterval(watchInterval);
    screen.textContent = "00:00:00";
    laps.textContent = '';
    start.textContent = "Start";
    started = false;
    millisecond = 0;
    second = 0;
    minute = 0;
    msNum = `0${millisecond}`;
     secNum = `0${second}`;
     minNum = `0${minute}`;
};

function lap(){
    const para = document.createElement("p");
    const time = document.createTextNode(screen.textContent);
    para.appendChild(time);
    laps.appendChild(para);
};

function changeMode() {
    if (isDarkMode){
        changeColor("white", "black");
        mode.innerHTML = "&#127769"
    }
    else {
        changeColor("black", "white");
        mode.innerHTML = "&#9728"
    }
    isDarkMode ? isDarkMode = false : isDarkMode = true;
    
};

function changeColor(color1, color2) {
    document.body.style.background = color1;
    title.style.color = color2;
    screen.style.background = color2;
    screen.style.color = color1;
    container.style.borderColor = color2;

    laps.style.color = color2;
    buttons.forEach((button) => {
        button.style.background = color2;
        button.style.color = color1;
    });
}
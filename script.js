let screen = document.querySelector(".screen");


function startWatch(){
    let millisecond = 1;
    let second = 0;
    let minute = 0;

    let msNum = `0${millisecond}`;
    let secNum = `0${second}`;
    let minNum = `0${minute}`;
    setInterval(()=>{
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
    
};
let ms = 0, s = 0, m = 0, h = 0
let timer

const display = document.querySelector(".timer-Display")
const laps = document.querySelector(".laps")


const start = () => {
    if(!timer){
        timer = setInterval(run, 10)
    }
}

const run = () => {
    display.innerHTML = getTimer()
    ms++              
    if(ms == 100){
        ms = 0
        s++
    }
    if(s == 60){
        s = 0
        m++
    }
    if(m == 60){
        m = 0
        h++
    }
    
    if(h == 13){
        h = 1
    } 
}

const getTimer = () => {
    return (h<10 ? "0" + h: h) + " : " + (m<10 ? "0" + m : m) + " : " + (s<10 ? "0" + s : s) + " : " + (ms<10 ? "0" + ms : ms); 
}



const pause = () => {
    stopTimer()  
}

const stopTimer = () => {
    clearInterval(timer)
    timer = false 
}




const reset = () => {
    stopTimer()
    ms = 0
    s = 0
    m = 0
    h = 0
    display.innerHTML = getTimer()
}




const restart = () => {
    if(timer){ 
        reset()
        start()
    }
    
}


// lap = taking screenshot of current time...
const lap = () => {
    if(timer) {   
        let Li = document.createElement("li")   
        Li.innerHTML = getTimer() 
        laps.appendChild(Li) 
    }
}

const resetLap = () => {
    laps.innerHTML = ""
}

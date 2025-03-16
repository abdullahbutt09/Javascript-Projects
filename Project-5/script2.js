const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
let intervalId = null;

let GrabColorCode = () => {
    const hex = `0123456789ABCDEF`;
    let color = `#`;

    for (let index = 0; index < 6; index++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

let ChangeBodyColor = () =>{
    document.body.style.backgroundColor = GrabColorCode();
}

startButton.addEventListener('click' , ()=>{
    if(intervalId){
        clearInterval(intervalId);
    }
    intervalId = setInterval(ChangeBodyColor , 1000);
})

stopButton.addEventListener('click' , ()=>{
    clearInterval(intervalId);
    intervalId = null;
})
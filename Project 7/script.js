const StartButton = document.querySelector("#start");
const StopButton = document.querySelector("#stop");
let intervalId = null;

let boxes = document.querySelectorAll(".box");

const defaultColors = Array.from(boxes).map(box => box.style.backgroundColor);


let GrabColorCode = () => {
    const hex = `0123456789ABCDEF`;
    let color = `#`;

    for (let index = 0; index < 6; index++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

let ChangeCircleColor = () =>{
    let GetAbox = boxes[Math.floor(Math.random() * boxes.length)];
    let OriginalColor = GetAbox.style.backgroundColor;
    GetAbox.style.backgroundColor = GrabColorCode();

    setTimeout(() => {
        GetAbox.style.backgroundColor = OriginalColor
    },500)
}

StartButton.addEventListener('click' , ()=>{

    if(intervalId){
        clearInterval(intervalId);
    }

    boxes.forEach((box, index) => {
        box.style.backgroundColor = defaultColors[index];
    });
    intervalId = setInterval(ChangeCircleColor , 1000);
});

StopButton.addEventListener('click', () => {

    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
    boxes.forEach(box => {
        box.style.backgroundColor = "black";
    });
});
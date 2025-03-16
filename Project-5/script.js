const ColorArr = [
    "red", "blue", "green", "yellow", "pink", "orange", "cyan", "purple", "brown", "lime",
    "magenta", "teal", "indigo", "violet", "gold", "silver", "coral", "salmon", "navy", "turquoise",
    "lavender", "maroon", "olive", "beige", "crimson", "peru", "orchid", "plum", "slateblue", "tomato",
    "darkgreen", "darkblue", "darkred", "darkorange", "deepskyblue", "lightcoral", "lightseagreen", "royalblue"
];

const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
let title = document.querySelector("#print");
let intervalId = null;

startButton.addEventListener("click", () => {

    if (intervalId) {
        clearInterval(intervalId);
    }

    intervalId = setInterval(() => {
        const randomColor = ColorArr[Math.floor(Math.random() * ColorArr.length)];
        document.body.style.backgroundColor = randomColor;
    }, 1000);
    title.innerHTML = "Now body color change in 1 second!";
});

stopButton.addEventListener("click", () => {
    console.log("Stop button is pressed!");
    clearInterval(intervalId);
    intervalId = null;
    title.innerHTML = "Stop Button is pressed!"
});
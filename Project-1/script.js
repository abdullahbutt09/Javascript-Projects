// const body = document.querySelector('body');
// const buttons = document.querySelectorAll(".button");
// const SelectH1 = document.querySelector('h1');
// const SelectH2 = document.querySelector('h2');

// buttons.forEach((button) =>{
//     button.addEventListener('click', (NewEevent)=>{
//         SelectH1.style.color = "black"
//         SelectH2.style.color = "black"
//         switch (NewEevent.target.id) {
//             case "red":
//             body.style.backgroundColor = NewEevent.target.id;
//                 break;
//             case "white":
//             body.style.backgroundColor = NewEevent.target.id;
//                 break;
//             case "blue":
//             body.style.backgroundColor = NewEevent.target.id;
//                 break;
//             case "yellow":
//             body.style.backgroundColor = NewEevent.target.id;
//                 break;
//             case "green":
//             body.style.backgroundColor = NewEevent.target.id;
//                 break;
//             case "cyan":
//             body.style.backgroundColor = NewEevent.target.id;
//                 break;
//             case "black":
//             body.style.backgroundColor = NewEevent.target.id;
//             SelectH1.style.color = "white"
//             SelectH2.style.color = "white"
//                 break;
//             case "pink":
//             body.style.backgroundColor = NewEevent.target.id;
//                 break;
//             default:
//                 alert("Nothing");
//                 break;
//         }
//     });
// });

const body = document.querySelector('body');
const buttons = document.querySelectorAll(".button");
const SelectH1 = document.querySelector('h1');
const SelectH2 = document.querySelector('h2');

// Define text colors based on the background color
const ColorSet = {
    black: "white",
    white: "black",
    red: "white",
    blue: "white",
    yellow: "black",
    green: "white",
    cyan: "black",
    pink: "black"
};

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const selectedColor = event.target.id;
        
        body.style.backgroundColor = selectedColor;

        const textColor = ColorSet[selectedColor] || "black";

        SelectH1.style.color = textColor;
        SelectH2.style.color = textColor;
    });
});
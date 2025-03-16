// const form = document.querySelector(`form`);

// form.addEventListener(`submit` ,(currentevent) =>{
//     currentevent.preventDefault();

//     //grab weight and height now
//     const height = parseInt(document.querySelector('#height').value);
//     const weight = parseInt(document.querySelector('#weight').value);
//     const results = document.querySelector('#results');

//     if(height === '' || height <= 0 || isNaN(height)){
//         results.innerHTML = `Please give a valid height ${height}`;
//     }
//     else if(weight === '' || weight <= 0 ||isNaN(weight)){
//         results.innerHTML = `Please give a valid weight ${weight}`;
//     }
//     else{
//         const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
//         results.innerHTML = `Result is : ${bmi}`;
//     }
// });

const form = document.querySelector(`form`);

form.addEventListener(`submit`, (event) => {
    event.preventDefault();

    // Grab weight and height
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (isNaN(height) || height <= 0) {
        results.innerHTML = `Please enter a valid height`;
        results.style.color = "red"; 
    } 
    else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = `Please enter a valid weight`;
        results.style.color = "red"; 
    } 
    else {
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        results.innerHTML = `Result is : ${bmi}`;
        results.style.color = "black"; 

        // Select all <p> inside #weight-guide
        const weightGuide = document.querySelectorAll("#weight-guide p");

        // Reset all colors
        weightGuide.forEach(p => p.style.color = "black");

        // Change color based on BMI
        weightGuide.forEach(p => {
            if (p.innerText.includes("Under Weight") && bmi < 18.6) {
                p.style.color = "white";
            } 
            else if (p.innerText.includes("Normal Range") && bmi >= 18.6 && bmi <= 24.9) {
                p.style.color = "white";
            } 
            else if (p.innerText.includes("Overweight") && bmi > 24.9) {
                p.style.color = "white";
            }
        });
    }
});

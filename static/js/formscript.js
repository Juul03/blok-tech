console.log('form is active');

// Image preview code by Miguel Nunez https://medium.com/@mignunez/how-to-upload-and-preview-an-image-with-javascript-749b92711b91
const imgInput = document.querySelector('form > div:first-of-type > input:first-of-type');
const imgOutput = document.querySelector('form > div:first-of-type > output');
let plantImages = [];

//form inputs
const heightInput = document.querySelector('form > input[type=number]');
const submitButton = document.querySelector('form button[type=submit]');

const validateHeightInput = () => {
    const input = heightInput;
    const validityState = input.validity;

    if(validityState.valueMissing) {
        console.log('niet ingevuld hoogte');
        input.setCustomValidity("Please fill in the height of your plant");
    } else if(validityState.badInput) {
        console.log('pls enter number, no letters');
    } else {
        input.setCustomValidity("");
        console.log('niks aan de hand');
    }

    input.reportValidity();
}

//Input checkt elke keer als er wat verandert in het input veld, Change checkt elke keer als er er niet meer gefocused wordt op de input
heightInput.addEventListener('input', validateHeightInput);
//Ook valideren als het formulier gesubmit wordt
submitButton.addEventListener('click', validateHeightInput)

// function validate(heightInput) {
//     const input = document.getElementById(inputID);
//     const validityState = input.validity;
  
//     if (validityState.valueMissing) {
//       input.setCustomValidity("You gotta fill this out, yo!");
//     } else if (validityState.rangeUnderflow) {
//       input.setCustomValidity("We need a higher number!");
//     } else if (validityState.rangeOverflow) {
//       input.setCustomValidity("Thats too high!");
//     } else {
//       input.setCustomValidity("");
//     }
  
//     input.reportValidity();
// }

//form input field appear
const checkboxCustomSoil= document.querySelector('#else')
const inputfieldCustomSoil = document.querySelector('fieldset input[type=text]');

console.log(checkboxCustomSoil.checked);

inputfieldCustomSoil.classList.add('hidden');

const inputFieldAppear = () => {
    if(checkboxCustomSoil.checked) {
        console.log('it is checked');
        inputfieldCustomSoil.classList.remove('hidden');
    } else {
        console.log('it is not checked');
        inputfieldCustomSoil.classList.add('hidden');
    }
}

checkboxCustomSoil.addEventListener('click', inputFieldAppear);


imgInput.addEventListener('change', () => {
    const file = imgInput.files;
    plantImages.push(file[0]);
    displayPlantImage()
})

const displayPlantImage = () => {
    let images = "";
    plantImages.forEach((image, index) => {
        images += ` <div class="uploadPlantImage">
                                <img src="${URL.createObjectURL(image)}" alt="image">
                                <span onclick="deletePlantImage(${index})">&times;</span>
                            </div>`
    })
    imgOutput.innerHTML = images;
}

const deletePlantImage = (index) => {
    plantImages.splice(index, 1);
    displayPlantImage();
}

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
        //Hoogte is niet ingevuld
        input.setCustomValidity("Please fill in the height of your plant");
    } else if(validityState.badInput) {
        //Onjuiste invoer value
        input.setCustomValidity("pls enter number, no letters");
    } else {
        input.setCustomValidity("");
    }

    input.reportValidity();
}

heightInput.addEventListener('input', validateHeightInput);
submitButton.addEventListener('click', validateHeightInput)

//form input field appear
const checkboxCustomSoil= document.querySelector('#else')
const inputfieldCustomSoil = document.querySelector('fieldset input[type=text]');

inputfieldCustomSoil.classList.add('hidden');

const inputFieldAppear = () => {
    if(checkboxCustomSoil.checked) {
        inputfieldCustomSoil.classList.remove('hidden');
    } else {
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

console.log('form is active');

// Image preview code by Miguel Nunez https://medium.com/@mignunez/how-to-upload-and-preview-an-image-with-javascript-749b92711b91
const imgInput = document.querySelector('form > div:first-of-type > input:first-of-type');
const imgOutput = document.querySelector('form > div:first-of-type > output');
let plantImages = [];

//form input field appear
const checkboxCustomSoil= document.querySelector('#else')
const inputfieldCustomSoil = document.querySelector('fieldset input[type=text]');

console.log(checkboxCustomSoil.checked);
const inputFieldAppear = () => {
    if(checkboxCustomSoil.checked) {
        console.log('it is checked');
        inputfieldCustomSoil.classList.add('active');
    } else {
        inputfieldCustomSoil.classList.remove('active');
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

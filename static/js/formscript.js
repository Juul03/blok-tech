console.log('form is active');

const imgInput = document.querySelector('form > div:first-of-type > input:first-of-type');
const imgOutput = document.querySelector('form > div:first-of-type > output');
let plantImages = [];

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

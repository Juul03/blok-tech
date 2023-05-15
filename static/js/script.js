console.log('test we zijn in leven');

const soilTypeOptionList = document.querySelector('#soil-type');
let value = soilTypeOptionList.value;
let selectedSoilType = soilTypeOptionList[soilTypeOptionList.selectedIndex].text;

console.log(selectedSoilType);

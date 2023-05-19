console.log('test we zijn in leven');

const quoteContainer = document.querySelector('main > q');

const fetchData = async () => {
    try {
        const response = await fetch('https://api.goprogram.ai/inspiration');
        console.log(response);
        var data = await response.json();
        console.log(data);
        console.log(data.quote);

        let quoteOfTheHour = data.quote;
        console.log(quoteOfTheHour);
        quoteContainer.innerHTML = quoteOfTheHour;
  }
    catch{
        console.log('error')
    }
  }

  fetchData();

 


// const soilTypeOptionList = document.querySelector('#soil-type');
// let value = soilTypeOptionList.value;
// let selectedSoilType = soilTypeOptionList[soilTypeOptionList.selectedIndex].text;

// console.log(selectedSoilType);


const quoteContainer = document.querySelector('main > q');

const fetchData = async () => {
    try {
        const response = await fetch('https://api.goprogram.ai/inspiration');
        var data = await response.json();

        let quoteOfTheHour = data.quote;
        quoteContainer.innerHTML = quoteOfTheHour;
  }
    catch (error){
      console.error("An error occurred while fetching data:", error);
    }
  }

  fetchData();


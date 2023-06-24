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
      quoteContainer.innerHTML = "Plants are nature's poetry, gracefully painting our world with vibrant hues, breathing life into spaces, and reminding us of the beauty and resilience that can flourish in even the most challenging environments"
    }
  }

  fetchData();


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

// Notification API
const agreeButton = document.querySelector('#agreebutton');
const permission = () => {
    console.log('clicked')

    Notification.requestPermission().then((result) => {
        console.log(result);
    });
}

agreeButton.addEventListener('click', permission);

const text = `Hey plantlover`;
const notification = new Notification("Plant Parents update", { body: text});


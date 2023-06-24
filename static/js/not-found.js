const memeContainer = document.querySelector('main > img');

const fetchDataMemes= async () => {
    try {
        const response = await fetch('https://api.imgflip.com/get_memes');
        const getMemes = await response.json();

        const allMemesData = getMemes.data;
        const allMemesArray = allMemesData.memes;

        const getRandomMeme = (array) => {
            const getRandomNumber = Math.floor(Math.random() * array.length);

            const randomMeme = allMemesArray[getRandomNumber];
            return randomMeme;
        }
        
        const resultOfMemeGenerator = getRandomMeme(allMemesArray);

        let memeUrl = resultOfMemeGenerator.url;
        memeContainer.src = memeUrl;      
  }
    catch{
        console.log('error')
    }
  }

fetchDataMemes();

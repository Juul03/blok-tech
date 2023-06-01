console.log('sadly not found, but atleast the js is active');

const memeContainer = document.querySelector('main > img');

const fetchData2 = async () => {
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
        console.log(memeUrl);
        memeContainer.src = memeUrl;      
  }
    catch{
        console.log('error')
    }
  }

fetchData2();



  const fetchData = async () => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        const allPokemons = await response.json();
        console.log(allPokemons);
        const allPokemonsArray = allPokemons.results;

        console.log(allPokemonsArray);

        const selectOnePokemon = allPokemonsArray.find(poke => {return poke.name});
        console.log(selectOnePokemon);

        // const selectOneMeme = allMemes.find(meme => {return meme.name})
        // console.log(selectOneMeme);

        // let quoteOfTheHour = data.quote;
        // console.log(quoteOfTheHour);
        // quoteContainer.innerHTML = quoteOfTheHour;
  }
    catch{
        console.log('error')
    }
  }

  fetchData();
console.log('sadly not found, but atleast the js is active');

const memeContainer = document.querySelector('main > img');

const fetchData = async () => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        const allPokemons = await response.json();
        // console.log(allMemes.count);
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
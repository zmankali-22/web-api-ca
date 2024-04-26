async function getPokemonData() {
  let pokemonApiUrlBase = "https://pokeapi.co/api/v2/pokemon/";
  let randomPokemonNumber = Math.floor(Math.random() * 1025) + 1;

  let fullApiUrl = pokemonApiUrlBase + randomPokemonNumber;

  let response = await fetch(fullApiUrl);
  return response;
}

function putDataOnPage() {}

// Button calls this
async  function getAndDisplayPokemonData() {
  let data = await getPokemonData();
  let jsonData = await data.json();
  console.log(jsonData);
  getPokemonData();
  putDataOnPage();
}

document
  .getElementById("create-encounter")
  .addEventListener("click", getAndDisplayPokemonData);

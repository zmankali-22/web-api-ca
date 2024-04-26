async function getPokemonData() {
  let pokemonApiUrlBase = "https://pokeapi.co/api/v2/pokemon/";
  let randomPokemonNumber = Math.floor(Math.random() * 1025) + 1;

  let fullApiUrl = pokemonApiUrlBase + randomPokemonNumber;

  let response = await fetch(fullApiUrl);
  let jsonData = await response.json();
  return jsonData;
}

function putDataOnPage(dataToDisplay) {
    document.getElementsByClassName("pokemonName")[0].textContent = dataToDisplay.name
}

// Button calls this
async  function getAndDisplayPokemonData() {
  let data = await getPokemonData();
    console.log(data);
  putDataOnPage(data);
}

document
  .getElementById("create-encounter")
  .addEventListener("click", getAndDisplayPokemonData);

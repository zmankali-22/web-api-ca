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

    let type1Display = document.getElementsByClassName("pokemonType1")[0];
    let type2Display = document.getElementsByClassName("pokemonType2")[0];

    type1Display.textContent = "Type 1:" + dataToDisplay.types[0].type.name;

    if(dataToDisplay.types[1]) {
        type2Display.textContent = "Type 2:" + dataToDisplay.types[1].type.name;
    } else {
        type2Display.textContent = "Type 2:";
    }
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

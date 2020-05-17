var name;
function fetchPokemon(name){
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(response => response.json())
    .then(result =>{
      display(result)
    })
  .catch(error => document.getElementById("descp").innerHTML = "Check Spellings and Try again")
};

document.getElementById("search").addEventListener("click", getName);

function getName(){
  name = document.getElementById("pokemon-name").value;
  fetchPokemon(name);
};

function display(result){
  var pokeType1 = result.types[0].type.name.toUpperCase();
  if (result.types[1]) {
    var pokeType2 = " and " + result.types[1].type.name.toUpperCase();
  } else{
    var pokeType2 = "";
  }
  var pokeName = result.forms[0].name.toUpperCase();
  document.querySelector(".pok-img").src = result.sprites.front_default;
  document.getElementById("descp").innerHTML = `${pokeName} is ${pokeType1}${pokeType2} type`
}

function error(){

}

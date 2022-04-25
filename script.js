let part1 = document.getElementById("part-1");
let url = "https://pokeapi.co/api/v2/ability/?limit=20&offset=20";
let pArr;
if(localStorage.getItem('pArr')== null){
    pArr = [];
}else{
    pArr = JSON.parse(localStorage.getItem('pArr'));
}

fetch(url)
.then(response=>response.json())
.then(response=>pokemon(response.results))

function pokemon(data){
    if(pArr){
        displayData(data);
    }
}
let pList = document.createElement("div");
function displayData(data){
    data.forEach(element => {
        let pokName = document.createElement("h3");
        pokName.innerText = element.name;
        // console.log(pokName);
        pArr.push(element.name);
        pList.append(pokName);
    });
    part1.append(pList);
    localStorage.setItem('pArr',JSON.stringify(pArr));
}


document.getElementById("form").addEventListener('submit',(eventt)=>{
    eventt.preventDefault();
    let name = document.getElementById("name").value;
    searchPokemon(name);
})

function searchPokemon(name){
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(response=>response.json())
    .then(response=>displaySearched(response))
}
/*
id
name (pokemon name)
height
weight
abilities ( just the names of all abilities of pokemon separated by commas )
moves ( just the names of all moves of pokemon separated by commas )
*/
function displaySearched(pok){
    let container = document.getElementById("part-2-container");
    container.innerText = "";
    let baseExperience = document.createElement("h3");
    let name = document.createElement("h3");
    let height = document.createElement("h3");
    let weight = document.createElement("h3");
    let abilities = document.createElement("h3");
    let moves = document.createElement("h3");
    name.innerText = "Pokemon Name :" + pok.forms[0].name;
    height.innerText = "Height : " + pok.height;
    weight.innerText = "Weight : " + pok.weight;
    abilities.innerText = "Ability : " + pok.abilities[1].ability.name;
    baseExperience.innerText = "Base Experience :"+ pok.base_experience;
    moves.innerText = "Moves :"+ pok.moves[0].move.name;
    container.append(name,baseExperience,height,abilities,moves);
}
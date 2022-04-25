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

let pokemonName = document.getElementsByTagName("form");
pokemonName.addEventListener('submit',(eventt)=>{
    eventt.preventDefault();
    let name = document.getElementById("name").value;
    searchPokemon(name);
})

function searchPokemon(name){
    console.log(name);
}
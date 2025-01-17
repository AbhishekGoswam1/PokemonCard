
const typeColors = {
    bug: '#26de81',
    dragon: "#ffeaa7",
    electric: '#fed330',
    fairy: '#FF0069',
    fighting: '#30336b',
    fire: '#f0932b',
    flying: '#81ecec',
    grass: '#00b894',
    ground: '#EFB549',
    ghost: '#a55eea',
    ice: '#74b9ff',
    normal: '#95afc0',
    poison: '#6c5ce7',
    psychic: '#a29bfe',
    rock: '#2d3436',
    water: '#0190FF',
};
const url = "https://pokeapi.co/api/v2/pokemon/";
const card = document.querySelector("#card");
const btn = document.getElementById("btn");

btn.addEventListener("click", 
    getPokeData = () => {
    let id = Math.floor(Math.random() * 150) + 1;
    console.log(id); 
    const finalUrl = url + id; //combine pokiapi url with id

    //fetch generated url
    fetch(finalUrl).
    then((response) => response.json()).
    then((data) =>{
        generateCard(data);
    }); 
});

//generate card
let generateCard = (data) => {
    console.log(data);
    const hp = data.stats[0].base_stat;
    const imageSrc = data.sprites.other.dream_world.front_default;
    const pokemonName = data.name;
    const statAttack = data.stats[1].base_stat;
    const statDefense = data.stats[2].base_stat;
    const statSpeed = data.stats[5].base_stat;

    //set theme
    const themeColor = typeColors[data.types[0].type.name];
    

    card.innerHTML = `
    <p class="hp">
    <span>HP </span>${hp}</p>
        <img src=${imageSrc} alt="" />
        <h2 class="pokeName">${pokemonName}</h2>
        <div class="type">
        </div>
        <div class="statsDiv">
          <div class="stats">
            <h3>${statAttack}</h3>
            <p>Attack</p>
          </div>
          <div class="stats">
            <h3>${statDefense}</h3>
            <p>Defense</p>
          </div>
          <div class="stats">
            <h3>${statSpeed}</h3>
            <p>Speed</p>
          </div>
        </div>
    `;  

    appendType(data.types);
    styleCard(themeColor);
};

let appendType = (types) => {

    types.forEach(item => {
        let span = document.createElement("span");
        span.textContent = item.type.name;
        span.style.backgroundColor = typeColors[item.type.name];
        span.style.fontSize = "1rem"

        //append span to type div
        document.querySelector(".type").appendChild(span);
        
    });
};

let styleCard = (color) => {
    card.style.background = `radial-gradient(circle at 50% 0%, ${color} 40%, #fff 0%)`;
    card.querySelectorAll
}
    

window.addEventListener("load", getPokeData);
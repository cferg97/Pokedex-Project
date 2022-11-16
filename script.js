const pContainer = document.getElementById("pokemon-con")
const number = 151



const fetchPokemon = async () => {
    for (let i=1; i<=number; i++){
        await getPokemon(i)
    }
}

const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const pokemon = await res.json()
    createCard(pokemon)
}

const createCard = (pokemon) => {
    const card = document.createElement("div")
    card.classList.add("pokemon")
    const { id, name, sprites, types } = pokemon
    console.log(pokemon)
    const type = types[0].type.name
    card.innerHTML += `<div class="img-container">
    <img src="${sprites.front_default}" alt="${name}">
    </div>
    
    <div class="info">
    <span class="number">${id}</span>
    <h3 class="name">${name}</h3>
    <small class="type">Type: <span>${type}</span></small>
    </div>`

    pContainer.appendChild(card)
}

fetchPokemon()
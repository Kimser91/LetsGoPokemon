updateView()

function updateView() 
{
    html.innerHTML = /*html*/ 
    `
    <div class="container" id="main">
    <div class="oponentField">
        <div class="players" id="opponent">${lookForPokemon()}</div>
        </div>
        <div class="playerField">
        <div class="players" id="player">${model.data.lastUsedPokemon.name}</div>
        </div>
        <div>
            <button onclick="updateView()">Look for Pokemon</button>
            <button onclick="tryCatchPokemon()">Throw Pokeball</button>
            <button onclick="PokeDexView()">PokeDex</button>
            <button onclick="pokemonInventory()">Invventory</button>
            
        </div>
    </div>
    `
}

function PokeDexView() 
{
    html.innerHTML = /*html*/ 
    `
    <div class="dexDisplay" id="display">
    ${printPokeDex()}
    </div>
    `
}

function printPokeDex() 
{
    let list ="";
    for(let i = 0; i < model.data.pokeDex.length; i++)
    {
      list += 
            `
            <div class="frame" id="pokemon">
            <img src="${model.data.pokeDex[i].img}" alt="pokemon picture">
            <div class="info" id="name">Name: ${model.data.pokeDex[i].name}</div>
            <div class="info" id="level">Level: ${model.data.pokeDex[i].level}</div>
            </div>
            `
    }

    return list;
    
}

function pokemonInventory () {
    html.innerHTML = /*html*/ 
    `
    <div class="dexDisplay" id="display">
    ${printPokemonInventory()}
    </div>
    <span>choose your pokemon by index:</span>
    <input type="number" onchange="chooseMyPokemon(this.value)">
    `
}

function printPokemonInventory() 
{
    let list ="";
    for(let i = 0; i < model.data.myPokemon.length; i++)
    {
      list += 
            `
            <div class="frame" id="pokemon">
            ${i}
            <img src="${model.data.myPokemon[i].img}" alt="pokemon picture">
            <div class="info" id="name">Name: ${model.data.myPokemon[i].name}</div>
            <div class="info" id="level">Level: ${model.data.myPokemon[i].level}</div>
            </div>
            `
    }

    return list;

}

function lookForPokemon()
{
    let i = Math.floor(Math.random()* model.data.wildPokemon.length)
    let showPokemon = model.data.wildPokemon[i]
    if (!model.data.pokeDex.includes(showPokemon)) 
        {
            model.data.pokeDex.push(showPokemon)
        }
    let oponent = 
    `
    <div class="players" id="oponent">
    <img src="${showPokemon.img}" alt="pokemon picture">
    <div class="info" id="name">Name: ${showPokemon.name}</div>
    <div class="info" id="level">Level: ${showPokemon.level}</div>
    </div>
    `

    return oponent;
}

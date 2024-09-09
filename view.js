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
        <div class="players" id="player">${myPokemon()}</div>
        </div>
        <div class="buttonBox">
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
    <button onclick="updateView()">Try find more</button>
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
    <button onclick="updateView()">Try find more</button>
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
    model.data.showPokemon = model.data.wildPokemon[i]
    if (!model.data.pokeDex.includes(model.data.showPokemon)) 
        {
            model.data.pokeDex.push(model.data.showPokemon)
        }
    
    let oponent = 
    `
    
    <img src="${model.data.showPokemon.img}" alt="pokemon picture">
    <div class="info" id="name">Name: ${model.data.showPokemon.name}</div>
    <div class="info" id="level">Level: ${model.data.showPokemon.level}</div>
    
    `
        
    return oponent;
}

function myPokemon()
{
    let playedPokemon =
    `
    <img src="${model.data.lastUsedPokemon.img}" alt="pokemon picture">
    <div class="info" id="name">Name: ${model.data.lastUsedPokemon.name}</div>
    <div class="info" id="level">Level: ${model.data.lastUsedPokemon.level}</div>
    `
    return playedPokemon;
}

function caughtPokemon() 
{
    html.innerHTML = /*html*/
    `
    <div>You chaught a: </div>
    <img src="${model.data.showPokemon.img}" alt="pokemon picture">
    <div class="info" id="name">Name: ${model.data.showPokemon.name}</div>
    <div class="info" id="level">Level: ${model.data.showPokemon.level}</div>
    <button onclick="updateView()">Try find more</button>
    `
  
}

function gotAway() 
{
    html.innerHTML = /*html*/
    `
    <div class="looseBox">${model.data.showPokemon.name} got away,<br> 
         better luck next time
    </div>
    <button onclick="updateView()">Try find more</button>
    `
}
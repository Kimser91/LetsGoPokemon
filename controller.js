function tryCatchPokemon() 
{
let r = Math.floor(Math.random()*20)
if (r <= 10) 
    {
        model.data.myPokemon.push(model.data.showPokemon)
        caughtPokemon()
    } 
else {gotAway()}
}

function chooseMyPokemon(i) 
{
 model.data.lastUsedPokemon = model.data.myPokemon[i]
 updateView()
}
function tryCatchPokemon() 
{
let r = Math.floor(Math.random()*100)
if (r - model.data.showPokemon.level >= 40) 
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
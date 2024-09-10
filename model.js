let html = document.getElementById('app');
let dex = document.getElementById('display');
const model = {
    app: {},
    inputs: {},
    data: {
        wildPokemon: [
            {
            name: "Pikachu",
            health: 100,
            level: 10,
            img: "pikachu.png"
            },
            {
            name: "Bulbasaur",
            health: 200,
            level: 12,
            img: "Bulbasaur.png"
            },
            {
            name: "Oranguru",
            health: 120,
            level: 11,
            img: "Oranguru.png"
            },
            {
            name: "Drowzee",
            health: 400,
            level: 35,
            img: "Drowzee.png"
            },
            {
            name: "Charizard",
            health: 300,
            level: 30,
            img: "Charizard.png"
            },
            {
            name: "Charmander",
            health: 80,
            level: 3,
            img: "Charmander.png"
            },
        ],

        myPokemon: [
            {
                name: "Pikachu",
                health: 100,
                level: 10,
                img: "pikachu.png"
                }
        ],
        lastUsedPokemon: { 
            name: "Pikachu",
            health: 100,
            level: 10,
            img: "pikachu.png"},
        categories: ['grass', 'water', 'fire', 'earth', 'electric', 'psycic'],
        pokeDex: [],

        showPokemon: {},

    },

}


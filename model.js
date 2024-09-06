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
            img: ""
            },
            {
            name: "Bulbasaur",
            health: 200,
            level: 12,
            img: ""
            },
            {
            name: "Oranguru",
            health: 120,
            level: 11,
            img: ""
            },
            {
            name: "Drowzee",
            health: 400,
            level: 35,
            img: ""
            },
            {
            name: "Charizard",
            health: 300,
            level: 30,
            img: ""
            },
            {
            name: "Charmander",
            health: 80,
            level: 3,
            img: ""
            },
        ],

        myPokemon: [],
        myActivePokemon: {},
        lastUsedPokemon: {},
        categories: ['grass', 'water', 'fire', 'earth', 'electric', 'psycic'],
        pokeDex: [
            {
            name: "Pikachu",
            health: 100,
            level: 10,
            img: ""
            }
        ],

    },

}


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
            img: "https://pnghq.com/wp-content/uploads/pikachu-pokemon-free-png-images-768x1135.png"
            },
            {
            name: "Bulbasaur",
            health: 200,
            level: 12,
            img: "https://archives.bulbagarden.net/media/upload/f/fb/0001Bulbasaur.png"
            },
            {
            name: "Oranguru",
            health: 120,
            level: 11,
            img: "https://archives.bulbagarden.net/media/upload/thumb/f/f7/0765Oranguru.png/1024px-0765Oranguru.png"
            },
            {
            name: "Drowzee",
            health: 400,
            level: 35,
            img: "https://archives.bulbagarden.net/media/upload/thumb/e/e4/0096Drowzee.png/250px-0096Drowzee.png"
            },
            {
            name: "Charizard",
            health: 300,
            level: 30,
            img: "https://archives.bulbagarden.net/media/upload/thumb/3/38/0006Charizard.png/1024px-0006Charizard.png"
            },
            {
            name: "Charmander",
            health: 80,
            level: 3,
            img: "https://archives.bulbagarden.net/media/upload/thumb/2/27/0004Charmander.png/250px-0004Charmander.png"
            },
        ],

        myPokemon: [
            {
                name: "Pikachu",
                health: 100,
                level: 10,
                img: "https://pnghq.com/wp-content/uploads/pikachu-pokemon-free-png-images-768x1135.png"
                }
        ],
        lastUsedPokemon: { 
            name: "Pikachu",
            health: 100,
            level: 10,
            img: "https://pnghq.com/wp-content/uploads/pikachu-pokemon-free-png-images-768x1135.png"},
        categories: ['grass', 'water', 'fire', 'earth', 'electric', 'psycic'],
        pokeDex: [],

        showPokemon: {},

    },

}


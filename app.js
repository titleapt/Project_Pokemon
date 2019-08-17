const express = require("express");
const app = express();
const port = 3000;
app.use(express.json())

class Pokemons
{
        constructor(name,type){
        this.id = null
        this.name = name
        this.type = type
        }
}
function generateId(){
    let NewId = pokemons.length+1
    return NewId
}

function createPokemon(name,type){
    let p = new Pokemons(name,type)
    p.id = generateId()
    return p
}

let pokemons = []
    pokemons.push(createPokemon('Praduk','Fish')),
    pokemons.push(createPokemon('Prawit','Clock'))

// GET pokemons -> list all pokemons https://localhost:3000 
app.get("/pokemons", (req, res) => res.send(pokemons))
// POST pokemons -> add pokemons list
app.post("/pokemons", (req, res) => {
    let p = new Pokemons(req.body.name , req.body.type)
    p.id = generateId()
    console.log(req.body)
    pokemons.push(p)
    res.sendStatus(201)
})


app.listen(port, () => console.log(`Pokemons app listening on port ${port}!`)) //ให้แอปเริมทำงาน


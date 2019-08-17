const express = require("express");
const app = express();
const port = 3000;
app.use(express.json())

class Pokemons
{
        constructor(name,type,type2){
        this.id = null
        this.name = name
        this.type = type
        this.type2 = type2
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
app.get('/pokemon', (req, res) => res.send(pokemons))

app.get('/pokemon/:id' ,(req, res) => {
    let id = req.param.id
    let p = pokemons[id - 1]
    res.send(p)
})

app.put('/pokemon/:id', (req , res) => {
    
    if(!isSufficienParam(req.body.type2)){
        res.status(400).send({ error:'Insufficient parameters: name and type are required parameter'})
        return
    }
    if(!isSufficienParam(id)){
        res.status(400).send({ error:'Insufficient parameters: name and type are required parameter'})
        return
    }

    let id = req.param.id
    let p = pokemons[id - 1]

    if(p === undefined){
        res.status(400).send({ error:'Cannot update Pokemon: Pokemo is not found'})
        return
    }

    p.type2 = req.body.type2
    pokemons[id - 1] = p
    res.sendStatus(201)
})



// POST pokemons -> add pokemon list
app.post('/pokemon', (req, res) => {

    if(req.body.name === undefined 
        || req.body.name === null 
        || req.body.name === '' 
        || req.body.type === undefened 
        || req.body.type === null 
        || req.body.type === ''){ // ต้องป้อน name & type
        
        res.status(400).send('Insufficient parameters: name and type are required parameter')
        return
    }

    let p = new Pokemons(req.body.name , req.body.type)
    p.id = generateId()
    console.log(req.body)
    pokemons.push(p)
    res.sendStatus(201)
})


app.listen(port, () => console.log(`Pokemons app listening on port ${port}!`)) //ให้แอปเริมทำงาน


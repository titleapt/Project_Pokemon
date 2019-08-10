const express = require('express')// include librly express 
const app = express() // ต้อง create express app ก่อน
const port = 3000 // 

app.use(express.json()) //ตัวเอกเพรสจะใช้บอดี้เป็นเจสันได้

app.get ('/' , (req,res) => res.send('Hello World...'))

//GET
let pokemons = [
    { name: 'Pikachu', type: 'Electic' },
    { name: 'Lizadon', type: 'Dragon' },
    { name: 'Metapon', type: 'Bug'}
];
app.get ('/pokemons' , (req,res) => res.send(pokemons));

//POST
app.post ('/pokemons' , (req,res) => {

    //console.log(req.body)
    //res.send('Still work on progress......... aaaaa')
    pokemons.push(req.body)
    res.sendStatus(201)
})


app.listen(port, () => console.log(`Pokemons app listening on port ${port}!`)) //ให้แอปเริ่งทำงาน



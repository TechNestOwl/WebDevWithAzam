
const express = require('express'); // import express into our app
const app = express() // returns a function that contains other functions

app.use(express.json())// middleware - telling express how to parse JSON body


// each route must respond to the request
app.get('/', (req,res)=>{
    // res.send('hello world')
    let user = {username: "John Doe", age: 45};
    let users = [
        {username: 'jake', age:20},
        {username: 'joe', age:20},
        {username: 'jackie', age:20}
    ]
    res.json(users);
})


// localhost:3000/hello
app.get('/movies', (req,res) => {
    // res.send('hello world')

})

//movies/action
//movies/kids
//movies/documentary

app.get('/movies/:genre/:year', (req,res) => {

     let genre = req.params.genre
     let year = req.params.year
    res.send(`all ${genre} movies made in year: ${year}`)
    res.json({genre:genre, year:year})
})
// app.get('/movies/action', (req,res) => {
//     res.send('action movies - insert array of action movies')
// })
// app.get('/movies/romance', (req,res) => {
//     res.send('romance movies - insert array of romance movies')
// })

app.post('/movies', (req,res)=>{
    const name = req.body.name
    const genre = req.body.genre
    
})



///start the server on server 3000 - localhost:3000
app.listen(3000,function(){
    console.log('sever is running...')
})


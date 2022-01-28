
// API 

const express = require('express')
const app = express() 

app.use(express.json()) // body parser 

let movies = [{movieId: 1, name: 'Spiderman'}, {movieId: 2, name: 'Batman'}]

app.get('/movies', (req, res) => {
    res.json(movies)
})

// /movies/2
// /movies/1 
app.delete('/movies/:movieId', (req, res) => {
    const movieId = parseInt(req.params.movieId) 
    movies = movies.filter(movie => movie.movieId != movieId) // ignoring/filtering out the id to be deleted 
    res.json({message: 'Movie has been deleted', success: true})
})

app.post('/movies', (req, res) => {

    const name = req.body.name 
    const movie = {movieId: movies.length + 1, name: name}
    movies.push(movie)
    res.json(movie)

})


// /movies/2
// /movies/3
// /movies/34
app.put('/movies/:movieId', (req, res) => {

    const movieId = parseInt(req.params.movieId) 
    const updatedName = req.body.name // updated name 

    // find the movie object, which has the same movieId 
    let movie = movies.find(movie => movie.movieId == movieId)
    console.log(movie)

    // update the movie 
    movie.name = updatedName 
    console.log(movies)
    res.json(movie)

    /*
    movies.find(function(movie) {
        return movie.movieId == movieId 
    }) */

})



app.listen(3000, () => {
    console.log('Server is running...')
})
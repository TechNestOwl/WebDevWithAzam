const express = require('express')
const app = express() 
const mustacheExpress = require('mustache-express')

// setting up mustache as a templating engine 
app.engine('mustache', mustacheExpress())
// the pages are located in the views directory
app.set('views', './views')
// extension for all the pages 
app.set('view engine', 'mustache')

// localhost:3000
app.get('/', (req, res) => {
    res.render('index')
})

app.listen(3000, () => {
    console.log('Server is running...')
})
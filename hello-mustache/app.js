const express = require('express')
const app = express() 
const mustacheExpress = require('mustache-express')

const pgp = require('pg-promise')()

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
const connectionStr = 'postgres://wlgyteql:taQ_5eij5mvaLNLVodo2NqdRIA7oaaEy@castor.db.elephantsql.com/wlgyteql'

const db = pgp(connectionStr)
//console.log(db)

//get all customers
app.get('/', (req,res) => {

    //db.any ALWAAYS returns an ARRAY of objects
    db.any('SELECT * FROM customers')
    .then(customers => {
        console.log(customers)
        res.render('index', {customers:customers})
    })

})
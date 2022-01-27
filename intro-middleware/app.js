
const express = require('express')
const mustacheExpress = require('mustache-express')
const session = require('express-session')
const app = express()

app.use(express.urlencoded())

// initialize the session 
app.use(session({
    secret: 'THISSECRETKEY', 
    saveUninitialized: true, 
    resave: true 
}))

// setting up Express to use Mustache Express as template pages 
app.engine('mustache', mustacheExpress())
    // the pages are located in views directory
app.set('views', './views')
    // extension will be .mustache
app.set('view engine', 'mustache')

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/login', (req, res) => {
    
    const username = req.body.username

    // don't put sensitive data into session 
    if(req.session) {
        req.session.username = username 
        req.session.catName = "FOO"
    }

    console.log(username) 
    res.render('confirm')
})

app.get('/profile', (req, res) => {

    let username = ''

    if(req.session) {
        username = req.session.username
    }

    // username????
    res.send(`Username is ${username} and cat name is ${req.session.catName}`)
})

app.listen(3000,() => {
    console.log('Server is running...')
})
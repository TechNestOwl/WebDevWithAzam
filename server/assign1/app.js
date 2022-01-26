
const express = require("express");
const app = express();
app.use(express.json())//middleware

app.listen(3001, function(){
    console.log('server is running on 30001')
});

app.get('/', (req,res) => {
    res.send("navigate to /userInfo")
})

app.get('/userInfo', (req,res) => {
    let user = {
        name:"Not Jon Doe",
        height: "5-9.5",
        age: 28,
        weight: "180?",
    }
    res.json(user)
})

app.get('/cars/:make/:year', (req,res)=> {
    let make = req.params.make;
    let year = req.params.year;
    res.send(`return a list of the cars made by ${make} in the year ${year}.`)
    // res.json({Brand:make, year:year})
})
app.get("/name", (req,res)=>{
    res.send()
})
app.post('/name', (req,res)=> {
    const name = req.params.name;
    const lastName = req.params.lastName;

    res.json({message: "your name has been updated"})

})
const express= require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")

const app =express()

//middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extend: false}))

app.get('/', (req, res) => {
    res.json("Hello")
})

app.post("/", (req, res) => {
    console.log(req.body.name)
})

app.listen(4000, err => {
    if(err) {
        console.log(err)
    } else {
        console.group("Listning on PORT: ", 4000)
    }
})
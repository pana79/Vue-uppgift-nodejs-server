const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()

const app =express()

mongoose.connect(
   process.env.DATABASE,
    { useNewUrlParser: true,useUnifiedTopology: true  },

    err => {
        if(err) {
            console.log(err)
        } else {
            console.group("Connected to the databse")
        }
    }
    )

//middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extend: false}))

//require api
const productRoutes= require("./routes/product")
app.use("/api", productRoutes)

app.listen(4000, err => {
    if(err) {
        console.log(err)
    } else {
        console.group("Listning on PORT: ", 4000)
    }
})
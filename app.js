const express = require('express')
const mongoose = require('mongoose')
const urlRoute = require('./routes/urlRoutes')
const methodOverride = require('method-override')

// create express app
const app = express()

// middlewares
app.set('view engine', 'ejs')
app.use(express.static('publics'))
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
// database connection
const URI = "mongodb://localhost:27017/urlshortener"
mongoose.connect(URI)
    .then((result) => {
        console.log('db is connected')
        app.listen(3000, () => {
            console.log("App is listening on port 3000")
        })
    })
    .catch((err) => {
        console.log(err)
    })

//url routes
app.use(urlRoute)



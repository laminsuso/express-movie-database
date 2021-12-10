const express = require('express')
const path = require('path')

const {Movie, Cast, Crew} = require('./index')

// const Cast = require('./models/cast')
// const Crew = require('./models/crew')
// const Movie = require('./models/movie')

const app = express()
const port = 3000

app.use(express.json())

app.get('/movie', async(req,res) => {
    const allMovie = Movie.findAll()
    res.json(allMovie)
})


app.listen(port, () => {
      console.log(`Server listening at http://localhost:${port}`)
})
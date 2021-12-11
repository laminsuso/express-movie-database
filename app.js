const express = require('express')
const path = require('path')

const {Movie, Cast, Crew} = require('./index')

const app = express()
const port = 3000
app.use(express.json())

app.get('/movieSite', async(req,res) =>{
    res.redirect('https://www.marvel.com/movies/black-panther')
     })

app.get('/download', async(req,res) =>{
    res.download('public/BlackPanther')
})

app.get('/movie', async(req,res) => {
    const allMovie = await Movie.findAll()
    res.json(allMovie)
})

app.get('/movie/:id', async(req, res, next) => {
    const thisMovie = await Movie.findByPk(req.params.id)
    res.json (thisMovie)
    next();
}, (req, res) =>
    console.log('Did we get the information needed?')
)

app.delete('/movie/:id', async(req, res)=>{
    const deleted = await Movie.destroy({
        where: {id: req.params.id}
    })
    res.send(deleted? "Movie deleted" : "Movie delition failed!")
})

app.post('/movie', async(req,res) =>{
    let newMovie = await Movie.create(req.body)
    res.send(newMovie? "Movie Created": "Movie create Failed!")
})

app.put('/movie/:id', async(req,res)=>{
    let updatedMovie = await Movie.update(req.body, {
        where : {id:req.params.id}
    })
    res.send(updatedMovie ? "Movie Updated" : "Movie update failed!")
})

app.get('/cast', async(req,res) => {
    const allCast = await Cast.findAll()
    res.json(allCast)
})

app.get('/cast/:id', async(req, res, next) => {
    const thisCast = await Cast.findByPk(req.params.id)
    res.json (thisCast)
    next();
}, (req, res) =>
    console.log('Did we get the information needed?')
)

app.delete('/cast/:id', async(req, res)=>{
    const deleted = await Cast.destroy({
        where: {id: req.params.id}
    })
    res.send(deleted? "Cast deleted" : "Cast delition failed!")
})

app.post('/cast', async(req,res) =>{
    let newCast = await Cast.create(req.body)
    res.send(newCast? "Cast Created": "Csat create Failed!")
})

app.put('/cast/:id', async(req,res)=>{
    let updatedCsat = await Cast.update(req.body, {
        where : {id:req.params.id}
    })
    res.send(updatedCast ? "Cast Updated" : "Csat update failed!")
})

app.get('/crew', async(req,res) => {
    const allCrew = await Crew.findAll()
    res.json(allCrew)
})

app.get('/crew/:id', async(req, res, next) => {
    const thisCrew = await Crew.findByPk(req.params.id)
    res.json (thisCrew)
    next();
}, (req, res) =>
    console.log('Did we get the information needed?')
)

app.delete('/crew/:id', async(req, res)=>{
    const deleted = await Crew.destroy({
        where: {id: req.params.id}
    })
    res.send(deleted? "Crew deleted" : "Crew delition failed!")
})

app.post('/crew', async(req,res) =>{
    let newCrew = await Crew.create(req.body)
    res.send(newCrew? "Crew Created": "Crew create Failed!")
})

app.put('/crew/:id', async(req,res)=>{
    let updatedCrew = await Crew.update(req.body, {
        where : {id:req.params.id}
    })
    res.send(updatedCrew ? "Crew Updated" : "Crew update failed!")
})


app.listen(port, () => {
      console.log(`Server listening at http://localhost:${port}`)
})
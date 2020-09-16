const express = require('express')
const movies = require('./movies')
const { findTitle, findDirector } = require('./controllers/movies')

const app = express()

app.get('/movies', (request, response) => {
  return response.send( { movies } );
})

app.get('/movies/:title', findTitle)

app.get('/movies/director/:director', findDirector)

app.listen(1337, () => {
  console.log('LoL')
})

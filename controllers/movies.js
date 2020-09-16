const movies = require('../movies')

const findTitle = (request, response) => {
  const foundTitle = movies.find((movie) => movie.title.toLowerCase().includes(request.params.title.toLowerCase()))

  return response.send(foundTitle)
}

const findDirector = (request, response) => {
  const foundMovie = movies.filter((movie) => {
    return movie.directors.filter((dir) => dir.toLowerCase().includes(request.params.director.toLowerCase()))
  })

  return response.send(foundMovie)
}





module.exports = {
  findTitle,
  findDirector,
}




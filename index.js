const {sequelize, DataTypes, Model} = require('./db')

const Movie = require('./models/movie')
const Cast = require('./models/cast')
const Crew = require('./models/crew');

Movie.hasMany(Cast)
Cast.belongsTo(Movie)

Movie.hasMany(Crew)
Crew.belongsTo(Movie)

module.exports = {Movie, Cast, Crew, sequelize}
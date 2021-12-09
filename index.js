const {sequelize, DataTypes, Model} = require('./db')

const Movie = require('./models/movie')
const Cast = require('./models/cast')
const Crew = require('./models/crew');
const { cast } = require('sequelize/dist');

Movie.hasMany(Cast, {
    foreignKey: 'movieId'
});
Cast.belongsTo(Movie)

Movie.hasMany(Crew, {
    foreignKey: 'movieId'
});
Crew.belongsTo(Movie)

module.exports = {Movie, Cast, Crew, sequelize}
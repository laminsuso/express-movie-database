const {sequelize, DataTypes, Model} = require('../db')


class Movie extends Model {
    
}

Movie.init({
    movie_title: DataTypes.STRING,
    release_date: DataTypes.DATEONLY,
    budget: DataTypes.INTEGER,
}, {
    sequelize, 
    timestamps: false
})

module.exports = Movie
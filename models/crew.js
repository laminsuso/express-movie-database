const {sequelize, DataTypes, Model} = require('../db')


class Crew extends Model {
    
}

Crew.init({
    crew_name: DataTypes.STRING,
    role: DataTypes.STRING
}, {
    sequelize, 
    timestamps: false
})

module.exports = Crew
const {sequelize, DataTypes, Model} = require('../db')


class Cast extends Model {
    
}

Cast.init({
    cast_realname: DataTypes.STRING,
    cast_moviename: DataTypes.STRING,
    role: DataTypes.STRING
}, {
    sequelize, 
    timestamps: false
})

module.exports = Cast
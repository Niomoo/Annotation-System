//Identifier model
module.exports = (sequelize, DataTypes) => {
   const Identifier = sequelize.define( "identifiers", {
       text: {
           type: DataTypes.STRING,
           allowNull: false
       },
       type: {
           type: DataTypes.STRING,
           unique: true,
           allowNull: false
       }
   }, {timestamps: true}, )
   return Identifier
}
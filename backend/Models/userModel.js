//user model
module.exports = (sequelize, DataTypes) => {
   const User = sequelize.define( "users", {
       userName: {
           type: DataTypes.STRING,
           allowNull: false
       },
       email: {
           type: DataTypes.STRING,
           unique: true,
           isEmail: true, //checks for email format
           allowNull: false
       },
       password: {
           type: DataTypes.STRING,
           allowNull: false
       },
       role: {
           type: DataTypes.INTEGER,
		   allowNull:false
       },
       active: {
           type: DataTypes.BOOLEAN,
           allowNull: false
       }
   }, {timestamps: true}, )
   return User
}
//annotation model
module.exports = (sequelize, DataTypes) => {
   const Document = sequelize.define( "documents", {
       pubmedID: {
           type: DataTypes.STRING,
           unique: true,
           allowNull: false
       },
       title: {
           type: DataTypes.STRING,
           unique: true,
           allowNull: false
       },
       abstract: {
           type: DataTypes.STRING,
           unique: true,
           allowNull: false
       },
       status: {
           type: DataTypes.INTEGER, // 1: Working, 2: Waiting, 3:Approved
		   allowNull:false
       },
       active: {
           type: DataTypes.BOOLEAN,
           allowNull: false
       }
   }, {timestamps: true}, )
   return Document
}
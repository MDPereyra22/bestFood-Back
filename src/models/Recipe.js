const { DataTypes, BOOLEAN } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary:{
      type: DataTypes.TEXT,
      allowNull: false,
    },
    healthScore:{
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    steps:{
      type: DataTypes.JSON,
      allowNull: true,
    },
    createdInDb:{
      type:BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
    
  },{
    timestamps: false
  });
};

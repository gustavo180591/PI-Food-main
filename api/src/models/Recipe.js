const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    resume:{
      type: DataTypes.TEXT,
      allowNull: false,
    },
   
   healthScore:{
    type: DataTypes.FLOAT,
      defaultValue: 0,
      validate:{
        min:0,
        max:100,
        isNumber(value){
          if(isNaN(value)) throw new Error('healthScore must be a number')
        }
      }    
        },

    image: {
      type: DataTypes.STRING,
      /* defaultValue:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cucinare.tv%2F2021%2F08%2F06%2Ftodo-sobre-el-matambre-tips-para-hervirlo-como-atarlo-y-cual-es-el-mejor-metodo-de-coccion%2F&psig=AOvVaw1X6hf2ecMTYVjoAHjGt8r7&ust=1686261472568000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKCDiNOTsv8CFQAAAAAdAAAAABAE", */
      /* defaultValue:"https://www.trecebits.com/wp-content/uploads/2020/05/Cocina-800x445.jpg",(no funciona este link) */
      allowNull: true,
    },
    
    howToMake:{
      type: DataTypes.TEXT,
      allowNull: true,
    },

    createdInDb:{
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
   
  });
};

module.exports = (sequelize, DataTypes) => {
    
    let alias = "Categoria";
      let cols = {
          id: {
              type: DataTypes.INTEGER,
              autoIncrement: true,
              primaryKey: true
          },
          nombre: {
              type: DataTypes.STRING
          },
      };
  
      let config = {
          tableName: "Categorias",
          timestamps: false
      };
  
  
      const Categoria = sequelize.define("Categoria", cols, config);
   
  
      return Categoria;
  
  }
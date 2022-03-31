import { DataTypes } from "sequelize";
import { db } from "../../database/db";

export const CategoriesModel = db.define("categories", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  
  categories: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

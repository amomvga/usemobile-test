import { DataTypes } from "sequelize";
import { db } from "../../database/db";

export const ItensModel = db.define("itens", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  categories: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: "categories", key: "id" },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },

  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  price: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false,
  },

  portions: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  disponibility: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  img: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
 
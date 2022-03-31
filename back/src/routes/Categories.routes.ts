import express from "express";
import CategoriesController from "../app/controller/CategoriesController";

const categories = express.Router();

categories.post("/categories", CategoriesController.findAll);

export { categories };

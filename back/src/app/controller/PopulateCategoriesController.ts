import { CategoriesModel } from "../model/CategoriesModel";

export async function categoriesPopulate() {
  const find = await CategoriesModel.findAll();

  if (find.length > 0) {
    console.log("categories table " + find.length);
  } else {
    await CategoriesModel.bulkCreate([
      { categories: "desserts" },
      { categories: "drinks" },
      { categories: "dishes" },
      { categories: "garnish" },
    ]);
  }
}
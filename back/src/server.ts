import express, { json } from "express";
import cors from "cors";

import { db } from "./database/db";

import { categoriesPopulate } from "./app/controller/PopulateCategoriesController";
import { categories } from "./routes/Categories.routes";
import { itens } from "./routes/Itens.routes";

const app = express();

app.use(cors());
app.use(json());

app.use(categories);
app.use(itens);

app.listen(3333, async () => {
  await db.sync();
  console.log(`Server is running at 3333!`);
  await categoriesPopulate();
});

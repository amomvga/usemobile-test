import { Request, Response } from "express";
import { CategoriesModel } from "../model/CategoriesModel";

class CategoriesController {
  async findAll(req: Request, res: Response) {
    const users = await CategoriesModel.findAll();

    if (users.length > 0) {
      return res.json(users);
    }
    return res.status(204).send();
  }
}

export default new CategoriesController();

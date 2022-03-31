import { Request, Response } from "express";
import { ItensModel } from "../model/ItensModel";

class ItensController {
  async create(req: Request, res: Response) {
    try {
      const { filename } = req.file;
      const { name, categories, description, price, portions, disponibility } =
        req.body;
      const createItem = await ItensModel.create({
        name,
        categories,
        description,
        price,
        portions,
        disponibility,
        img: filename,
      });
      return res.status(201).json(createItem);
    } catch (error) {
      return res.json(error);
    }
  }

  async findAll(req: Request, res: Response) {
    const { categories, order, name, page, size } = req.query;

    const whereCondition = name
      ? { name: name }
      : null ?? categories
      ? { categories: categories }
      : null;

    if (order) {
      const itens = await ItensModel.findAndCountAll({
        where: whereCondition,
        order: [["price", `${order}`]],
        limit: +size || 5,
        offset: +page * +size || 0,
      });
      const names = await ItensModel.findAll();
      return res.json({ names: names, rows: itens.rows, count: itens.count });
    }

    const itens = await ItensModel.findAndCountAll({
      where: whereCondition,
      limit: +size || 5,
      offset: +page * +size || 0,
    });

    const names = await ItensModel.findAll();
    return res.json({ names: names, rows: itens.rows, count: itens.count });
  }

  async destroy(req: Request, res: Response) {
    const { itemId } = req.params;
    await ItensModel.destroy({ where: { id: itemId } });
    return res.status(204).send();
  }

  async findItemById(req: Request, res: Response) {
    const { itemId } = req.params;

    const users = await ItensModel.findAll({
      where: { id: itemId },
    });
  
    if (users.length > 0) {
      return res.json(users);
    }
    return res.status(204).send();
  }

  async update(req: Request, res: Response) {
    try {
      const fileName = req.file;
      const { itemId } = req.params;

      if (fileName === undefined) {
        await ItensModel.update(req.body, { where: { id: itemId } });
        return res.status(204).send();
      } else {
        await ItensModel.update(
          { img: fileName.filename },
          { where: { id: itemId } }
        );

        await ItensModel.update(req.body, { where: { id: itemId } });
        return res.status(204).send();
      }
    } catch (error) {
      return res.json(error);
    }
  }
}

export default new ItensController();

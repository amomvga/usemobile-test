import express from "express";
import multer from "multer";
import ItensController from "../app/controller/ItensController";
import multerMiddleware from "../app/middleware/UploadFiles";

const itens = express.Router();
const upload = multer(multerMiddleware);

itens.get("/itens", ItensController.findAll);
itens.get("/itens/:itemId", ItensController.findItemById);
itens.post("/itens", upload.single("image"), ItensController.create);
itens.use("/files", express.static("temp"));
itens.put("/itens/:itemId", upload.single("image"), ItensController.update);
itens.delete("/itens/:itemId", ItensController.destroy);

export { itens };

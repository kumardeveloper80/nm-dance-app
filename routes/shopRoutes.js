import express from "express";
import { uploadFile } from "../middlewares/fileUpload.js";
import { addShop, getShop } from "../controllers/shopController.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

// Movies Route
router.post("/add", auth, uploadFile.fields([{
  name: 'productImage', maxCount: 1
}, {
  name: 'cardImage', maxCount: 1
}]), addShop);

router.get("/", auth, getShop);
export default router;
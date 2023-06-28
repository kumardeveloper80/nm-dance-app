import express from "express";
import { uploadFile } from "../middlewares/fileUpload.js";
import { shop } from "../controllers/shopController.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

// Movies Route
router.post("/", auth, uploadFile.fields([{
  name: 'productImage', maxCount: 1
}, {
  name: 'cardImage', maxCount: 1
}]), shop);

export default router;
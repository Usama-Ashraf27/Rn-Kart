import express from "express";

import { isAdmin, isAuth } from "../middlewares/authMiddleware.js";
import {
  createCategoryController,
  getCategoryController,
  deleteCategoryController,
  updateCategoryController
} from "../controllers/categoryController.js";

const router = express.Router();

//Category ROutes

//create Catergory
router.post("/create", isAuth,isAdmin, createCategoryController);

//Get All Category
router.get("/get-all", getCategoryController);

//Delete Category   
router.delete("/delete/:id",isAuth,isAdmin, deleteCategoryController);

//Update Category
router.put("/update/:id",isAuth,isAdmin, updateCategoryController);
export default router;

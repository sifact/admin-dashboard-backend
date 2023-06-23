import express from "express";
import { getProducts } from "./product.controller";

const router = express.Router();

// get users
router.get("/", getProducts);

export const ProductRoutes = router;

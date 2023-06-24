import express from "express";
import { getSales } from "./sales.controller";

const router = express.Router();

// get users
router.get("/", getSales);

export const SalesRoutes = router;

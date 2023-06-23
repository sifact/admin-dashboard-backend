import express from "express";
import { getCustomers } from "./user.controller";

const router = express.Router();

router.get("/", getCustomers);

export const GeneralRoutes = router;

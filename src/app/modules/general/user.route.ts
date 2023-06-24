import express from "express";
import { getCustomers, getUser } from "./user.controller";

const router = express.Router();

router.get("/:id", getUser);
router.get("/", getCustomers);

export const GeneralRoutes = router;

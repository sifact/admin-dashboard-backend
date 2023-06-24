import express from "express";
import { getAdmins } from "./management.controller";

const router = express.Router();

// get users
router.get("/", getAdmins);

export const ManagementRoutes = router;

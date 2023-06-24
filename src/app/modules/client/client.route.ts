import express from "express";

import { getGeography } from "./client.controller";

const router = express.Router();

// get users
router.get("/", getGeography);

export const ClientRoutes = router;

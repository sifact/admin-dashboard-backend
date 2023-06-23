import express from "express";

import { getUsers } from "./client.controller";

const router = express.Router();

// get users
router.get("/", getUsers);

export const ClientRoutes = router;

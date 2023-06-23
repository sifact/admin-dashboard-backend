import express from "express";
import { getTransactions } from "./transaction.controller";

const router = express.Router();

router.get("/", getTransactions);

export const TransactionsRoutes = router;

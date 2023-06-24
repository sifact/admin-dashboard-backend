import { RequestHandler } from "express";
import { getTransactionsFromDB } from "./transaction.service";

export const getTransactions: RequestHandler = async (req, res) => {
    try {
        const transactions = await getTransactionsFromDB(req.query);

        res.status(200).json(transactions);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};

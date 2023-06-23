import { RequestHandler } from "express";
import { getTransactionsFromDB } from "./transaction.service";
import { pick } from "../../../shared/pick";
import { paginationFields } from "../../../constants/pagination";

export const getTransactions: RequestHandler = async (req, res) => {
    const filters = pick(req.query, ["searchTerm", "location", "breed"]);

    const filterByPrice = pick(req.query, ["max", "min"]);

    const paginationOptions = pick(req.query, paginationFields);

    try {
        const transactions = await getTransactionsFromDB(
            filters,
            paginationOptions,
            filterByPrice
        );

        res.status(200).json(transactions);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};

import { RequestHandler } from "express";
import { getSalesFormDB } from "./sales.service";

export const getSales: RequestHandler = async (req, res, next) => {
    try {
        const result = await getSalesFormDB();

        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

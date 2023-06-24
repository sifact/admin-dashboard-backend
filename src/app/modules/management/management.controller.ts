import { RequestHandler } from "express";
import { getAdminsFromDB } from "./management.service";

export const getAdmins: RequestHandler = async (req, res, next) => {
    try {
        const result = await getAdminsFromDB();

        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

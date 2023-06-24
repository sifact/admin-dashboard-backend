import { RequestHandler } from "express";
import { getGeographyFromDB } from "./client.service";

export const getGeography: RequestHandler = async (req, res, next) => {
    try {
        const result = await getGeographyFromDB();

        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

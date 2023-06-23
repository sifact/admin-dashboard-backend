import { RequestHandler } from "express";
import { getCustomersFromDB } from "./user.service";

export const getCustomers: RequestHandler = async (req, res) => {
    try {
        const customers = await getCustomersFromDB();

        res.status(200).json(customers);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};

import { RequestHandler } from "express";
import { getCustomersFromDB, getUserFromDB } from "./user.service";

export const getUser: RequestHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await getUserFromDB(id);

        res.status(200).json(user);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};
export const getCustomers: RequestHandler = async (req, res) => {
    try {
        const customers = await getCustomersFromDB();

        res.status(200).json(customers);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};

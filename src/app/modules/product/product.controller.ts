import { RequestHandler } from "express";
import { getProductsFromDB } from "./product.service";
import { pick } from "../../../shared/pick";
import { paginationFields } from "../../../constants/pagination";

export const getProducts: RequestHandler = async (req, res) => {
    const paginationOptions = pick(req.query, paginationFields);
    try {
        const products = await getProductsFromDB(paginationOptions);

        res.status(200).json(products);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};

import { calculatePagination } from "../../../helper/paginatinHelper";
import ProductStat from "../productStat/productStat.model";
import Product from "./product.model";
import { SortOrder } from "mongoose";

type IPaginationOptions = {
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: "asc" | "desc";
};

export const getProductsFromDB = async (
    paginationOptions: IPaginationOptions
) => {
    // pagination
    const { page, limit, skip, sortBy, sortOrder } =
        calculatePagination(paginationOptions);

    // sorting
    const sortConditions: { [key: string]: SortOrder } = {};
    if (sortBy && sortOrder) {
        sortConditions[sortBy] = sortOrder;
    }
    // all conditions
    // const andConditions = {}
    // const whereConditions = andConditions

    const products = await Product.find()
        .sort(sortConditions)
        .skip(skip)
        .limit(limit);

    const productsWithStats = await Promise.all(
        products.map(async (product: any) => {
            const stat = await ProductStat.find({
                productId: product._id,
            });
            return {
                ...product._doc,
                stat,
            };
        })
    );

    return productsWithStats;
};

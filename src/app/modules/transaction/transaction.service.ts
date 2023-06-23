import { SortOrder } from "mongoose";
import { calculatePagination } from "../../../helper/paginatinHelper";
import Transaction from "./transaction.model";

type ITransactionFilters = {
    searchTerm?: string;
};

type IPriceFilters = {
    max?: number;
    min?: number;
};

type IPaginationOptions = {
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: "asc" | "desc";
};
export const getTransactionsFromDB = async (
    filters: ITransactionFilters,
    paginationOptions: IPaginationOptions,
    filterByPrice: IPriceFilters
) => {
    const { searchTerm, ...filtersData } = filters;
    const transactionSearchableFields = ["hello"];
    const { max, min } = filterByPrice;

    const andConditions = [];
    // searching
    if (searchTerm) {
        andConditions.push({
            $or: transactionSearchableFields.map((field) => ({
                [field]: {
                    $regex: searchTerm,
                    $options: "i",
                },
            })),
        });
    }
    // filtering

    if (Object.keys(filtersData).length) {
        andConditions.push({
            $and: Object.entries(filtersData).map(([field, value]) => ({
                [field]: value,
            })),
        });
    }

    const whereConditions =
        andConditions.length > 0 ? { $and: andConditions } : {};
    // pagination

    const { page, limit, skip, sortBy, sortOrder } =
        calculatePagination(paginationOptions);

    const sortConditions: { [key: string]: SortOrder } = {};
    if (sortBy && sortOrder) {
        sortConditions[sortBy] = sortOrder;
    }
    const transactions = await Transaction.find(whereConditions)
        .sort(sortConditions)
        .skip(skip)
        .limit(limit);

    return transactions;
};

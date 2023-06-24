import Transaction from "./transaction.model";

export const getTransactionsFromDB = async (query: any) => {
    // sort should look like this: { "field": "userId", "sort": "desc"}
    const { page = 1, pageSize = 20, sort = null, search = "" } = query;
    console.log(pageSize, search);

    // formatted sort should look like { userId: -1 }
    const generateSort = () => {
        const sortParsed = JSON.parse(sort);
        const sortFormatted = {
            [sortParsed.field]: (sortParsed.sort = "asc" ? 1 : -1),
        };

        return sortFormatted;
    };
    const sortFormatted: any = Boolean(sort) ? generateSort() : {};

    const transactions = await Transaction.find({
        $or: [
            { cost: { $regex: new RegExp(search, "i") } },
            { userId: { $regex: new RegExp(search, "i") } },
        ],
    })
        .sort(sortFormatted)
        .skip(page * pageSize)
        .limit(pageSize);

    const total = await Transaction.countDocuments();
    console.log(total);
    if (!transactions) throw new Error("Failed to find transactions!");

    return { total, transactions };
};

import User from "./user.model";

export const getCustomersFromDB = async () => {
    // role === user are the customers in user collection
    const customers = await User.find({ role: "user" }).select("-password");

    return customers;
};

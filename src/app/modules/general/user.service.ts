import User from "./user.model";

export const getUserFromDB = async (id: string) => {
    const user = await User.findById(id);

    return user;
};
export const getCustomersFromDB = async () => {
    // role === user are the customers in user collection
    const customers = await User.find({ role: "user" }).select("-password");

    return customers;
};

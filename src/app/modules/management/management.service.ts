import User from "../general/user.model";

export const getAdminsFromDB = async () => {
    const admins = await User.find({ role: "admin" }).select("-password");

    if (!admins) throw new Error("admins are not found...");
    return admins;
};

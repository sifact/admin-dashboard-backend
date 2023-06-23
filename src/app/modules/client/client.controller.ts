import { RequestHandler } from "express";
import { getUsersFromDB } from "./client.service";

export const getUsers: RequestHandler = async (req, res, next) => {
    try {
        const result = await getUsersFromDB();

        // sendResponse<IUser[]>(res, {
        //   success: true,
        //   statusCode: httpStatus.OK,
        //   message: 'Users are retrieved successfully',
        //   data: result,
        // });
    } catch (err) {
        next(err);
    }
};

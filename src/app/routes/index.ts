import express from "express";
import { ClientRoutes } from "../modules/client/client.route";
import { GeneralRoutes } from "../modules/general/user.route";
import { ProductRoutes } from "../modules/product/product.route";
import { TransactionsRoutes } from "../modules/transaction/transaction.route";

const router = express.Router();

const moduleRoutes = [
    {
        path: "/users",
        route: GeneralRoutes,
    },
    {
        path: "/products",
        route: ProductRoutes,
    },
    {
        path: "/transactions",
        route: TransactionsRoutes,
    },
];

moduleRoutes.forEach((routeController) =>
    router.use(routeController.path, routeController.route)
);

export default router;

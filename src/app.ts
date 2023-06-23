import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import morgan from "morgan";
import bodyParser from "body-parser";
import { ClientRoutes } from "./app/modules/client/client.route";
import routes from "./app/routes";

const app: Application = express();
app.use(cors());

// parser
app.use(express.json());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
dotenv.config();
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routes
app.use("/api/v1", routes);

// server
app.get("/", (req, res) => res.send("Admin-dashboard server is running..."));

export default app;

import mongoose from "mongoose";

import app from "./app";

import { Server } from "http";
import config from "./config";

async function main() {
    let server: Server;

    try {
        await mongoose.connect(config.databaseURL as string);
        console.log("Database is connected...");

        server = app.listen(config.port, () => {
            console.log(`Dashboard server is running on ${config.port}`);
        });
    } catch (error) {
        console.log(`Failed to connect database`, error);
    }
}

main();

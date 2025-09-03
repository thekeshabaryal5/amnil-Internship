import { config } from "dotenv";

config();

export const port = process.env.PORT || "5000";
export const dbURL = process.env.DATABASEURL;
export const dbName = process.env.DATABASENAME;

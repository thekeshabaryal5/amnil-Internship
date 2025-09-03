import express, { json } from "express";
import { port } from "./src/const.js";
import connectToDB from "./src/connectToDatabase/connectToMongoDB.js";

//creating an express app
const app = express();

// enabling app to use json format
app.use(json());

// running app on a port and connecting to db
app.listen(port, () => {
  console.log(`Express app running at port ${port}`);
  connectToDB();
});

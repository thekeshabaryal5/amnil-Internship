import express, { json } from "express";
import { port } from "./src/const.js";
import connectToDB from "./src/connectToDatabase/connectToMongoDB.js";
import blogRouter from "./src/route/blog.route.js";
import errorMiddleware from "./src/middleware/error.middleware.js";

//creating an express app
const app = express();

// enabling app to use json format
app.use(json());

// running app on a port and connecting to db
app.listen(port, () => {
  console.log(`Express app running at port ${port}`);
  connectToDB();
});

app.use("/blog", blogRouter);

app.use(errorMiddleware);

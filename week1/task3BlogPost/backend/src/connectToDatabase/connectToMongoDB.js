import mongoose from "mongoose";
import { dbName, dbURL } from "../const.js";

const connectToDB = async () => {
  await mongoose.connect(`${dbURL}/${dbName}`);
  console.log(`Connected to database ${dbName} successfully`);
};
export default connectToDB;

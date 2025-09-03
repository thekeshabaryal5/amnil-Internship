import { model } from "mongoose";
import blogPostSchema from "../schema/blogPost.schema.js";

export const Blog = model("Blog", blogPostSchema);

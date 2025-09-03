import { Schema } from "mongoose";

const blogPostSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title of the blog is required"],
    },
    body: {
      type: String,
      required: [true, "Body of the blog is required"],
    },
    authorName: {
      type: String,
      required: [true, "Author name for the blog is required"],
    },
  },
  {
    timestamps: true,
  }
);

export default blogPostSchema;

import { Schema } from "mongoose";

const blogPostSchema = new Schema(
  {
    title: {
      type: String,
    },
    body: {
      type: String,
    },
    authorName: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default blogPostSchema;

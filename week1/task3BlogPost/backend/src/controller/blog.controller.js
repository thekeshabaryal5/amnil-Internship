import expressAsyncHandler from "express-async-handler";
import { Blog } from "../model/models.js";

//create blog controller
export const createBlogController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await Blog.create(req.body);
    res.status(201).json({
      success: true,
      message: "New blog created successfully",
      result: result,
    });
  }
);

// read all blogs
export const readAllBlogController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await Blog.find({});
    res.status(200).json({
      success: true,
      message: "Read all blog successfully",
      result: result,
    });
  }
);

// read specific blog
export const readSpecificBlogController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await Blog.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "Read specified blog successfully",
      result: result,
    });
  }
);

// update blog
export const updateBlogController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(201).json({
      success: true,
      message: "Blog updated successfully",
      result: result,
    });
  }
);

// delete blog
export const deleteBlogController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
      result: result,
    });
  }
);

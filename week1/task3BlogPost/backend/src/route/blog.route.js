import { Router } from "express";
import {
  createBlogController,
  deleteBlogController,
  readAllBlogController,
  readSpecificBlogController,
  updateBlogController,
} from "../controller/blog.controller.js";
import blogValidationRule from "../validation/blog.validation.js";
import validatePerson from "../middleware/personValidation.middleware.js";

let blogRouter = Router();
blogRouter
  .route("/")
  .post(validatePerson(blogValidationRule), createBlogController)
  .get(readAllBlogController);

blogRouter
  .route("/:id")
  .get(readSpecificBlogController)
  .patch(updateBlogController)
  .delete(deleteBlogController);

export default blogRouter;

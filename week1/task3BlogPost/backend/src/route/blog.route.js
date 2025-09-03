import {
  createBlogController,
  deleteBlogController,
  readAllBlogController,
  readSpecificBlogController,
  updateBlogController,
} from "../controller/blog.controller.js";

let blogRouter = Router();
blogRouter.route("/").post(createBlogController).get(readAllBlogController);

blogRouter
  .route("/:id")
  .get(readSpecificBlogController)
  .patch(updateBlogController)
  .delete(deleteBlogController);

export default blogRouter;

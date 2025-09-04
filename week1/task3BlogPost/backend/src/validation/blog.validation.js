import Joi from "joi";

// defining validation rule for blog
const blogValidationRule = Joi.object()
  .keys({
    title: Joi.string().required().min(3).max(50).messages({
      "any.required": "Title of the blog post is required",
      "string.base": "Title must be a string",
      "string.min": "Title must contain at least 3 characters",
      "string.max": "title can be at most 50 characters long",
    }),
    body: Joi.string().required().min(10).messages({
      "any.required": "Body of the blog is required",
      "string.min": "Blog must be at least 10 characters long",
    }),
    authorName: Joi.string().required().min(3).messages({
      "any.required": "Author name is required",
      "string.base": "Author name must be a string",
      "string.min": "Author name must be at least 3 characters long",
    }),
  })
  .unknown(false);
export default blogValidationRule;

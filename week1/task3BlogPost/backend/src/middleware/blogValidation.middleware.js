// middleware to validate the blog
const validatePerson = (validationRule) => {
  return (req, res, next) => {
    let data = validationRule.validate(req.body);
    let error = data.error;
    if (error) {
      error.status = 400;
      next(error);
    } else {
      next();
    }
  };
};

export default validatePerson;

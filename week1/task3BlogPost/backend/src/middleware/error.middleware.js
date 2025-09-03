// error middleware to handle any error
const errorMiddleware = (err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal server error",
  });
};

export default errorMiddleware;

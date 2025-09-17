const asyncHandler = (fn) => (req, res, next) => fn(req, res, next).catch(next);

const GlobalErrorHandler = (err, req, res, next) => {
  console.log(err);
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message,
  });
};

module.exports = {
  asyncHandler,
  GlobalErrorHandler,
};

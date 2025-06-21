const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    res.status(error.code || 500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = asyncHandler;

// this method is used for:
// we don't use everywhere the try catch block we write simple code and import this function there...

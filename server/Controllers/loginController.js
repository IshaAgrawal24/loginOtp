exports.testLogin = async (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      message: "server has started!",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

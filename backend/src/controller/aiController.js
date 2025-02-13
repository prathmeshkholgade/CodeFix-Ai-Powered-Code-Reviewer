const ExpressError = require("../utils/ExpresssError");
const alResponse = require("../services/alService");

module.exports.getAiResponse = async (req, res, next) => {
  const code = req.body.code;
  if (!code) {
    return next(new ExpressError("prompt is required", 404));
  }
  const alRes = await alResponse(code);
  res.status(200).json(alRes);
};

const jwt = require("jsonwebtoken");
const HttpHandler = require("../helper/HttpHandler");
module.exports = {
  authenticateToken: (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) return HttpHandler.unauthorized(res);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return HttpHandler.serverError(res, err);
      req.user = user;
      next();
    });
  },
};

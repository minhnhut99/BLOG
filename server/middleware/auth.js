const jwt = require("jsonwebtoken");
const modelUser = require("../models/modelUser");
const authenticationToken = async (req, res, next) => {
  let token;
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer")) {
    try {
      // extract token from authHeader string
      token = authHeader.split(" ")[1];

      // t
      const decoded = jwt.verify(token, process.env.TOKEN_KEY);

      // find modelUser's obj in db and assign to req.modelUser
      req.modelUser = await modelUser.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, invalid token");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token found");
  }
};

module.exports = authenticationToken;

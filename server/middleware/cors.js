const cors = require("cors");

module.exports = {
  setHeaders: (app) => {
    const corsOptions = {
      origin: "http://localhost:3000",
      optionsSuccessStatus: 200,
    };

    app.use(cors(corsOptions));
    app.use(function (_req, res, next) {
      // Website you wish to allow to connect
      // res.setHeader('Access-Control-Allow-Origin', Config.WEB_APP_HOST);
      res.setHeader("Access-Control-Allow-Origin", "*");

      // Request methods you wish to allow
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
      );

      // Request headers you wish to allow
      res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With, content-type",
        "Session"
      );

      // Set to true if you need the website to include cookies in the requests sent
      // to the API (e.g. in case you use sessions)
      res.setHeader("Access-Control-Allow-Credentials", true);

      // Pass to next layer of middleware
      next();
    });
  },
};

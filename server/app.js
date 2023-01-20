require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./database/connectDB");

const cors = require("./middleware/cors");
const app = express();

connectDB();
cors.setHeaders(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());
app.use(require("./routes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server da khoi dong tai port ${PORT}`));

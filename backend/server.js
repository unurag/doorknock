const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const cors = require('cors');
const cookieParser = require("cookie-parser");
require("dotenv").config();
require('./services/accountController/resetSimLimit');

const app = express();

const port = process.env.PORT || 5001;

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use("/v1/accounts", require("./routes/accountRoutes"));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`DoorKnock server has started at port ${port}`);
});
const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const cupcakesRouter = require("./Router/cupcakes");

app.use(cors());
app.use("/", cupcakesRouter);

app.listen(port, () => console.log(`listening on ${port}`));

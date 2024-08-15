const express = require('express');
const cors = require("cors")
const { accountRouter } = require("./routes/account.route");
const { userRouter } = require("./routes/user.route");
const { categoryRouter } = require('./routes/category.route');

const app = express();

app.use(cors());
app.use(express.json())

app.use("/accounts", accountRouter);
app.use("/categories", categoryRouter);
app.use("/users", userRouter);
app.use(express.json());

app.listen(3001, () => {
    console.log("Сервер ажиллаж байна 3001")
})
const express = require('express');
const cors = require("cors")
const { accountRouter } = require("./routes/account.route");
const { userRouter } = require("./routes/user.route");
const { categoryRouter } = require('./routes/category.route');
const { authRouter } = require('./routes/auth.route');

const app = express();

app.use(cors());
app.use(express.json())

app.use("/accounts", accountRouter);
app.use("/categories", categoryRouter);
app.use("/user", userRouter);
app.use("/auth", authRouter)


app.listen(3001, () => {
    console.log("Сервер ажиллаж байна 3001")
})
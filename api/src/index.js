const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
app.get("/", (req, res) => {
    res.send("Hello World !")
})
app.get("/", (req, res) => {
    res.send("Hello world!");
})
app.listen(3001, () => {
    console.log("Server is running on port 3001")
})

const fs = require("fs")
const path = require("path")


const getAllAccounts = async (req, res) => {
    try {
        const filePath = path.join(__dirname, "..", "data", "account.json");
        const rawData = fs.readFileSync(filePath);
        const account = JSON.parse(rawData);
        res.json(accounts);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Iternal Server Error" });
    }
};
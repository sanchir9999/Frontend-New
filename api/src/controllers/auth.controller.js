const { readJson } = require("../utils/index")
const login = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body, "===body");

    const users = readJson("user.json");
    const user = users.find(
        (user) => user.email === email && user.password === password
    );
    if (
        user
    ) {
        res.status(200).json({ massege: "Login succesful" })
    }
    {
        res.status(401).json({ massege: "Login unsuccesful" })
    }
};

module.exports = { login }; 

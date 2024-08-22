const { readJson } = require("../utils/index");
const jwt = require("jsonwebtoken");
const login = async (req, res) => {
    const { email, password } = req.body;
    const users = readJson("user.json");
    const user = users.find(
        (user) => user.email === email && user.password === password
    );
    if (!user) return res.status(401).json({ message: "Invalid credentials" });
    const token = jwt.sign(
        {
            username: user.username,
            email: user.email,
            id: user.id,
        },
        process.env.JWT_SECRET
    );
    res.json({
        token,
        user: {
            username: user.username,
            email: user.email,
            id: user.id,
        }
    }) 

    if (
        user
    ) {
        res.status(200).json({ massege: "Login succesful" })
    }
    else {
        res.status(401).json({ massege: "Login unsuccesful" })
    }
};
const register = async (req, res) => {
    const { username, email, password } = req.body;
    const users = readJson("user.json");
    const user = users.find((user) => user.email === email);
    if (user) return res.status(400).json({
        message: "User already exists"
    });
    const newUser = {
        id: v4(),
        username,
        email,
        password,
    };
    users.push(newUser);
    saveJson("users.json", users);
    res.json(newUser);
};


module.exports = { login, register };

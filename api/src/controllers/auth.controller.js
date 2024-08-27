const { readJson, saveJson } = require("../utils/index");
const jwt = require("jsonwebtoken");
const { v4 } = require("uuid");

const login = async (req, res) => {
    const { email, password } = req.body;
    const users = readJson("user.json");
    const user = users.find(
        (user) => user.email === email && user.password === password
    );

    if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
        {
            email: user.email,
            id: user.id,
            // Хэрэв user.json файлд username байхгүй бол доорх мөрийг устгана уу
            username: user.username,
        },
        process.env.JWT_SECRET
    );

    return res.json({
        token,
        user: {
            email: user.email,
            id: user.id,
            // Хэрэв user.json файлд username байхгүй бол доорх мөрийг устгана уу
            username: user.username,
        }
    });
};

const register = async (req, res) => {
    const { username, email, password } = req.body;
    const users = readJson("user.json");
    const user = users.find((user) => user.email === email);

    if (user) {
        return res.status(400).json({
            message: "User already exists"
        });
    }

    const newUser = {
        id: v4(),
        username,  // Хэрэв username байхгүй бол үүнийг ашиглахгүй
        email,
        password,
    };

    users.push(newUser);
    saveJson("user.json", users);  // "users.json" биш "user.json" ашиглана
    return res.json(newUser);
};

module.exports = { login, register };

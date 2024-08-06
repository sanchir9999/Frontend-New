const { json } = require("express");
const fs = require("fs");
const path = require("path");

const getAllCategories = async (req, res) => {
    try {
        const filePath = path.join(__dirname, "..", "data", "categories.json");

        const rawData = fs.readFileSync(filePath);

        const categories = JSON.parse(rawData);

        res.json(categories);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "error garsaan bro" });
    }
};

const createCategory = async (req, res) => {
    try {
        const filePath = path.join(__dirname, "..", "data", "categories.json");
        const rawData = fs.readFileSync(filePath);
        const categories = JSON.parse(rawData);
        const newCategory = req.body;
        categories.push(newCategory);
        fs.writeFileSync(filePath, JSON.stringify(categories, null, 2));
        res.json(newCategory);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "error garsaan bro" });
    }
};

module.exports = { getAllCategories, createCategory };
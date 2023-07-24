const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const User = require("../models/User");

const adminLayout = "../views/layouts/admin";

/**
 * GET /
 * Admin - Login Page
 */
router.get("/admin", async (req, res) => {
    try {
        const locals = {
            title: "Admin",
            description: "Simple Blog created with NodeJs, Express & MongoDb",
        };

        res.render("admin/index", { locals, layout: adminLayout });
    } catch (err) {
        console.log(err);
    }
});

/**
 * POST /
 * Admin - Check Login
 */
router.post("/admin", async (req, res) => {
    try {
        const { username, password } = req.body;

        res.redirect("admin");
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;

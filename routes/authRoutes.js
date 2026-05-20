const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/authMiddleware"); // Add this
const {
    signup,
    login,
    getUsers,     // ← ADD
    getUserById,  // ← ADD
} = require("../controllers/authController");

router.post("/signup", signup);
router.post("/login", login);
router.get("/users", verifyToken, getUsers);           // ← ADD
router.get("/users/:id", verifyToken, getUserById);    // ← ADD

module.exports = router;
const express = require("express");
const router = express.Router();

const {
  getUser,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../controllers/userController.js");
const authMiddleware = require("../middlewares/authMiddleware.js");

router.get("/", authMiddleware, getUser);
router.get("/:id", authMiddleware, getUserById);
router.put("/:id", authMiddleware, updateUserById);
router.delete("/:id", authMiddleware, deleteUserById);

module.exports = router;
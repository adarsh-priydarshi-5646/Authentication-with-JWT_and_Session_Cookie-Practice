const express = require("express");
const router = express.Router();

const {
  getUser,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../controllers/userController.js");

router.get("/", getUser);
router.get("/:id", getUserById);
router.put("/:id", updateUserById);
router.delete("/:id", deleteUserById);

module.exports = router;
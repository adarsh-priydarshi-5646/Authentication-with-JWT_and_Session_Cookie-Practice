const express = require("express");
const router = express.Router();

const {
  getUser,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../controllers/userController.js");
const authMiddleware = require("../middlewares/authMiddleware.js");
const validate = require("../middlewares/validateMiddleware");
const { idParamSchema, updateUserSchema } = require("../validators/user.validators");

router.get("/", authMiddleware, getUser);
router.get("/:id", authMiddleware, validate(idParamSchema, "params"), getUserById);
router.put("/:id", authMiddleware, validate(idParamSchema, "params"), validate(updateUserSchema, "body"), updateUserById);
router.delete("/:id", authMiddleware, validate(idParamSchema, "params"), deleteUserById);

module.exports = router;
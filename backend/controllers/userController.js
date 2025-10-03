const prisma = require("../config/db.config");


const getUser = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


const getUserById = async (req, res) => {
  const { id } = req.params;
  const userId = Number(id);

  try {
    const userById = await prisma.user.findUnique({
      where: { 
        id: userId 
      },
    });
    if (!userById) return res.status(404).json({ message: "User not found" });
    res.json(userById);

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


const updateUserById = async (req, res) => {
  const { id } = req.params;
  const userId = Number(id);
  const { name, email } = req.body;

  try {
    const updateUser = await prisma.user.update({
      where: { id: userId },
      data: { name, email },
    });
    res.json(updateUser);

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


const deleteUserById = async (req, res) => {
  const { id } = req.params;
  const userId = Number(id);

  try {
    const deleteUser = await prisma.user.delete({
      where: { id: userId },
    });
    res.json(deleteUser);

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getUser,
  getUserById,
  updateUserById,
  deleteUserById,
};

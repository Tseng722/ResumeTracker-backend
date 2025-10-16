const { User, Education } = require("../models");
// const { getProfile } = require("../services/userService");
const userService = require("../services/userService");

// 建立使用者
exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 取得所有使用者
exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 取得單一使用者
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// 刪除使用者
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    await user.destroy();
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserPersonalExperience = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await userService.getProfile(userId);
    res.json(user); // 這裡才回傳前端
  } catch (err) {
    if (err.message === "UserNotFound") {
      return res.status(404).json({ message: "使用者不存在" });
    }
    console.error(err);
    res.status(500).json({ error: err.message });
  }

};
// 更新使用者
exports.updateUserPersonalExperience = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({ error: 'User not found' });
    await user.update(req.body);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createEducation = async (req, res) => {
  try {
    const userId = req.user.id;
    const education = await userService.createEducation(userId, req.body);
    res.json(education);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.message });
    
  }
};

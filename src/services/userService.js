const userModel = require("../models/User");
const db = require("../db");
const { Education } = require("../models");

async function loginUser(email, password) {
  const user = await userModel.findUserByEmail(email);
  if (!user) return null;

  const match = await userModel.comparePassword(password, user.password);
  if (!match) return null;

  return user;
}

async function getProfile(userId) {
  const user = await userModel.findByPk(userId);
  if (!user) throw new Error("UserNotFound");
  return user;
}

async function registerUser(userData) {
  return userModel.createUser(userData);
}

async function createEducation(userId,data){
  if (!data.degree || !data.university || !userId) {
    throw new Error("缺少必要欄位：degree、university、userId");
  }
  data.userId = userId;

  // 檢查 userId 是否存在
  const user = await User.findByPk(data.userId);
  if (!user) {
    throw new Error("無效的 userId，使用者不存在");
  }
  const education = await Education.create(data);
  return education;
};

module.exports = {
  loginUser,
  getProfile,
  registerUser,
  createEducation,
};

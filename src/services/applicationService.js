const {User,Applications} = require("../models");
const db = require("../db");

async function createApplication(userId,data){
    
    data.userId = userId;
  
    const user = await User.findByPk(data.userId);
    if (!user) {
      throw new Error("無效的 userId，使用者不存在");
    }
    const application = await Applications.create(data);
    return application;
};
async function getApplicationsByUser(userId){
  return await Applications.findAll({
    where: { userId: userId },
    order: [['applicationDate', 'DESC']],
  });
};

module.exports = {
    createApplication,
    getApplicationsByUser,
};
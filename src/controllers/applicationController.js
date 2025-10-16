const { Applications } = require("../models");
const applicationService = require("../services/applicationService");
exports.createApplication = async (req, res) => {
    try {
      const userId = req.user.id;
      const application = await applicationService.createApplication(userId, req.body);
      res.json(application);
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ error: err.message });
      
    }
  };
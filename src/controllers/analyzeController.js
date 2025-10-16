// 假設這裡有串 Gemini API 的服務
const geminiService = require('../services/geminiService');

exports.handleAnalyzeResume = async (req, res) => {
  try {
    // const { experience, jd, companyName } = req.body;
    const { experience = '', jd = '' } = req.body;

    // 呼叫 Gemini API 取得分析結果
    const resumeResult = await geminiService.analyzeResume({ experience, jd });

    // 回傳結果
    res.json({ resumeResult });
  } catch (error) {
    console.error('分析錯誤:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
exports.handleAnalyzeJD = async (req, res) => {
  try {
   
    const { jd = '' } = req.body;
  
    const JDResult = await geminiService.analyzeJD({ jd });


    res.json({ JDResult });
  } catch (error) {
    console.error('分析錯誤:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.handleAnalyzeATS = async (req, res) => {
  try {
   
    const { experience = '', jd = '' } = req.body;
  
    const ATSResult = await geminiService.analyzeATS({ experience, jd });

    res.json({ ATSResult });
  } catch (error) {
    console.error('分析錯誤:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


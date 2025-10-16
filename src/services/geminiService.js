const axios = require('axios');

const GEMINI_API_URL = process.env.GEMINI_API_URL;
const API_KEY = process.env.GEMINI_API_KEY;


exports.analyzeResume = async ({ experience, jd}) => {
    const analyzeResumePrompt = process.env.ANALYZE_RESUME_PROMPT;
    const promptText = `這是我的經歷：
${experience}

這是公司職缺描述：
${jd}
${analyzeResumePrompt}
`;


    const geminiBody = {
        contents: [
          {
            parts: [
              { text: promptText }
            ]
          }
        ]
      };

  try {
    const gResp = await axios.post(`${GEMINI_API_URL}?key=${API_KEY}`, geminiBody, {
        headers: { 'Content-Type': 'application/json' },
        timeout: 20000
      });

    const resumeResult = gResp.data?.candidates?.[0]?.content?.parts?.[0]?.text || '未收到建議';
    // console.log(resumeResult);

    return resumeResult.trim();
  } catch (error) {
    console.error('Gemini error:', err.response?.data || err.message);
    // res.status(500).json({ resumeResult: '呼叫 Gemini 發生錯誤，請檢查後端日誌' });
    throw error;
  }
};

exports.analyzeJD = async ({jd}) => {
  const analyzeJDPrompt = process.env.ANALYZE_JD_PROMPT;
  const promptText = `${analyzeJDPrompt}
  這是公司職缺描述：${jd}`;
  const geminiBody = {
    contents: [
      {
        parts: [
          { text: promptText }
        ]
      }
    ]
  };
  try {
    const gResp = await axios.post(`${GEMINI_API_URL}?key=${API_KEY}`, geminiBody, {
        headers: { 'Content-Type': 'application/json' },
        timeout: 20000
      });

    const JDResult = gResp.data?.candidates?.[0]?.content?.parts?.[0]?.text || '未收到建議';
    // console.log(resumeResult);

    return JDResult.trim();
  } catch (error) {
    console.error('Gemini error:', err.response?.data || err.message);
    // res.status(500).json({ resumeResult: '呼叫 Gemini 發生錯誤，請檢查後端日誌' });
    throw error;
  }
  
};


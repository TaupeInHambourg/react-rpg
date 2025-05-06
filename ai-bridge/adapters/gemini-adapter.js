const { GoogleGenAI } = require('@google/genai')

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })

const generateImage = async () => {
  // console.log('Gen image')
  // TODO: Find a free api to generate images
  // const response = await ai.models.generateContent({
  //   model: 'gemini-2.0-flash',
  //   contents: 'Sommes-nous des fleurs ?'
  // })
  // console.log(response.text)
}

const generateText = async (prompt) => {
  const response = await ai.models.generateContent({
    model: 'gemini-2.0-flash',
    config: {
      responseMimeType: 'application/json'
    },
    contents: prompt
  })
  return response.candidates[0]?.content?.parts[0]?.text
}

module.exports = { generateImage, generateText }

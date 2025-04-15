// const { GoogleGenAI } = require('@google/genai')

// const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })

const generateImage = async () => {
  console.log('Gen image')
  // TODO: Find a free api to generate images
  // const response = await ai.models.generateContent({
  //   model: 'gemini-2.0-flash',
  //   contents: 'Sommes-nous des fleurs ?'
  // })
  // console.log(response.text)
}

module.exports = { generateImage }

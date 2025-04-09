const { AzureOpenAI } = require("openai");
const dotenv = require("dotenv");
dotenv.config();
const endpoint = process.env["IMAGEN_ENDPOINT"];
const apiKey = process.env["IMAGEN_API_KEY"];

async function ganarateImage(prompt) {
  const size = "1024x1024";
  const n = 1; //生成する画像の枚数　dall-e-3 は 1 枚のみ
  const deploymentName = "ここに dell-e-3 モデルのデプロイメント名を記述";
  const apiVersion = "2024-06-01"; 

  try {
      const client = new AzureOpenAI({endpoint,apiKey,apiVersion,deployment: deploymentName});
      const results = await client.images.generate({
          prompt,
          size: size,
          n: n,
          style: "vivid", // or "natural"
      });

      return results.data[0].url;
  }catch (err){
      return err.message;
  }
}

// ganarateImage("賢いイルカのアシスタントを描いてください")
//     .then(url => console.log(url))

module.exports = {ganarateImage};

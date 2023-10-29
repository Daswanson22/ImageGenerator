const OpenAIApi = require("openai");

const openai = new OpenAIApi({
  apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
});

const generateImage = async (req, res) => {
    try {
        const response = await openai.images.generate({
            promp: "Dog flying a plane",
            n:1,
            size: "512x512"
        });
        const imageURL = response.data.data[0].url;

        res.status(200).json({
            success:true,
            data:imageURL
        })
    }catch(error){
        res.status(400).json({
            success:false,
            error: "Image could not be generated"
        })
    }
}
module.exports = { generateImage };
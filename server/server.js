const express= require ("express")
const cors = require("cors")
const OpenAi = require("openai")

const app = express()
const PORT= 3002
app.use(cors())

app.get("/api/music", async(req, res)=>{
    const OPENAI_API_KEY= process.env.API_KEY
    const openai= new OpenAi({apiKey: OPENAI_API_KEY})
    const aiModel= "gpt-3.5-turbo"
    const inputJson = req.query.inputs

    if(inputJson && inputJson.length){
        const prompt=[]
        prompt.push('Based on following inputs, suggest some good music')
        prompt.push(inputJson)

        const messages= [
            {
                role: "system",
                content: prompt.join(''),
            }
        ] 
        const completion = await openai.chat.completions.create({
            model: aiModel,
            messages
        })
        const aiResponse = completion.choices[0].message.content
        res.json({aiResponse})
    }
    else{
        res.json({message: "No input provided"})
    }
})

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))
const express=require('express') 
const cors=require('cors')
const app=express()
const port=5000;


app.use(cors())

app.get('/',(req,res)=>{
    res.send("app is listening in /")
})

app.get('/about',(req,res)=>{
    res.send("about page ha ah 👏🦸‍♂️")
})
app.get('/notes',(request,resposne)=>{
    const notes=[

        {
            text:"Do home word",
            link:"https://foodpanda.com"
        },
        {
            text:"eating ",
            link:" https://foodpanda.com "
        },
        {
            text:"sleep ",
            link:"https://foodpanda.com  "
        },
        {
            text:"helping  ",
            link:"https://foodpanda.com  "
        },
    ]
    resposne.json({notes})
})
app.listen(port,()=>{
    console.log("app is listening " + port);
})
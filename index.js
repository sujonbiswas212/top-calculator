const express = require('express');
const app = express();
const port = 5000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.get('/',(req,res)=>{
     res.sendFile(__dirname + '/index.html')
})

app.get('/circle',(req,res)=>{
     res.sendFile(__dirname + '/circle/circle.html')
})
app.get('/triangle',(req,res)=>{
     res.sendFile(__dirname + '/tringle.html')
})

app.post("/triangle",(req,res)=>{
     const base = req.body.base;
     const height = req.body.height;
     const area = 0.5*base*height;
     res.send(`<h2>Area of Triangle is  ${area}</h2>`);
})

app.post("/circle",(req,res)=>{
     const base = req.body.radius;
     const area = Math.PI*base*base;
     res.send(`<h2>Area of circle is  ${area}</h2>`);
})

app.use((req,res)=>{
     res.sendFile(__dirname + '/error.html')
})

app.listen(port,()=>{
     console.log(`server ok at http://localhost:${port}`)
})


require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about',(req,res)=>{
    res.send('<h1>I am Jhansi and I am a React Native Developer.</h1>')
})

app.get('/blog',(req,res)=>{
    res.send('<h1>Welcome to my Blog</h1>')
})

app.get('/letsconnect',(req,res)=>{
    res.send('<h1><a href="https://www.linkedin.com/in/jhansimathivanan/">My LinkedIn Profile</a></h1>')
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
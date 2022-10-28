const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

app.get('/', (req, res)=>{
    res.send('E learning run')
})
app.listen(port, ()=>{
    console.log('E learning server running on port', port);
})
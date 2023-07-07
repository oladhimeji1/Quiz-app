const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// Write to file
app.get('/write-name', (req, res) => {
    const {name} = req.query
    fs.writeFile(
        path.join(__dirname, './data', 'demo.json'), 
        `{"names": [{"name":"${name}","id": 1}]}`, err =>{
        if(err) throw err;
        console.log('Written!')
        res.send(`names: [{"name":"${name}","id": 1}]`)
    });
});

// Read from file
app.get('/read-questions', (req, res) => {
    fs.readFile(
    path.join(__dirname, './data', 'db.json'), 
    'utf8', (err, data) =>{
        if(err) throw err;
        res.send(data)
    });
    
})


app.listen(5000, () => console.log('Running on port 5000'))
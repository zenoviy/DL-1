const express = require("express");
const os = require('os');
const fs = require('fs');

const path = require('path');
const app = express();





/*const http = require('http');

//const process.env.__HOST = "127.0.0.1", __PORT = 3500;
process.env.__HOST = "127.0.0.1";
process.env.__PORT = 3500;
const app = http.createServer((request, response) => {
    response.statusCode = 200;
    const fileToSend = [
        {
            "text": "Hello",
            "age": 3
        }
    ];
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(fileToSend))
})*/

process.env.__HOST = "127.0.0.1";
process.env.__PORT = 3500;

const data = [
    {
        "name": "Jack",
        "age": 3
    },{
        "name": "Smidth",
        "age": 32
    }
];




app.use("/home", express.static(path.join(__dirname + '/public')));





app.get("/home", (req, res) => {
let link = path.join(__dirname, "/public/page/index.html")
    console.log(__dirname)
    res.sendFile(link)
});





app.get("/home/users", (req, res) => {
    const fileToSend = [
        {
            "text": "Hello",
            "age": 3
        }
    ];
    res.setHeader('Content-Type', 'application/json');
    res.send(fileToSend)
});



app.get("/create-text", (req, res) => {
    const data = "Hello world";
    fs.writeFile('hello.txt', data, (err) => {
        if (err) throw console.log(err)
        console.log('File has been created')
        res.send("'File has been created'")
    })
});

app.get("/json-data", (req, res) => {

        res.send(data)
});




app.listen(process.env.__PORT, process.env.__HOST, () => {
    console.log(`Server up and runing at ${process.env.__HOST} port ${process.env.__PORT} new`);
})

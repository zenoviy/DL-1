const express = require("express");
const os = require("os");
const fs = require("fs");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

const cors = require("cors");



const path = require("path");
const app = express();


const { getAllUsers } = require("./business/getUsers");
const { postSingleUser } = require("./business/postUsers");
const { deleteSingleUser } = require("./business/deleteSingleUser");


app.use("/home", express.static(path.join(__dirname + '/public')));

const hbs = exphbs.create({
    extname: ".handlebars",
    partialsDir: __dirname + "/views/partials",
    defaultLayout: "main.handlebars"
})
app.engine('handlebars', hbs.engine);
app.set("view engine", "handlebars");


process.env.__HOST = "127.0.0.1";
process.env.__PORT = 3500;

app.use(bodyParser.urlencoded({ extended: false }));


app.use("/home-page", express.static(path.join(__dirname + '/public')));
app.get("/home-page", function (req, res) {
    let fileLink = path.join(__dirname + "/public/db/");

    fs.readFile(fileLink + "product.json", (error, data) => {
        if(error) console.log(error);
        
        let productData = JSON.parse(data).map(item => {
            let newItem = Object.assign({}, item, { previewUrl : item.image[0]} );
            return newItem;
        });
        
        const pageInfo = {
        title: "home page handlebars",
        shopData: productData,
        pagename: true
    }
        res.render('home', {
            info: pageInfo
        });
    })
})
app.use("/about-page", express.static(path.join(__dirname + '/public')));
app.get("/about-page", function (req, res) {
    const pageInfo = {
        title: "about page",
        description: "A page dedicated information about us",
        pagename: false
    }
    res.render('about', {
        info: pageInfo
    });
})


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


const data = [
    {
        "name": "Jack",
        "age": 3
    },{
        "name": "Smidth",
        "age": 32
    }
];






app.get("/home", (req, res) => {
let link = path.join(__dirname, "/public/page/index.html")
    console.log(__dirname);
    res.sendFile(link);
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





app.get("/get-product", cors(), (req, res) => {
    let fileLink = path.join(__dirname + "/public/db/");

    //console.log("work")
    fs.readFile(fileLink + "product.json", (error, data) => {
        if(error) {
            console.log(error);
            throw res.send({ message: "ERROR HAS BEEN OCCURED", dataBody: false});
        }

        let productData = JSON.parse(data);
        res.send({ message: "GET PRODUCT DATA", dataBody: productData });
    })
})




app.use("/app-user-work", cors(), bodyParser.json())
app.route("/app-user-work")
    .get( getAllUsers )
    .post( postSingleUser )
    .delete( deleteSingleUser )



app.use(express.static(path.join(__dirname, "public/build")));
//app.use( express.static("public"));    
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "public/build", "index.html"));
});

app.listen(process.env.__PORT, process.env.__HOST, () => {
    console.log(`Server up and runing at ${process.env.__HOST} port ${process.env.__PORT} new`);
})

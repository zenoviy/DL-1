const fs = require('fs');
const path = require("path");



const postSingleUser = (req, res) => { 
    let userDataLink = path.join(__dirname + "/../public/db/");
    if(!req.body) return res.send({ message: "NO USER DATA IN BODY"})
    req.body.id = new Date().getTime();

    if(!fs.existsSync(userDataLink + "/userData.json")){
        fs.writeFile(userDataLink + "/userData.json", JSON.stringify([].concat(req.body)), (error) => {
            if(error) {
                console.log(error)
                return res.send({ message: "ERROR has been occured", dataBody: error})
            }
        })
        return res.send({ message: "POST HAS BEEN ADDED", dataBody: [].concat(req.body)})
    }

    fs.readFile(userDataLink + "/userData.json", (error, data) => {
        let userData = JSON.parse(data);
        let existUser = userData.find(user => user.userMail == req.body.userMail || user.nickName == req.body.nickName);
        
        if(existUser) return res.send({ message: "USER ALREADY EXIST WITH THIS EMAIL OR NICKNAME", dataBody: false});
        userData = userData.concat(req.body);
        fs.writeFile(userDataLink + "/userData.json", JSON.stringify(userData), (error) => {
            if(error) {
                console.log(error)
                return res.send({ message: "ERROR has been occured", dataBody: error})
            }
        })
    res.send({ message: "POST SOME USER", dataBody: userData}) 
    })
}


module.exports = {
    postSingleUser
}
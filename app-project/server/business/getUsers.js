const fs = require('fs');
const path = require("path");



const getAllUsers = (req, res) => { 
    let userDataLink = path.join(__dirname + "/../public/db/");

    if(!fs.existsSync(userDataLink + "/userData.json")){
        return res.send({ message: "NO USER DATA IN STORAGE", dataBody: false})
    }

    fs.readFile(userDataLink + "/userData.json", (error, data) => {
        if(error) return console.log(error)

        let userData = JSON.parse(data);
        let filteredUserData = userData.map(user => {
            return {
                id: user.id,
                nickName: user.nickName
            }
        })
        return res.send({ message: "GET ALL USERS", dataBody: filteredUserData })
    })
}

//exports.getAllUsers = getAllUsers;
module.exports = {
    getAllUsers
}

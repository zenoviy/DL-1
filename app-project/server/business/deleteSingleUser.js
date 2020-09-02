const fs = require('fs');
const path = require("path");


const deleteSingleUser = (req, res) => { 
    let userDataLink = path.join(__dirname + "/../public/db/");

    fs.readFile(userDataLink + "/userData.json", (error, data) => {
        let userData = JSON.parse(data);
        let haders = req.headers;
        let deletedUser = userData.find(user =>  user.id == haders['selecteduserid']);
        let userArrayId = userData.indexOf(deletedUser);

        userData.splice(userArrayId, 1); 
        fs.writeFile(userDataLink + "/userData.json", JSON.stringify(userData), (error) => {
            if(error) {
                console.log(error)
                return res.send({ message: "ERROR has been occured", dataBody: error})
            }
        })
        res.send({ message: "DELETE SOME USER", dataBody: userData})
    })    
}

module.exports = {
    deleteSingleUser
}
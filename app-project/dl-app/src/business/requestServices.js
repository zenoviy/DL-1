function getServerData(url){
    return fetch(url)
    .then(data => data.json())
    .then(data => data)
    .catch(err => 
        console.error(err))
}

function postUserData(url, headers, body){

}




module.exports = {
    getServerData,
    postUserData
}
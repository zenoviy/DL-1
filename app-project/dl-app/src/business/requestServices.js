function getServerData(url){
    return fetch(url)
    .then(data => data.json())
    .then(data => data)
    .catch(err => 
        console.error(err))
}

function postServerData(url, headers, body){
    return fetch(url, {
        method: "post",
        credentials: "same-origin",
        headers: headers ? headers : {"Content-Type": "application/x-www-form-urlencoded"},
        body: body? body: null
    })
    .then(data => data.json())
    .catch(err => 
        console.error(err))
}
function deleteServerData(url, headers){
    return fetch(url, {
        method: "delete",
        headers: headers,
    }).then(data => data.json())
}




module.exports = {
    getServerData,
    postServerData,
    deleteServerData
}
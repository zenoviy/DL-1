export function linkNameCreator (name) {
    const regex = new RegExp(/\s\W\w/g);
    return name.replace(regex, "-").replaceAll("/", "-").split(" ").map(character => character.toLowerCase()).join("");
}


export function convertSearchToObject(search){
    let serchParams = new URLSearchParams(search);
    let searchObjects = {};
    for(let [key, val] of serchParams.entries()){
        searchObjects[key] = val;
    }
    return searchObjects
}
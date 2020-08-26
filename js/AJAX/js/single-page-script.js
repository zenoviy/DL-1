(async function(){
    const appState = {
        serverData: [],
        currentObject: {
            id: null,
            object: null
        },
        idOfObject: null,
        selectors: {
            mediaArea: document.querySelector("#media-area"),
            articleBody: document.querySelector("#article-body"),
        },
        appInfo: {
            pageUrl: "https://jsonplaceholder.typicode.com/photos"
        }
    }
    appState.serverData = await getServerData(appState.appInfo.pageUrl);
    parseUrl(appState);
    findCardObject(appState);
    displayDataOnScreen(appState);
})();






function getServerData(url){
    return fetch(url)
    .then(data => data.json())
    .catch(err => console.error(err))
}






function parseUrl(appState){
    let url = new URL(location.href);
    let searchParameter = new URLSearchParams(url.search);
    let currentObject = appState.currentObject;
    for(let [key, val] of searchParameter.entries()){
        currentObject[key] = val; 
    }
}





function findCardObject(appState){
    const currentObject = appState.currentObject;
    const serverData = appState.serverData;
    currentObject.object = serverData.find(cardData => cardData.id == currentObject.id);
    console.log(currentObject.object)
}   






function displayDataOnScreen(appState){
    const mediaArea = appState.selectors.mediaArea;
    const articleBody = appState.selectors.articleBody;
    const currentObjectCard = appState.currentObject.object;
    mediaArea.innerHTML = `
        <figcaption>
            <img src="${currentObjectCard.url}">
            <p><a href="${currentObjectCard.url}">${currentObjectCard.url}</a><p>
        </figcaption>
    `;
    articleBody.innerHTML = `
    <div>
        <h1>Card #${currentObjectCard.id}</h1>
        <p>${currentObjectCard.title}</p>
    </div>
    `;
}
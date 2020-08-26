(async function(){
    const appState = {
        serverData: [],
        dataToDisplay: [],
        currntNumberOfCards: 6,
        cardPerTurn: 6,
        appInfo: {
            photos: {
                getUrl: "https://jsonplaceholder.typicode.com/photos",
                method: "GET"
            }
        },
        selectors: {
            cardDisplayArea: document.querySelector("#card-display-area"),
            showMoreBtn: document.querySelector("#show-more-btn"),
        }
    }
    appState.serverData = await getServerData(appState.appInfo.photos.getUrl);
    displayDataFinder(appState);
    displayData(appState);
    showMoreEvent(appState);
})()






function getServerData(url){
    return fetch(url)
    .then(data => data.json())
    .catch(err => console.error(err))
}







function displayData(appMainObject){
    const cardDisplayArea = appMainObject.selectors.cardDisplayArea;
    const dataToDisplay = appMainObject.dataToDisplay;
    cardDisplayArea.innerHTML = "";
    for(let cardData of dataToDisplay){
        let innerText = `<img class="card-img-top" src="${cardData.thumbnailUrl}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card #${cardData.id}</h5>
          <p class="card-text">${cardData.title}</p>
          <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapse-card-${cardData.id}" aria-expanded="false" aria-controls="collapseExample">
            Visit Card
        </button>
        <div class="collapse" id="collapse-card-${cardData.id}">
            <div class="card card-body" id="cad-detail-${cardData.id}"></div>
        </div>
        </div>`;
        let cardElement = newCardCreator("div", "card p-3", innerText, null);
        let deleteBtn = newCardCreator("button", "btn btn-danger", `Detete card ${cardData.id}`, (event) => {
            delateCardEvent(cardElement, cardData.id, appMainObject);
        })
        let linkButton = newCardCreator("button", "btn btn-warning", "See details", (event) => {
            detailCardEvent(cardData);
        })
        cardDisplayArea.appendChild(cardElement);
        const collapseCardDetail = document.querySelector(`#cad-detail-${cardData.id}`);
        collapseCardDetail.appendChild(deleteBtn);
        collapseCardDetail.appendChild(linkButton);
    }
}






function displayDataFinder(appMainObject){
    const serverData = appMainObject.serverData;
    const currntNumberOfCards = appMainObject.currntNumberOfCards;
    appMainObject.dataToDisplay = serverData.slice(0, currntNumberOfCards);
    console.log(appMainObject.dataToDisplay, "Data to display")
}







function newCardCreator(tag, styleClass, innerText, objectEvent){
    const newElement = document.createElement(tag);
    newElement.className = styleClass ? styleClass : false;
    newElement.innerHTML = innerText ? innerText : false;
    if(objectEvent) newElement.addEventListener("click", function(event){
        objectEvent.call(this, event)
    })
    return newElement
}






function showMoreEvent(appMainObject) {
    const showMoreBtn = appMainObject.selectors.showMoreBtn;
    showMoreBtn.addEventListener("click", function(event) {
        loadMoreCard(appMainObject);
        displayDataFinder(appMainObject);
        displayData(appMainObject);
    })
}
function loadMoreCard(appMainObject){
    appMainObject.currntNumberOfCards += appMainObject.cardPerTurn;
}
function delateCardEvent(currentElement, cardId, appMainObject){
    if(confirm(`delete card #${cardId}`)){
        currentElement.remove();
        appMainObject.serverData.splice(cardId-1, 1)
        console.log(appMainObject.serverData)
    } 
}
function detailCardEvent(cardData){
    if(confirm(`Do you want to visit card #${cardData.id}`)){
        location.href = `./singlePage.html?id=${cardData.id}&title=${cardData.title}`;
    }
}


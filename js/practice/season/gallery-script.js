(function(){
    const appState = {
        galleryPictures: [{
            pictureUrl: "1січень.jpg",
            title: "Picture 1",
            description: "Description to the picture #1"
        }, {
            pictureUrl: "2лютий.jpg",
            title: "Picture 2",
            description: "Description to the picture #2"
        }, {
            pictureUrl: "3березень.jpg",
            title: "Picture 3",
            description: "Description to the picture #3"
        }],
        currentPictureIndex: 0,
        selectors: {
            galleryViewArea: document.querySelector("#gallery-view-area")
        }
    }


    galleryEvents(appState)
    loadPictureToView(appState)
})()



function galleryEvents(mainAppState){
    document.addEventListener("click", function(event) {
        let dataset = event.target.dataset;
       
        if(dataset.galleryBtn === "prev") changePicture(mainAppState, -1)
        else if(dataset.galleryBtn === "next") changePicture(mainAppState, 1)
    })
}


function changePicture(mainAppState, eventValue){
    mainAppState.currentPictureIndex += eventValue;
    mainAppState.currentPictureIndex = galleryPictureLimit(mainAppState);
    //console.log(mainAppState.currentPictureIndex)
    loadPictureToView(mainAppState)
}


function galleryPictureLimit(mainAppState){
    const galleryLength = mainAppState.galleryPictures.length;
    const currentPictureIndex = mainAppState.currentPictureIndex;

    return (currentPictureIndex < 0)? galleryLength - 1 : (currentPictureIndex > galleryLength - 1)? 0 : currentPictureIndex;
}



// View 
function loadPictureToView(mainAppState){
    const galleryPictures = mainAppState.galleryPictures;
    const galleryViewArea = mainAppState.selectors.galleryViewArea;
    const currentPictureIndex = mainAppState.currentPictureIndex;

    const currentPicureObject = galleryPictures[currentPictureIndex];
    const innerContent = `
        <div class="gallery-text-area">
            <h3>${currentPicureObject.title}</h3>
            <p>${currentPicureObject.description}<p>
        </div>
        <img src="./img/${currentPicureObject.pictureUrl}" alt="${currentPicureObject.title}">
    `
    const galleryFrameItem = createElement("div", "gallery-item", innerContent, function(e){
        console.log(currentPicureObject.description)
    })

    galleryViewArea.innerHTML = "";
    galleryViewArea.appendChild(galleryFrameItem)

}



function createElement(tagName, styleClass, innerContent, innerEvent){
    let newItem = document.createElement(tagName);
    newItem.className = (styleClass)? styleClass : false;
    newItem.innerHTML = (innerContent)? innerContent : false;

    if(innerEvent) newItem.addEventListener("click", function(event){
        innerEvent(event)
    })
    return newItem
}



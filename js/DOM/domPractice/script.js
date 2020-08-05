(function(){
    const appState = {
        userDatabase: [
            {
                id: 1,
                name: "Dewey Frank", 
                age: 23,
                details: {
                    picUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2lgDguQcZmHjor0eEKenJYpNn69G7-dKxSQ&usqp=CAU"
                }
            },{
                id: 2,
                name: "Harrison Tomas", 
                age: 44,
                details: {
                    picUrl: "https://cdn.iconscout.com/icon/free/png-256/avatar-367-456319.png"
                }
            },{
                id: 3,
                name: "Joel Lukas", 
                age: 12,
                details: {
                    picUrl: "https://cdn.iconscout.com/icon/free/png-256/avatar-368-456320.png"
                }
            },{
                id: 4,
                name: "Marc Ciaran ", 
                age: 47,
                details: {
                    picUrl: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/1_avatar-512.png"
                }
            },{
                id: 5,
                name: "Solomon Conner", 
                age: 33,
                details: {
                    picUrl: "https://cdn.iconscout.com/icon/free/png-256/astonishes-boy-1129046.png"
                }
            }
        ],
        selectors: {
            userWrapper: document.querySelector("#user-display-wrapper")
        }
    }
    displayWithNewElements(appState)
    //displayWithStringElements(appState)
})()



function displayWithNewElements(mainAppObject){
    const displayTarget = mainAppObject.selectors.userWrapper;
    const userDatabase = mainAppObject.userDatabase;

    var outerClass = "outer-calss-1";
    var outerClassSecond = "outer-calss-2";
    var outerClassThird = "outer-calss-3";
    if(!userDatabase || !displayTarget) return console.error("Something go wrong with Data")
    for(let userItem of userDatabase){
        console.log(userItem)
        let ineerDocumentHtml = `
            <span>${ userItem.id }</span>
            <h4>${ userItem.name }</h4>
            <img src="${ userItem.details.picUrl } " class="${
                (userItem.age < 20)? outerClass :
                (userItem.age >= 20 && userItem.age < 40)? outerClassSecond : outerClassThird }" alt="">
            <p>age : ${ userItem.age }</p>
        `;
        let newUserCard = newDomElementCreator("li", "user-list-card", ineerDocumentHtml);
        displayTarget.appendChild(newUserCard);
    }
}



function displayWithStringElements(mainAppObject){
    const displayTarget = mainAppObject.selectors.userWrapper;
    const userDatabase = mainAppObject.userDatabase;
    if(!userDatabase || !displayTarget) return console.error("Something go wrong with Data")
    let finalList = "";
    for(let userItem of userDatabase){
        finalList += `
        <li class="user-list-card">
            <span>${ userItem.id }</span>
            <h4>${ userItem.name }</h4>
            <img class="i" src="${ userItem.details.picUrl }" alt="">
            <p>age : ${ userItem.age }</p>
        </li>
        `;
    }
    displayTarget.innerHTML = finalList;
}


function newDomElementCreator(tagName, styleClass, ineerDocumentHtml){
    let newElement = document.createElement(tagName);
    newElement.className = (styleClass)? styleClass : false;
    newElement.innerHTML = (ineerDocumentHtml)? ineerDocumentHtml : false;
    return newElement;
}


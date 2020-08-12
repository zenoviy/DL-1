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
            userWrapper: document.querySelector("#user-display-wrapper"),
            userForm: document.forms["creteUserForm"] 
        }
    }
    displayWithNewElements(appState)
    //displayWithStringElements(appState)
    activateForm(appState)
})()



function displayWithNewElements(mainAppObject){
    const displayTarget = mainAppObject.selectors.userWrapper;
    const userDatabase = mainAppObject.userDatabase;

    var outerClass = "outer-calss-1";
    var outerClassSecond = "outer-calss-2";
    var outerClassThird = "outer-calss-3";
    if(!userDatabase || !displayTarget) return console.error("Something go wrong with Data")
     
    displayTarget.innerHTML = "";
    if(userDatabase.length < 1) displayTarget.innerHTML = `No user Yet!!!`;


    for(let userItem of userDatabase){
        let ineerDocumentHtml = `
            <span>${ userItem.id }</span>
            <h4>${ userItem.name }</h4>
            <img src="${ userItem.details.picUrl } " class="${
                (userItem.age < 20)? outerClass :
                (userItem.age >= 20 && userItem.age < 40)? outerClassSecond : outerClassThird }" alt="">
            <p>age : ${ userItem.age }</p>
        `;
        let newUserCard = newDomElementCreator("li", "user-list-card", ineerDocumentHtml, function(event){
            console.log(userItem, userItem.name)
        });
        let delateButton = newDomElementCreator("button", "delete-button", "<span>Delete X</span>", function(event){
            //console.log("delete X",  userItem.name)
            if(confirm(`You about to delet User: ${userItem.name}?`)){
                userDeleter(mainAppObject, userItem.id)
            }
        })
        newUserCard.appendChild(delateButton);
        displayTarget.appendChild(newUserCard);
    }
}



/*function displayWithStringElements(mainAppObject){
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
}*/


function newDomElementCreator(tagName, styleClass, ineerDocumentHtml, eventCallback){
    let newElement = document.createElement(tagName);
    newElement.className = (styleClass)? styleClass : false;
    newElement.innerHTML = (ineerDocumentHtml)? ineerDocumentHtml : false;

    if(eventCallback) newElement.addEventListener("click", (event) => {
        eventCallback(event)
    })
    return newElement;
}


function userDeleter(mainAppObject, userId){
    const userDatabase = mainAppObject.userDatabase;
    let userDbIndex = userDatabase.indexOf(userDatabase.find(userInfo => {
        return userInfo.id == userId
    }))
    if(!userDbIndex && userDbIndex != 0) return console.error("cant find user")
    userDatabase.splice(userDbIndex, 1)
    displayWithNewElements(mainAppObject)
}


function addNewUser(mainAppObject, newUserData){

    mainAppObject.userDatabase = mainAppObject.userDatabase.concat(newUserData);
    displayWithNewElements(mainAppObject)
}



//  Form logic


function activateForm(mainAppObject){
    const form = mainAppObject.selectors.userForm;

    form.addEventListener("submit", function(e){
        e.preventDefault()
        console.log(this)
        let newUserData = createUserObject(this)
        addNewUser(mainAppObject, newUserData)
    })
}


function createUserObject(userForm){
    let userResult = {
        details: {}
    }
    for(let formInput of userForm){ 
        console.log(formInput)
        if(formInput.name && formInput.value){
            if(formInput.type == "url"){
                userResult.details[formInput.name] = formInput.value;
            }else userResult[formInput.name] = formInput.value; 
        }
    }

    userResult.id = new Date().getTime();
    console.log(userResult)

    return userResult
}

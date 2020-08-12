const enterInputText = document.querySelector("#enter-input-text");
const displayChengebleField = document.querySelector("#display-chengeble-field");

const cityDisplay = document.querySelector("#city-display");
const citySelection = document.querySelector("#city-selection");


const agreeBox = document.querySelector("#agree-box");



enterInputText.value="default";

enterInputText.addEventListener("keydown", function(){
    console.log(this.value, "keydwn")
    displayChengebleField.innerText = this.value? this.value : "Empty field";
})

citySelection.addEventListener("change", function(){
    console.log(this.value, "change")
    cityDisplay.innerText = `My city is: ${this.value}`;
})

agreeBox.addEventListener("change", function(){
    console.log(this.checked, "change")
})


//  Form 

const mainForm = document.forms["main-user-form"];
mainForm.addEventListener("submit", function(event){
    event.preventDefault()
    let selector = document.querySelector("#user-data-display");
    console.log("form is submitted", this)
    let finalFormObject = formToObject(this);   
    if(!finalFormObject ) return selector.innerHTML = "You must check agree button";
    displayFormUserData(finalFormObject)
    this.reset()
})



function formToObject(form){
    let formObject = {};
    for(let formInput of form){
        if(formInput.name && formInput.value && formInput.validity.valid){
            //console.log(formInput, formInput.validity)
            if(formInput.type == "checkbox"){
                formObject[formInput.name] = formInput.checked;
            }else if(formInput.type == "radio" && formInput.checked){
                formObject[formInput.name] = formInput.value;
            }else if(formInput.type != "radio"){
                formObject[formInput.name] = formInput.value;
            }
        }
    }
    if(!formObject.userAgree) return false
    console.log("form result > ", formObject)
    return formObject
}




function displayFormUserData(userData){
    let selector = document.querySelector("#user-data-display");
    let innerText = `<p style="background: ${userData.userThemeColor}">Hello User:  ${userData.firstName}  ${userData.lastName}</p>
    <p style="background: ${userData.userThemeColor}">You have:  ${userData.userAge} year old</p>
    <p>Lives in: ${userData.userCountry}</p>`;
    selector.innerHTML = innerText;
}



//   File uploader

const pictureArea = document.querySelector("#picture-area");
const fileUloaderInput = document.querySelector("#file-uloader-input");

fileUloaderInput.addEventListener("change", function(){
    console.log(this)
    const reader = new FileReader();
    reader.readAsDataURL(this.files[0]);

    reader.addEventListener("load", function(){
        console.log(reader.result)
        pictureArea.innerHTML = `<img width="300" src="${reader.result}">`
    })

})





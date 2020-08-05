const mainHeaderArea = document.getElementById("main-header-area");
const allTestBox = document.getElementsByClassName("test-box");
const allTagName = document.getElementsByTagName("SPAN");


const mainHeaderAreaSecond = document.querySelector("#main-header-area-second p");

const testBoxQuerySingle =  document.querySelector(".test-box");
var allTestBoxQuery =  document.querySelectorAll(".test-box");
const allTagNameQuery =  document.querySelectorAll("SPAN");

const mainImage = document.querySelector("#main-image");
const outerParagraphWrapper = document.querySelector("#outer-paragraph-wrapper");


//console.log(mainHeaderArea, mainHeaderAreaSecond, allTestBox, [...allTestBox])


for(let i = 0; i < [...allTestBox].length; i++){
    //console.log(allTestBox[i])
}


for(let item of allTestBoxQuery){
    //console.log(item.innerText);
    
    item.innerText = "<mark> Hello </mark>";
    item.innerHTML = "<p> Hello </p>";
    item.style = "color: #fff; background-color: #bbb; padding: 10px;";
    //console.log(item.classList);   // .add()   .remove()   .toggle()    // .replace

    if([...item.classList].find(obj => obj === "box-deactive")){
        //item.classList.remove("box-deactive")
        //item.classList.add("box-active")

        item.classList.toggle("box-deactive")
        setInterval(function(){
            item.classList.toggle("box-deactive")
        }, 1000);
    }
}



allTestBoxQuery =  document.querySelectorAll(".test-box");

//console.log(allTestBoxQuery, testBoxQuerySingle, allTagNameQuery)

mainHeaderArea.children[0].style = " background: #000; color: #fff; padding: 10px;";




const pictureGallery = [
    "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
    "https://images.unsplash.com/photo-1542044896530-05d85be9b11a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    "https://s.yimg.com/uu/api/res/1.2/DdytqdFTgtQuxVrHLDdmjQ--~B/aD03MTY7dz0xMDgwO3NtPTE7YXBwaWQ9eXRhY2h5b24-/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2019-11/7b5b5330-112b-11ea-a77f-7c019be7ecae"
]
var currentImage = 0;
setInterval(function(){

    mainImage.src = pictureGallery[currentImage];
    mainImage.className = "image-wrapper ";
    currentImage += 1
    if(currentImage > pictureGallery.length -1 ) currentImage = 0;
}, 1000)



console.log(outerParagraphWrapper.firstElementChild)
console.log(outerParagraphWrapper.lastElementChild)


outerParagraphWrapper.firstElementChild.classList.add("box-deactive")
outerParagraphWrapper.lastElementChild.classList.add("box-deactive")

outerParagraphWrapper.lastElementChild.remove()


mainHeaderArea.animate([
    // keyframes
    { transform: 'scale(0)', color: "#ff0000" }, 
    { transform: 'scale(1.2)', color: "#00ff00" },
    { transform: 'scale(0)', color: "#0000ff" }
  ], { 
    // timing options
    duration: 2000,
    iterations: Infinity
  });

//mainImage.src = "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg";


//el.replaceChildren(...children, ...children2);


var newElement = document.createElement("div");
newElement.className = "new-created-element list-style";
newElement.setAttribute("id", "main-list-element");     // getAttribute()
newElement.innerHTML = `
  <ul>
        <li>User 1</li>
        <li>User 2</li>
        <li>User 3</li>
  </ul>
`;


mainHeaderArea.appendChild(newElement)
mainHeaderArea.prepend(newElement)



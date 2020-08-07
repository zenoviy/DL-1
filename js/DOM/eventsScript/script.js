function handleClick(text){
    console.log("Clicked", text, this)
    this.style="background: #ff0000; border:0px; padding: 20px; color: #fff;";
}


window.onload = function(){
    const clickBtn = document.querySelector("#click-button-html");
    const clickButtonListener = document.querySelector("#click-button-listener");
    const clickButtonListenerDblclick = document.querySelector("#click-button-listener-dblclick");

    const displayPositionArea = document.querySelector("#display-position-area");
    const fakeButton = document.querySelector("#fake-button");


    clickBtn.onclick = function(ev){
        console.log("click", this, ev)
        this.style="background: #00ff00; border:0px; padding: 20px; color: #fff;";
    }

    clickButtonListener.addEventListener("click", function(event){
        eventHandler.call(this, event, "hello world")
    });
    clickButtonListenerDblclick.addEventListener("dblclick", function(){
        console.log("dblclick")
    })
    clickButtonListenerDblclick.addEventListener("mousedown", function(){
        console.log("mousedown")
    })
    clickButtonListenerDblclick.addEventListener("mouseup", function(){
        console.log("mouseup")
    })
    clickButtonListenerDblclick.addEventListener("mouseenter", function(){
        console.log("mouseenter")
    })
    clickButtonListenerDblclick.addEventListener("mouseleave", function(){
        console.log("mouseleave")
    })
    clickButtonListenerDblclick.addEventListener("mousemove", function(){
        console.log("mousemove")
    })
    clickButtonListenerDblclick.addEventListener("mouseover", function(){
        console.log("mouseover")
    })
    clickButtonListenerDblclick.addEventListener("wheel", function(){
        console.log("wheel")
    })




    function eventHandler(event, helloString){
        console.log("click eventListener", event, helloString)
        this.style="background: #0000ff; border:0px; padding: 20px; color: #fff;";
    }



    document.addEventListener("mousemove", function(event){
        //console.log(event.clientX, event.clientY)
        displayPositionArea.innerHTML = `X: ${event.clientX}; Y: ${event.clientY}`;
    })


    fakeButton.addEventListener("click", function(event){
        console.log("fake button clicked","|", event.target.tagName, "|", event.target.innerText)
    })
    //console.log(clickBtn)



    document.addEventListener("click", function(event){
        console.log("DataSet", event.target.dataset)
        if(event.target.dataset.myClickEvent === "My Data Event"){
            console.log(event.target.dataset.myClickEvent, "Dataset 1 fire")
        }else if(event.target.dataset.myClickEvent === "My Data Event Second"){
            console.log(event.target.dataset.myClickEvent, "Dataset 2 fire")
        }


        if(event.target.dataset.listElements === "counter"){
            console.log(event.target.id)
            let selector = document.querySelector(`#${event.target.id}`);
            console.log(selector)
            if(selector.style.background) selector.style = "";
            else selector.style = "background: #ff0000; color: #fff; padding: 5px; text-align: center;";
        }   
    })

    document.addEventListener("keydown", function(event){
        //console.log(event.key, event.keyCode) 

        if(event.keyCode === 38) console.log("Going UP")
        if(event.keyCode === 39) console.log("Going RIGHT")
        if(event.keyCode === 40) console.log("Going DOWN")
        if(event.keyCode === 37) console.log("Going LEFT")
    })


    console.log("DOM is loaded");
    alert("DOM is loaded ")
}


console.log("First calling ")
alert("First calling ")
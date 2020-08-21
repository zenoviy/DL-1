 /*
     Constructor of bubble
*/
 
 class BubbleCreator {
        constructor(bubbleSettings){
            this.id = new Date().getTime();
            this.size = bubbleSettings.size ? bubbleSettings.size : 10;
            this.color = bubbleSettings.color ? bubbleSettings.color : "#bbbbbb88";
            this.positionX = Math.floor(Math.random() * bubbleSettings.width);
            this.positionY = Math.floor(Math.random() * bubbleSettings.height);
            this.bubbleActive = false;
            this.speedX = 1;
            this.speedY = 1;
        }
        bubbleMove(){
            this.positionX += this.speedX;
            this.positionY += this.speedY;
        }
        changeDirrection(ctxSize){
            if(this.speedX > 0 && this.positionX + this.size > ctxSize.ctxWidth || 
                this.speedX < 0 && this.positionX - this.size < 0 ) this.speedX *= -1;
            if(this.speedY > 0 && this.positionY + this.size > ctxSize.ctxHeight || 
                this.speedY < 0 && this.positionY - this.size < 0 ) this.speedY *= -1;
        }
        bubleBorderLimit(ctxSize){
            if(this.positionX - this.size < 0) this.positionX = this.size;
            if(this.positionY - this.size < 0) this.positionY = this.size;
            if(this.positionX + this.size > ctxSize.ctxWidth) this.positionX = ctxSize.ctxWidth - this.size;
            if(this.positionY + this.size > ctxSize.ctxHeight) this.positionY = ctxSize.ctxHeight - this.size;
        }
}
(function(){
    const appState = {
        allBubbles: [],
        ctx: document.querySelector("#bubble-display-area").getContext("2d"),
        ctxSize: {
            width: 100,
            height: 100
        },
        gameData: {
            pause: false,
            selectBubble: null,
            loadNewEnemy: false,
            gameTime: {
                minutes: 0,
                seconds: 0,
                extaseconds: 0
            },
            gameState: true
        },
        appEngine: null,
        selectors: {
            textArea: document.querySelector("#text-area"),
            bubbleDisplayArea: document.querySelector("#bubble-display-area"),
            pauseBtn: document.querySelector("#pause-btn"),
            restartBtn: document.querySelector("#restart-btn")
        }
    }
    initialized(appState);
    eventHandler(appState);
})()





 /*
    Create Bubble in Model
*/
function createNewBubble(bubbleSteeings, appMainState){
    let letters = '0123456789ABCDEF';
    let color = '#' + new Array(6).fill().map(i => letters[Math.floor(Math.random() * 16)]).join("") + "88";
    let bubble = new BubbleCreator({
        size: Math.floor(Math.random() * bubbleSteeings.size + 10),
        width: bubbleSteeings.width,
        height: bubbleSteeings.height,
        color: color
    });
    appMainState.allBubbles = (appMainState.allBubbles.length < 50)? appMainState.allBubbles.concat(bubble) : appMainState.allBubbles;
}





/*
    Controller Business Logic
*/
function startEngine(appMainState){
    appMainState.appEngine = setInterval(function(){
        gameEngineRun(appMainState);
    }, 10);
}
function gameEngineRun(appMainState){
    objectMove(appMainState);
    startGameProcess(appMainState);
    clearContext(appMainState);
    canvasResize(appMainState);
    gameProcess(appMainState);
    render(appMainState);
    if(appMainState.gameData.pause) clearInterval(appMainState.appEngine);
}
function initialized(appMainState){
    const ctxSize = canvasSize(appMainState);
    startEngine(appMainState);
    createNewBubble({
        size: 50,
        width: ctxSize.ctxWidth,
        height: ctxSize.ctxHeight
    }, appMainState);
}
function objectMove(appMainState){
    if(!appMainState.allBubbles) return
    const allBubbles = appMainState.allBubbles;
    const ctxSize = canvasSize(appMainState);
    for(let bubble of allBubbles){
        if(bubble.bubbleActive) continue
        bubble.bubbleMove();
        bubble.changeDirrection(ctxSize);
    }
}
function eventHandler(appMainState){
    const bubbleDisplayArea = appMainState.selectors.bubbleDisplayArea;
    const pauseBtn = appMainState.selectors.pauseBtn;
    const restartBtn = appMainState.selectors.restartBtn;
    bubbleDisplayArea.addEventListener("click", function(event){
        let clientX = event.clientX - event.originalTarget.offsetLeft;
        let clientY = event.clientY - event.originalTarget.offsetTop;
        let allBubbles = appMainState.allBubbles;
        for(let bubble of allBubbles ){
           let hitState = hitDetection({
                positionX: clientX,
                positionY: clientY,
                size: 5
            }, bubble);
            if(!appMainState.gameData.selectBubble && hitState) {
                appMainState.gameData.selectBubble = bubble;
                bubble.color = "#ff000088";
                bubble.bubbleActive = true; 
            }
        }
    });
    document.addEventListener("keydown", function(e){
        const bubble = appMainState.gameData.selectBubble;
        const ctxSize = canvasSize(appMainState)
        bubbleControl(e, bubble, ctxSize)
    });
    pauseBtn.addEventListener("click", function(e){
        if(!appMainState.gameData.gameState) return false
        pause.call(this, appMainState);
    });
    restartBtn.addEventListener("click", function(e){
        if(confirm("Do you want restart the script?")){
            appMainState.allBubbles = [];
            appMainState.gameData = {
                pause: true,
                selectBubble: null,
                loadNewEnemy: false,
                gameTime: {
                    minutes: 0,
                    seconds: 0
                },
                gameState: true
            }       
            
            clearInterval(appMainState.appEngine);
            initialized(appMainState);
        } 
    });
}
function startGameProcess(appMainState){
    if(appMainState.gameData.selectBubble){
        if(!appMainState.gameData.loadNewEnemy){
            appMainState.gameData.loadNewEnemy = true;
            let randomTime = Math.floor(Math.random() * 5000 + 2000);
            setTimeout(() => {
                if(!appMainState.gameData.loadNewEnemy) return
                let ctxSize = canvasSize(appMainState);
                createNewBubble({
                    size: 100,
                    width: ctxSize.ctxWidth,
                    height: ctxSize.ctxHeight
                }, appMainState);
                appMainState.gameData.loadNewEnemy = false;
            }, randomTime);
        }
    }
}
function gameProcess(appMainState){
    const currentTarget = appMainState.gameData.selectBubble;
    let allBubbles = appMainState.allBubbles;
    if(!currentTarget) return false
    for(let bubble of allBubbles){
        if(currentTarget.id === bubble.id) continue
        let hitDetect = hitDetection(currentTarget, bubble)
        if(hitDetect){
            const gameData = appMainState.gameData;
            gameData.gameState = false;
           gameEnd(appMainState);
           return false
        } 
    }
    let newSeconds = new Date().getSeconds();
    let gameTime = appMainState.gameData.gameTime;
    let oldSeconds = gameTime.extraseconds;
    gameTime.extraseconds = oldSeconds != newSeconds ? newSeconds : oldSeconds;
     
    gameTime.seconds = gameTime.extraseconds % 60 == 0 ?  0 
    :(oldSeconds != newSeconds )?  gameTime.seconds + 1 : gameTime.seconds;
   gameTime.minutes = gameTime.seconds % 60 == 0 && oldSeconds != newSeconds ? gameTime.minutes + 1 
    : gameTime.minutes;

    let timerText = `GameTime ${gameTime.minutes} : ${gameTime.seconds}`;
    displayMessage(timerText, appMainState);
}
function gameEnd(appMainState){
    let gameTime = appMainState.gameData.gameTime;
    const gameData = appMainState.gameData;
    gameData.pause = true;
    displayMessage(`Game Over ${gameTime.minutes} : ${gameTime.seconds}`, appMainState);
}
function pause(appMainState){
    appMainState.gameData.pause = !appMainState.gameData.pause;
    if(appMainState.gameData.pause) this.innerText = "Start";
    else {
        this.innerText = "Pause";
        startEngine(appMainState);
    }
}







/*
    View display 
*/

function canvasSize(appMainState){
    const ctx = appMainState.ctx;
    let canvasWidth = ctx.canvas.clientWidth;
    let canvasHeight = ctx.canvas.clientHeight;
    return {ctxWidth: canvasWidth, ctxHeight: canvasHeight}
}
function canvasResize(appMainState){
    const { ctxWidth, ctxHeight } = canvasSize(appMainState);
    const ctx = appMainState.ctx.canvas;
    ctx.width = ctxWidth;
    ctx.height = ctxHeight;
}
function clearContext(appMainState){
    const ctx = appMainState.ctx;
    const ctxSize = canvasSize(appMainState);
    ctx.clearRect(0, 0, ctxSize.ctxWidth, ctxSize.ctxHeight)
}
function render(appMainState){
    let ctx = appMainState.ctx;
    let allBubbles = appMainState.allBubbles;

    for(let bubble of allBubbles){
        ctx.fillStyle = bubble.color;
        ctx.beginPath();
        ctx.arc(bubble.positionX, bubble.positionY, bubble.size, 0, 2 * Math.PI);
        ctx.stroke(); 
        ctx.closePath();
        ctx.fill();
    }
}
function displayMessage(messageData, appMainState){
    const selectors = appMainState.selectors;
    selectors.textArea.innerHTML = (messageData)? messageData : '';
}








function hitDetection(hitObject, targetObject){
    let x = targetObject.positionX - hitObject.positionX;
    let y = targetObject.positionY - hitObject.positionY;
    let distance = Math.sqrt(x*x + y*y) - (hitObject.size + targetObject.size);
    
    if(distance < 0) return true
}
function bubbleControl(event, bubble, ctxSize){
    let eventKeyCode = event.keyCode;
    if(!bubble) return false
    bubble.speedX = 0;
    bubble.speedY = 0; 
    let speed = 5;
    if(eventKeyCode == 87){
        bubble.speedY = speed * -1;
    }else if(eventKeyCode == 68){
        bubble.speedX = speed;
    }else if(eventKeyCode == 83){
        bubble.speedY = speed;
    }else if(eventKeyCode == 65){
        bubble.speedX = speed * -1;
    }
    bubble.bubleBorderLimit(ctxSize);
    bubble.bubbleMove();
}


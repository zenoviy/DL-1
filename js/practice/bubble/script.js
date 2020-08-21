(function(){
    const BubbleCreator = function BubbleCreator(bubbleSettings){
        this.id = new Date().getTime();
        this.size = bubbleSettings.size ? bubbleSettings.size : 10;
        this.color = bubbleSettings.color ? bubbleSettings.color : "#bbbbbb88";
        this.positionX = Math.floor(Math.random() * bubbleSettings.width);
        this.positionY = Math.floor(Math.random() * bubbleSettings.height);
        this.bubbleActive = false;
        this.speedX = 1;
        this.speedY = 1;
    }
    BubbleCreator.prototype.bubbleMove = bubbleMove;
    BubbleCreator.prototype.changeDirrection = changeDirrection;
    BubbleCreator.prototype.bubleBorderLimit = bubleBorderLimit;


    const BubblesModel = function BubblesModel(BubbleCreator){
            this.BubbleCreator = BubbleCreator;
            this.bubbleArray = [];
            this.gameData = {
                pause: false,
                selectBubble: null,
                loadNewEnemy: false,
                gameTime: {
                    minutes: 0,
                    seconds: 0,
                    extaseconds: 0
                },
                gameState: true
            }
    }
    const BubblesView = function BubblesView(textArea, bubbleDisplayArea, pauseBtn, restartBtn){
        this.viewData = {
            textArea: textArea,
            bubbleDisplayArea: bubbleDisplayArea,
            pauseBtn: pauseBtn,
            restartBtn: restartBtn,
            ctx: bubbleDisplayArea.getContext("2d")
        }
    }
    const BubblesController = function BubblesController(bubblesModel, bubblesView){
        this.bubblesModel = bubblesModel;
        this.bubblesView = bubblesView;
    }

    BubblesModel.prototype.createNewBubble = createNewBubble;

    BubblesView.prototype.render = render;
    BubblesView.prototype.canvasSize = canvasSize;
    BubblesView.prototype.canvasResize = canvasResize;
    BubblesView.prototype.clearContext = clearContext;
    BubblesView.prototype.displayMessage = displayMessage;

    BubblesController.prototype.initialize = initialize;
    BubblesController.prototype.bubbleEngine = bubbleEngine;
    BubblesController.prototype.objectsChangeState = objectsChangeState;
    BubblesController.prototype.canvasClickHandler = canvasClickHandler;
    BubblesController.prototype.startGameProcess = startGameProcess;
    BubblesController.prototype.gameProcess = gameProcess;
    BubblesController.prototype.pause = pause;
    BubblesController.prototype.gameEnd = gameEnd;
    


    const textArea = document.querySelector("#text-area");
    const bubbleDisplayArea = document.querySelector("#bubble-display-area");
    const pauseBtn = document.querySelector("#pause-btn");
    const restartBtn = document.querySelector("#restart-btn");


    const bubblesModel = new BubblesModel(BubbleCreator);
    const bubblesView = new BubblesView(textArea, bubbleDisplayArea, pauseBtn, restartBtn);

    const bubblesController = new BubblesController(bubblesModel, bubblesView);
    bubblesController.initialize();
    bubblesController.canvasClickHandler();
})()









/*  Model  */

function createNewBubble(bubbleSettings){
    let letters = '0123456789ABCDEF';
    let collor = '#' + new Array(6).fill().map(i => letters[Math.floor(Math.random() * 16)]).join("") + "88";
    let randomSize = Math.floor(Math.random() * bubbleSettings.size + 10)
    const newBubble = new this.BubbleCreator({
        size: randomSize,
        color: collor,
        width: bubbleSettings.width,
        height: bubbleSettings.height,
    })
    this.bubbleArray = (this.bubbleArray.length < 50)? this.bubbleArray.concat(newBubble) : this.bubbleArray;
} 












/*  Controller  */

function initialize(){
        const ctxSize = this.bubblesView.canvasSize();
        this.bubblesModel.createNewBubble({
            size: 50,
            width: ctxSize.ctxWidth,
            height: ctxSize.ctxHeight
        })
        this.bubbleEngine();
}
function bubbleEngine(){
    this.engineRun = setInterval(() => {
        const allBubbles = this.bubblesModel.bubbleArray;
        const gameData = this.bubblesModel.gameData;
        this.objectsChangeState();
        this.startGameProcess();
        this.gameProcess();

        this.bubblesView.clearContext();
        this.bubblesView.canvasResize();
        this.bubblesView.render(allBubbles);

        if(gameData.pause) clearInterval(this.engineRun);
    }, 20);
}
function objectsChangeState(){
    const allBubbles = this.bubblesModel.bubbleArray;
    const ctxSize = this.bubblesView.canvasSize();
    for(let bubble of allBubbles){
        if(bubble.bubbleActive) continue
        bubble.bubbleMove();
        bubble.changeDirrection(ctxSize);
    }
}
function pause(context){
    context.bubblesModel.gameData.pause = !context.bubblesModel.gameData.pause;
    if(context.bubblesModel.gameData.pause) this.innerText = "Start";
    else {
        this.innerText = "Pause";
        context.bubbleEngine();
    }
}
function canvasClickHandler(){
    const viewSelectors = this.bubblesView.viewData;
    const pauseBtn = viewSelectors.pauseBtn;
    const restartBtn = viewSelectors.restartBtn;
    const bubbleDisplayArea = viewSelectors.bubbleDisplayArea;
    const context = this;
    bubbleDisplayArea.addEventListener("click", function(event){
        let clientX = event.clientX - event.originalTarget.offsetLeft;
        let clientY = event.clientY - event.originalTarget.offsetTop;
        let bubbleArray = context.bubblesModel.bubbleArray;
        for(let bubble of bubbleArray ){
           let hitState = hitDetection({
                positionX: clientX,
                positionY: clientY,
                size: 5
            }, bubble);
            if(!context.bubblesModel.gameData.selectBubble && hitState) {
                context.bubblesModel.gameData.selectBubble = bubble;
                bubble.color = "#ff000088";
                bubble.bubbleActive = true; 
            }
        }
    });
    pauseBtn.addEventListener("click", function(event){
        if(!context.bubblesModel.gameData.gameState) return false
        context.pause.call(this, context);
    });
    restartBtn.addEventListener("click", function(event){
        if(confirm("Do you want restart the script?")){
            context.bubblesModel.bubbleArray = [];
            context.bubblesModel.gameData = {
                pause: true,
                selectBubble: null,
                loadNewEnemy: false,
                gameTime: {
                    minutes: 0,
                    seconds: 0
                },
                gameState: true
            }
            clearInterval(context.engineRun)
            context.initialize();
        } 
    });
    document.addEventListener("keydown", function(e){
        const bubble = context.bubblesModel.gameData.selectBubble;
        const ctxSize = context.bubblesView.canvasSize()
        bubbleControl(e, bubble, ctxSize)
    });
}
function startGameProcess(){
    let bubblesModel = this.bubblesModel;
    if(bubblesModel.gameData.selectBubble){
        if(!bubblesModel.gameData.loadNewEnemy){
            bubblesModel.gameData.loadNewEnemy = true;
            let randomTime = Math.floor(Math.random() * 5000 + 2000);
            setTimeout(() => {
                if(!bubblesModel.gameData.loadNewEnemy) return
                let ctxSize = this.bubblesView.canvasSize();
                this.bubblesModel.createNewBubble({
                    size: 100,
                    width: ctxSize.ctxWidth,
                    height: ctxSize.ctxHeight
                })
                bubblesModel.gameData.loadNewEnemy = false;
            }, randomTime)
        }
    }
}
function gameProcess(){
    const currentTarget = this.bubblesModel.gameData.selectBubble;
    let bubbleArray = this.bubblesModel.bubbleArray;
    if(!currentTarget) return false

    for(let bubble of bubbleArray){
        if(currentTarget.id === bubble.id) continue
        let hitDetect = hitDetection(currentTarget, bubble)
        if(hitDetect){
            const gameData = this.bubblesModel.gameData;
            gameData.gameState = false;
           this.gameEnd();
           return false
        } 
    }
    let newSeconds = new Date().getSeconds();
    let gameTime = this.bubblesModel.gameData.gameTime;
    let oldSeconds = gameTime.extraseconds;
    gameTime.extraseconds = oldSeconds != newSeconds ? newSeconds : oldSeconds;
     
    gameTime.seconds = gameTime.extraseconds % 60 == 0 ?  0 
    :(oldSeconds != newSeconds )?  gameTime.seconds + 1 : gameTime.seconds;
   gameTime.minutes = gameTime.seconds % 60 == 0 && oldSeconds != newSeconds ? gameTime.minutes + 1 
    : gameTime.minutes;

    let timerText = `GameTime ${gameTime.minutes} : ${gameTime.seconds}`;
    this.bubblesView.displayMessage(timerText);
}
function gameEnd(){
    let gameTime = this.bubblesModel.gameData.gameTime;
    const gameData = this.bubblesModel.gameData;
    gameData.pause = true;
    this.bubblesView.displayMessage(`Game Over ${gameTime.minutes} : ${gameTime.seconds}`);
}











/*  View  */

function canvasSize(){
    const ctx = this.viewData.ctx;
    let canvasWidth = ctx.canvas.clientWidth;
    let canvasHeight = ctx.canvas.clientHeight;
    return {ctxWidth: canvasWidth, ctxHeight: canvasHeight}
}
function canvasResize(){
    const { ctxWidth, ctxHeight } = this.canvasSize();
    this.viewData.bubbleDisplayArea.width = ctxWidth;
    this.viewData.bubbleDisplayArea.height = ctxHeight;
}
function clearContext(){
    const ctx = this.viewData.ctx;
    const ctxSize = this.canvasSize();
    ctx.clearRect(0, 0, ctxSize.ctxWidth, ctxSize.ctxHeight)
}
function render(allBubbles){
    const ctx = this.viewData.ctx;
    for(let bubble of allBubbles){
        ctx.fillStyle = bubble.color;
        ctx.beginPath();
        ctx.arc(bubble.positionX, bubble.positionY, bubble.size, 0, 2 * Math.PI)
        ctx.stroke(); 
        ctx.closePath();
        ctx.fill();
    }
}
function displayMessage(messageData){
    const selectors = this.viewData;
    selectors.textArea.innerHTML = (messageData)? messageData : '';
}










/*  Bubble Business  */



function bubbleMove(){
    this.positionX += this.speedX;
    this.positionY += this.speedY;
}
function changeDirrection(ctxSize){
    if(this.speedX > 0 && this.positionX + this.size > ctxSize.ctxWidth || 
        this.speedX < 0 && this.positionX - this.size < 0 ) this.speedX *= -1;

    if(this.speedY > 0 && this.positionY + this.size > ctxSize.ctxHeight || 
        this.speedY < 0 && this.positionY - this.size < 0 ) this.speedY *= -1;
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

function bubleBorderLimit(ctxSize){
    if(this.positionX - this.size < 0) this.positionX = this.size;
    if(this.positionY - this.size < 0) this.positionY = this.size;
    if(this.positionX + this.size > ctxSize.ctxWidth) this.positionX = ctxSize.ctxWidth - this.size;
    if(this.positionY + this.size > ctxSize.ctxHeight) this.positionY = ctxSize.ctxHeight - this.size;
}
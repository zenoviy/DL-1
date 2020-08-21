/*
    Date()  - об'єкт який відповідає за зняття або встановлення часу
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

    в цьому об'єкті є дуже багато методів (власний міні API) які дозволять ввитягувати дані з системи
    дозволять вибрати потрібну вам дату і з методів дістати дістати кількість днів і т.д.
*/


// об'єкт пустий де будуть зберігатись дані отримані скриптом
const watchInfo = {
    dotApear: false,
    year: null,
    month: null,
    day: null,
    hours: null,
    minutes: null,
    seconds: null,
}
var clockInterva;               // порожня змінна для інтервалу щоб його можна було зупиняти і запускати знову
const watchDisplayArea = document.querySelector("#watch-display-area");     // <div id="watch-display-area"></div>  html елемент з document 

function getTimeDate(){             //   функція зміни часу і дати
    let date = new Date();              // сам об'єкт дати
    watchInfo.year = date.getFullYear();    // для кожного елементу дістаю значення і зберігаю їх в об'єкті
    watchInfo.month = date.getMonth()+1;       // тут маємо додати 1 бо метод генерує номер місяця з 0-11)
    watchInfo.day = date.getDate();
    watchInfo.hours = date.getHours();
    watchInfo.minutes = date.getMinutes();
    watchInfo.seconds = date.getSeconds();

    // тут формується html і всі тексти які треба буде вивести на дисплей
    let timeResult = `${watchInfo.year}, ${watchInfo.month},${watchInfo.day},
    ${watchInfo.hours},${watchInfo.minutes} ${(watchInfo.dotApear)? ":" :  "\xa0" } ${watchInfo.seconds}`;

    watchInfo.dotApear = !watchInfo.dotApear;
    watchDisplayArea.innerHTML = timeResult;        // через .innerHTML  вставляємо текст зроблений зверху з усіма змначеннями
}
function clockRun(){                            // функція ініціалізації годинника в ній має бути двигун який постійно буде перевикликати сам себе (функції в собі які повертатимуть щоразу нові дані)
    clockInterva = setInterval(function(){        // інтервал спрацьовує кожну секунду викликаючи функцію яка отримує всі дані і обраховує їх
        getTimeDate()
    }, 1000);                           // секунди  1000 мілісекунд == 1секунді
}
clockRun()                              // запуск стартового скрипта













//getTimeDate()
/// =========================================================   переміщення об'єкту ( міні гра )
const gameBox = document.querySelector("#game-box");            // дістаємо HTML елемент в JS
const redBox = document.querySelector("#red-box");              // дістаємо HTML червоний блок елемент в JS
const stopStartBtn = document.querySelector("#stop-start-btn"); // дістаємо кнопку запуску зупинки скрипта

const gameStateObject = {                                       // місце де зберігаємо всю інформацію про розташування об'єктів
    gameStatus: true,                                           // змінна статусу гри чивона на паузі чи продовжується
    redBlockPosX: 0,                                            // розташування блоку по горизонталі Х координата
    redBlockPosY: 0,                                            // розташування блоку по вертикалі Y координата
    redBlockSize: 50,                                           // розмір червоного блоку його і довжина і висота потрібно для вираховувань де зупиниться
    gameFieldWidth: 800,                                        // новий розмір ігрової зони по довжині
    gameFieldHeight: 400,                                       // новий розмір ігрової зони по висоті
    blockHorizontalMoveX: 1,                     // горизонтальний показник куди рухається блок
    blockVerticalMoveY: 1,                      // вертикальний показник куди рухається блок
}
var gameEngine;                                                 // змінна яка відповідатиме за інтервал щоб його можна було зупинити
function setGameField(){                                        // функція встановлення розмірів поля гри відповідно до довжини і висоти задаємо стилі
    gameBox.style=`width: ${gameStateObject.gameFieldWidth}px;
    height: ${gameStateObject.gameFieldHeight}px;`;
}
function gameInit(){                                            // головна функція яка буде запускати усю гру
    setGameField();
    gameEngine = setInterval(function(){
        gameBlockMoveLogic();
        moveObject();
        gameBlockDisplay(gameStateObject.redBlockPosX, gameStateObject.redBlockPosY);
    }, 10);
}
function gameBlockDisplay(posX, posY){                          //  функція яка міняє стиль червоного локку  і змінює margin-top: -це Y координата margin-left:  -це X координата
    redBox.style =`margin-top: ${posY}px; margin-left: ${posX}px;`
}
function moveObject(){
    gameStateObject.redBlockPosX += gameStateObject.blockHorizontalMoveX;
    gameStateObject.redBlockPosY += gameStateObject.blockVerticalMoveY;
}






function gameBlockMoveLogic(){                                  // функція обраховування позиції блоку
    /*  логіка для горизонтального руху по Х   до правого кінця поля і до лівого */
    if(gameStateObject.blockHorizontalMoveX > 0 && gameStateObject.redBlockPosX + gameStateObject.redBlockSize > gameStateObject.gameFieldWidth ||
        gameStateObject.blockHorizontalMoveX < 0 && gameStateObject.redBlockPosX < 0) gameStateObject.blockHorizontalMoveX *= -1;
    if(gameStateObject.blockVerticalMoveY > 0 && gameStateObject.redBlockPosY + gameStateObject.redBlockSize > gameStateObject.gameFieldHeight ||
        gameStateObject.blockVerticalMoveY < 0 && gameStateObject.redBlockPosY < 0) gameStateObject.blockVerticalMoveY *= -1;
}


/*    Івент натиску на клавіші клавіатури */
document.addEventListener("keydown", function(event){
    let blockControllStep = 15;                  // змінна яка буде мати значення нашого кроку при натиску на клавішу
    if(event.keyCode == "38" || event.keyCode == "87"){                      //  up
        gameStateObject.redBlockPosY -= blockControllStep;
    }else if(event.keyCode == "39" || event.keyCode == "68"){                //  right
        gameStateObject.redBlockPosX += blockControllStep;
    }else if(event.keyCode == "40" || event.keyCode == "83"){               // bottom
        gameStateObject.redBlockPosY += blockControllStep;
    }else if(event.keyCode == "37" || event.keyCode == "65"){                // left
        gameStateObject.redBlockPosX -= blockControllStep;
    }

        // логіка яка запобігає щоб блоки виходили за поля коли двигун гри зупинений для пересування по X
    if(gameStateObject.redBlockPosX > gameStateObject.gameFieldWidth - gameStateObject.redBlockSize){
        gameStateObject.redBlockPosX -= blockControllStep;
    }else if(gameStateObject.redBlockPosX < 0){
        gameStateObject.redBlockPosX +=blockControllStep
    }

    // логіка яка запобігає щоб блоки виходили за поля коли двигун гри зупинений для пересування по Y
    if(gameStateObject.redBlockPosY > gameStateObject.gameFieldHeight - gameStateObject.redBlockSize){
        gameStateObject.redBlockPosY -= blockControllStep;
    }else if(gameStateObject.redBlockPosY < 0){
        gameStateObject.redBlockPosY +=blockControllStep
    }
	console.log(event)
    // і маємо ці зміни примінити в русі блоку тому знову викликаємо функції (звісно їх можна викликати тільки коли гра зупинена але не тут)
    //moveObject();
    gameBlockDisplay(gameStateObject.redBlockPosX, gameStateObject.redBlockPosY);
})







/*    Івент натиску на кнопку зупинки старту гри */
stopStartBtn.addEventListener("click", function(){
    gameStateObject.gameStatus = !gameStateObject.gameStatus;       // перемикач визначається стан гри якщо був true то стане false  і навпаки
    if(gameStateObject.gameStatus){                                 // якщо гра не на паузі то запускає цикл і весь автоматичний ігровий процес
        gameInit()                                  // метод запуску всього скрипта (його можна запускати знову він не змінить значень позиції блоку тому це безпечно)
    }else{
        clearInterval(gameEngine)              // але якщо гра на паузі gameStateObject.gameStatus == false  то виклокаємо метод зупинки інтервалу
    }
})

gameInit()          // запуск скрипта









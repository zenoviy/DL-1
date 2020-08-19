(function(){
    const appState = {
        seasonData: [{
            id: 1,
            backgroundName: "1січень.jpg",
            seasonName: "січень"
        },{
            id: 2,
            backgroundName: "2лютий.jpg",
            seasonName: "лютий"
        },{
            id: 3,
            backgroundName: "3березень.jpg",
            seasonName: "березень"
        },{
            id: 4,
            backgroundName: "4квітень.jpg",
            seasonName: "квітень"
        },{
            id: 5,
            backgroundName: "5травень.jpg",
            seasonName: "травень"
        },{
            id: 6,
            backgroundName: "6червень.jpg",
            seasonName: "червень"
        },{
            id: 7,
            backgroundName: "7липень.jpg",
            seasonName: "липень"
        },{
            id: 8,
            backgroundName: "8серпень.jpg",
            seasonName: "серпень"
        },{
            id: 9,
            backgroundName: "9вересень.jpg",
            seasonName: "вересень"
        },{
            id: 10,
            backgroundName: "10жовтень.jpg",
            seasonName: "жовтень"
        },{
            id: 11,
            backgroundName: "11листопад.jpg",
            seasonName: "листопад"
        },{
            id: 12,
            backgroundName: "12грудень.jpg",
            seasonName: "грудень"
        }],
        selectors: {
            timeClock: document.querySelector("#time-clock"),
            natureBackground: document.querySelectorAll(".nature-background")
        },
        timeValue: {
            currentObject: null,
            year: 0,
            month: 0,
            day: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        },
        appEngine: setInterval(function(){
            clockRun(appState)
           // console.log(1)
        }, 1000)
    }
    clockRun(appState)
})()


function clockRun(appMainState){
   //appMainState.appEngine()

   getAppTime(appMainState)
    showTime(appMainState)
    loadPictureDueToTime(appMainState)
}




function getAppTime(appMainState){
    const date = new Date();
    var timeValue = appMainState.timeValue;

    timeValue.year = date.getFullYear();
    timeValue.month = date.getMonth() + 1;
    timeValue.day = date.getDate();
    timeValue.hours = date.getHours();
    timeValue.minutes = date.getMinutes();
    timeValue.seconds = date.getSeconds();
    
    timeValue.currentObject = findObjectPerMonth(appMainState, timeValue.month)
}


function findObjectPerMonth(appMainState, month){
    const seasonData = appMainState.seasonData;
    return seasonData.find(date => date.id == month)
}





function loadPictureDueToTime(appMainState){
    const natureBackground = appMainState.selectors.natureBackground;
    const timeValue = appMainState.timeValue;



    for(let selectorBackground of natureBackground){
        console.log(selectorBackground)
        selectorBackground.style = `background-image: url(./img/${timeValue.currentObject.backgroundName});`;
    }
}





function showTime(appMainState){
    const timeValue = appMainState.timeValue;
    const timeDisplayArea = appMainState.selectors.timeClock;

    const tiemrText = `
        <h1>${timeValue.currentObject.seasonName}</h1>
        <p>${timeValue.year}/${timeValue.month}/${timeValue.day}</p>
        <p>${timeValue.hours} ${(timeValue.seconds % 2 === 0)? ":" : "&nbsp;"} ${timeValue.minutes}  
        ${(timeValue.seconds % 2 === 0)? ":" : "&nbsp;"}  ${timeValue.seconds}</p>
    `
    timeDisplayArea.innerHTML = tiemrText;
}





/*var random = 0;
var myInterval = setInterval(function(){
    random = Math.floor(Math.random() * 10000 + 1)
    document.write(`${random} || `)
    
    if(random > 8000) clearInterval(myInterval)

}, 1000)*/





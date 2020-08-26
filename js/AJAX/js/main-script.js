async function doSomePromise() {
    let a = await numberAsync();
    let b = await numberAsync();
    let c = await numberAsync();

    numberAsync().then(data => console.log('Then data', data ));
    if( await a && await b && await c){
        console.log(a + b + c);
    }else console.log('no data', a, b, c);
}
function numberAsync(){
    let randomTime = Math.floor(Math.random() * 3 + 1);
    let result;
    return new Promise((successResponse, bedResponse) => {
        setTimeout(() => {
            result = Math.floor(Math.random() * 100 + 1);
            console.log(result, "Timeout")
            return successResponse(result)
        }, randomTime * 1000);
    })
}
//doSomePromise()

/*================================ XMLHttpRequest ==========================================*/

function serverRequest(method, url) {
    return new Promise(response => {
        const request = new XMLHttpRequest();
        request.addEventListener("load", function(){
            const transformData = JSON.parse(this.responseText);
            //console.log(transformData)
            response(transformData)
        })
        request.open(method, url);
        request.send();
    })
}

async function dataCaller(){
    let finalData = [];
    finalData = await serverRequest("GET", "https://jsonplaceholder.typicode.com/photos");
    //console.log(finalData)
}
//dataCaller()

/*================================ Fetch ==========================================*/

function getServerDataUseFetch(url) {
    return fetch(url)
    .then(response => response.json())
}

async function fetchCaller(){
    let finalData = [];
    finalData = await getServerDataUseFetch("https://jsonplaceholder.typicode.com/photos");
    console.log(finalData)
}
//fetchCaller()









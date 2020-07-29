/*=================================== Number   0-9 -Infinity  Infinity /*===================================*/

/*
var a = parseInt(prompt("Введіть число а")),
b = parseInt(prompt("Введіть число а"));

var c = a + b;

var myNumber = parseInt("52313");
var mySecondNumber = "5";
//  + - /  *   %

var a = Math.PI;
console.log(a.toFixed(6), c)
*/

/* ====================================   String   // "Теікстові дані" /*===================================*/

/*var myTextV1 = new String("Hello");

var myTextV2 = "He'llo";
var myTextV3 = 'Hello \n a asdasd \
dasdasd asdasd a \n asdasd sadasd \
dasdadadasdqe\nqweqqeqweqweqwed';


var myTextV4 = `Hello asdasdasd
asdasdasdasd
asdasdasdadasd `;  // Template String*/


/*var str1 = "Hello";
var str2 = "World";

var helloText = str1 + " --- " + str2;
var helloTextV2 = `Browser says ${str1} ${str2} i can count to ${2 + 2}`;

var myEval = eval("2 + 2");
var mySecondEval = eval(new String("2 + 2"))


console.log(helloText)
console.log(helloTextV2)
console.log("2 + 2", myEval, mySecondEval)*/

/*
var t1 = " Hello ", t2 = "World";

var myExampleText = "Hello #Beer car String value car #js ";
var textWithTrim = "      Some Text        ";
var smallText = "SoMe TeXt";
var someRawLink = "MyPage>SeconD Link OF my PROFILE> My Profile";
var myLoremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
var someNumber = 12312;
var textLength = myExampleText.length;

var characterAtIndex = myExampleText.indexOf("f");
var characterAtWord = myExampleText.charAt(10);
var charCode = myExampleText.charCodeAt(3);
var concatHello = myExampleText.concat(t1, t2);
var isCharacterThere = myExampleText.includes("llo");
var wordEnds = myExampleText.endsWith("ng", 12 );
var charMatch = myExampleText.match("car");
var charMatchAll = [...myExampleText.matchAll("car")];
var repeatText = myExampleText.repeat(5);
var replace = myExampleText.replace("car", "plane".toUpperCase())
var replaceAll = myExampleText.replaceAll("car", "plane".toUpperCase())
var textSearch = myExampleText.search("value");
var textSplitArray = myExampleText.split('');
var textSplitByChar = myExampleText.split('#');
var textStartWith = myExampleText.startsWith("er", 9);
var textSubstring = myExampleText.substring(1, 4); /// 4 індекс не включає
var textSubstr = myExampleText.substr(1, 4);
var textTrim = textWithTrim.trim();
var textTrimLeft = textWithTrim.trimStart();
var textTrimRight = textWithTrim.trimEnd();
var stringNumber = someNumber.toString();
var upperCaseText = smallText.toUpperCase();
var lowerCaseText = smallText.toLowerCase();

var prepareLink = someRawLink.toLowerCase()
.replaceAll('> ', '/')
.replaceAll('>', '/')
.replaceAll(' ', '-');

console.log(someRawLink)
console.log(prepareLink)


var loremExert = myLoremIpsum.substr(0, 100)
.trimEnd()
.concat('...');

console.log(loremExert);

console.log(textLength)
console.log(characterAtIndex)
console.log(characterAtWord)
console.log(charCode)
console.log(concatHello)
console.log(isCharacterThere)
console.log(wordEnds)
console.log(charMatch)
console.log(charMatchAll)
console.log(repeatText, repeatText.length)
console.log(replace)
console.log(replaceAll)
console.log(textSearch)
console.log(textSplitArray)
console.log(textSplitByChar)
console.log(textStartWith)
console.log(textSubstring)
console.log(textSubstr)
console.log(textTrim)
console.log(textTrimLeft)
console.log(textTrimRight)
console.log(someNumber, typeof(stringNumber))
console.log(smallText,'|', upperCaseText,'|', lowerCaseText)*/


/* ================== Array ===================== */
// лінійна структура даних

// редагування /додати/видалити/змінити/    // перебір / вивід даних в процесі перебору

/*var arr = [];
var arr1 = new Array(5, 3, 2);
var arr2 = ["Text", false, 12, {name: "John"}];

var data1 = arr2[0];

console.log(data1)
arr2[0] = "Hello World";
delete arr2[0];

console.log(arr, arr1, typeof arr1, arr2)
console.log(arr2[0])*/

/*var arr = [
    [12, 23, 34],
    [
        [23, 21, 5], [6, 8, 9], [8, 3, 11]
    ],
    [22, 18, 19],
];
var findInArr = arr[1][2][0];
console.log(arr, findInArr);*/

/*var arr1 = [4, 5, 3];
var arr2 = ["sdf", "hfgh", "rtr"];

console.log(arr1 + arr2)
*/

/*var arr = new Array(8).fill(null);
console.log(arr);*/


/*var arr = Array.of(7, 45, 22);
console.log(arr)*/


/*let arr = [
    [12, 23, 34],
    [8, 3, 11, 23],
    [22, 18, 19],
]
var [a, b, c, d] = arr[1];
console.log(a + b + c + d)*/

/*
var arr = [12, 34, 23, 455, 223];
console.log(arr.length, arr[arr.length - 1] )*/

/*var arr = ["Lviv", "New York", "LA", "London", "Detroit"];
var arr2 = [ ...arr, "Ukraine", "UAS", "Germany"];


console.log(arr2)*/

/*
var arr = [];
try{
    arr.length = -1
}catch (e){
    console.log(e)
}*/

//var arr = [1, 2, 3, 4, 5];
/*arr.push(4);
arr.push(123);
arr.push("Hello");
console.log(arr);
arr.pop()
arr.pop()
arr.pop()
console.log(arr);*/

/*arr.unshift(22);
console.log(arr);

arr.shift();
arr.shift();
arr.shift();
console.log(arr);*/

/*
arr.splice(2, 3, "2.5");
console.log(arr);*/

/*
var itemToChange = 1;
var findItem = arr.indexOf(itemToChange);
arr.splice(findItem, 1, "Hello");
console.log(arr)*/

/*
arr.splice(1, 1);
console.log(arr)*/

/*
var arrLink = arr;

var arr2 = arr.slice();
arr2[1] = "hello";
console.log( arr, arr2)*/


/*var arr1 = [23, 54];
var arr2 = [11, 22, 33];
var arr3 = [44, 99, 88];

var arr4 = [].concat(arr1, arr2, arr3);

console.log(arr4, arr1);*/


//var arr =[4, 3434, 0, 10, 45, 1, 5, 7, 550];
//var arr =["fdg", "as", "vbn", "ty"];
/*
var sum = arr.reduce((acc, value) => {
    return acc * value
})
console.log(sum);*/

//console.log(Array.isArray(arr))


/*var telNumber = arr.join(" Hello ");

console.log(telNumber)
document.write(telNumber)*/

/*
var dataSort = arr.sort();
console.log(dataSort)

var dataCorrectSort = arr.sort((a, b) => {
    return b - a
});

var arrayReverse = dataCorrectSort.slice().reverse();
console.log(dataCorrectSort, arrayReverse);
*/


//var arr = ["asd", "cvbc", "wer", "cvb", "erter", "wer", "gfdgfd", "cbcb", "wer"];
//var arr1 = [1, 2, 3, 4, 45 ,56, 1];


/*var arrMap = arr1.map((item, index) => {
    console.log(item, index)
    return item * 2
})

console.log(arrMap)*/

//var objectToFind = "wer";
/*var person = arr.find((item, index) => {
    return item == objectToFind;
})
console.log(person, arr.indexOf(person));

var personFilter = arr.filter((item) => {
    return item == objectToFind;
})
console.log(personFilter);


var myNewArray = arr.forEach((item, index) => {
    item += "Hello";
    arr[index] += "World";
    console.log(item, index)
})
console.log(arr, myNewArray)*/

/*var isItemHere = arr.some((item) => item == objectToFind);
var isItemHereEvery = arr1.every((item) => item < 100);
console.log(isItemHere, isItemHereEvery);*/


//const entryObject = arr.entries();

/*
console.log(entryObject.next().value)
console.log(entryObject.next().value)
console.log(entryObject.next().value)
console.log(entryObject.next().value)
*/


/*
var helloText = "Hello".split("");
var fromData = Array.from("Hello");
console.log(helloText, fromData)
*/

/*
const number1 = parseInt(prompt("введіть число 1"));
const number2 = parseInt(prompt("введіть число 2"));
const number3 = parseInt(prompt("введіть число 3"));

var sumArray = [];

sumArray.push(number1);
sumArray.push(number2);
sumArray.push(number3);


var result = sumArray.reduce((accumulator, value) => {
    return accumulator + value
})
console.log(result)
*/


// =========== Logics ============  //
var [a, b, c] = ['-34', NaN, '0'];

var [d, e, f] = [34, "34", false];

/*if(a > b){
    if(a > c){
        document.write("A is greater")
    }else document.write("C is greater")
}else if(b > c){
    document.write("B is greater")
}else {
    document.write("C is greater")
}*/

/*
if(isNaN(a) || isNaN(b) || isNaN(c)) {
    document.write("There is no b or c or a")
}else  if( a > b && a > c){
    document.write("A is greater")
}else

if(b > c && b > a){
    document.write("B is greater")
} else {
    document.write("C is greater")
}
*/



/*
//  ==
console.log(a == e)
//  ===
console.log(a === e)
//  !   !=  !==
console.log(a != e)
//   >   <
console.log(a > b)
console.log(a < c)
// >=   <=
console.log(a <= d)*/

//  ||   &&

/*if(a && b && c && f){
    console.log("Дані присутні")
}else console.log("Дані неповні")*/

/*if(true && (true || false) && true && true){
    console.log("Дані присутні")
}else console.log("Дані неповні")*/
/*
if(false || false || false || f){
    console.log("Дані присутні")
}else console.log("Дані неповні")
*/

/*
switch(true){
    case a <= 10:
        document.write("a les then 10")
        break
    case a >= 10 && a < 20:
        document.write("a les then 20 but more then 10")
        break
    case a >= 20 && a < 50:
        document.write("a les then 50 but more then 20")
        break
    default:
        console.log("A is more then 50")
}

switch(a){
    case '-34':
        document.write("a is" + a)
        break
    default:
        document.write("a is other")
}


var ternary = (a || b || c)? "Something go wrong"
:(a > b)? "Hello"
: "Hi" ;

console.log(ternary)


var myInteger = 30;

var result = (myInteger % 2 == 0)? `${myInteger} is Even` : `${myInteger} is Odd`;
console.log(result, myInteger % 2);
*/
/*
if( myInteger % 2 == 0){
    console.log(myInteger, "is Even")
}else console.log(myInteger, "is Odd")*/

// ++   --

var someInteger = 1;

++someInteger;
someInteger++;
//console.log(someInteger)


// ================  Loops  ================= //
// for  ( init ,  condition , increment )   condition != true  increment ++
// while    n < 3
// do while

// for of   // "asd", "dfgd"
// for in      //  0, 1, 2, ...

var brakePoint = "bcvbcv1";
var continuePoint = "fgdg";
var arr = [
    "asda",
    "fgdg",
    "bcvbcv",
    "dgdfg",
    "hgdf"
];

/*
for(let i = 0; i < arr.length; i++){
    if(arr[i] === brakePoint) break
    if(arr[i] === continuePoint) continue
    //console.log(i, arr[i])
}

for(let i = 10; i >= 0; i--){
    //if(i >= 2 && i < 8) continue
    console.log(i)
    if(arr[i]){
        console.log(arr[i])
    }

}*/

/*var n = 0;
var t = 5-2;
while( n < 5 ) {
    n++
    ///console.log(n);
}

do{
    t++
    console.log(t)
}while( t < 5 )*/
//console.log(t)

/*
for(let index in arr){
    console.log(typeof index, index, arr[index])
}
for(let item of arr){
    console.log(item, item.length, arr.indexOf(item))
}
*/

var numberArr = [23, 344, 565, 22, 1, 0, 34, -3];

var max = -Infinity;
var min = Infinity;


for(let i = 0; i < numberArr.length; i++){
    if(numberArr[i] < min){
        min = numberArr[i];
    }
    if(numberArr[i] > max){
        max = numberArr[i];
    }
}
console.log(min, max)


// bubble sorting

/**/
/*
for(let i = 0; i < numberArr.length; i++){
    for(let j = 0; j < numberArr.length; j++){
        if(numberArr[j] > numberArr[j + 1] && (numberArr[j + 1] || numberArr[j + 1] == 0)){
            let jCopy = numberArr[j];
            numberArr[j] = numberArr[j + 1];
            numberArr[j + 1] = jCopy;
        }
    }
}

console.log(numberArr)



var intFirst = parseInt(prompt("Enter first number"));
var intSecond = parseInt(prompt("Enter Second number"));
var mathAction = prompt("Enter math action");

var validate = true;


console.log(intFirst,intSecond, mathAction )
if(
    !intFirst || !intSecond || !mathAction ||
    (typeof intFirst != "number" | typeof intSecond != "number" ||
    (mathAction != "+" &&  mathAction != "-" && mathAction != "*" && mathAction != "/"
))
){
    alert("Incorrect Input")
    validate != validate;

    if(typeof intFirst != "number") alert("Incorrect First number you must enter the Number");
    if(typeof intSecond != "number") alert("Incorrect Second number you must enter the Number");
    if(mathAction != "+" &&  mathAction != "-" && mathAction != "*" && mathAction != "/") alert("Incorrect math action you must enter + - * / ");

    if(!intFirst) alert("Incorrect First number");
    if(!intSecond) alert("Incorrect Second number");
    if(!mathAction) alert("Incorrect math action");
}


if(intFirst && intSecond && mathAction && validate){
    if(confirm("Do you want to make some calculations?")){
        let result;
        switch(true){
            case mathAction == "+":
                result = intFirst + intSecond;
                break;
            case mathAction == "-":
                result = intFirst - intSecond;
                break;
            case mathAction == "*":
                result = intFirst * intSecond;
                break;
            case mathAction == "/":
                result = intFirst / intSecond;
                break;
            default:
        }
        alert(result)
    }else alert("So sorry i hope you know what you doing")
}*/


/////====================  Function  ======================= ///

//var a = myFunction(56, 3);
//console.log(myVar)

function myFunction(a, b){              /// Declaration Function
    //console.log(a + b)
    var ba = 45;
    var result = a + b + sec();
    console.log(result, ba)
    return result
    
    function sec(){
        return 45
    }
}

///var myVar = 34;
/*
var b =  myFunction(5, 7);
var c = myFunction(555, 78);
var d = myFunction(12323, 787878);*/

//console.log(a, b, c, d)

var secondFunction = function(a, b){                // Expresion function
    return a + b
}
var res = secondFunction(5, 7);

//console.log(secondFunction)


var arrowFunc = (a, b) => a + b;
var extArrowFonc = (a, b, c) => {
    var result = a + b + c;
    return result
}

//console.log(arrowFunc(10, 5))

var funcBody = `return a + b`;
var funcObj = new Function('a', 'b', funcBody);
//console.log(funcObj(13, 13));


// IIFE
(function(a, b){
    var res = funcObj(a, b);
    console.log(res , "IIFE")
})(5, 6)

// clousure  замкненість

function clousureFoo(x) {
    return function(y) {
        //console.log(x, y, "clousure")
        return x + y;
    }
}
var clFoo = clousureFoo(5);
//console.log( clFoo(21) );


function grgumentCheck(a, b, c){
    arguments[0] = 100;
    let arg = arguments;
    console.log(arguments)
}

//grgumentCheck(4, 5, 3)


// recursion Data Tree    

function recursion(a){
    if( a <= 0) return
    //console.log(a)
    recursion(--a)
}

recursion(10)



function pow(x, n) {
    if (n == 1) {
      return x;
    } else {
    //console.log(n, x, "<<")
      return x * pow(x, --n);
    }
}
//console.log( pow(4, 3) );


/*function myCallBack(a, b){
    return a + b
}*/


function invokeSmth(first, second, callback){
    if(first && second){
        let result = first + second; 
        setTimeout( async function(){
            return callback(result)
        }, 2000)
    }
    console.log("script ended")
}

//var result = invokeSmth(5, 7, myCallBack);
var resultSecond = invokeSmth(5, 7, (res) => {
    let result = res + " callback";
    console.log("callback fire")
    console.log(result)
    return result
});

//  generic function 


function* generic(a){
    yield a + "/home";
    yield a + "/product/";
    yield a + "/product/:id";
    yield a + "/contacts";
}

const gen = generic('http:/hostname.com');

//console.log(gen.next().value)
//console.log(gen.next().value)
//console.log(gen.next().value)
//console.log(gen.next().value)




init()

function init() {
    let inputValue = getUserData();
    let validForm = validationUserData(inputValue);

    let finalResult = (validForm)? calculationProcess(inputValue) : "Something go wrong";
    alert(finalResult)
    if(confirm("Do you want to Calculate something else?")){
        init()
    }
}


function getUserData(){
    let intFirst = parseInt(prompt("Enter first number"));
    let intSecond = parseInt(prompt("Enter Second number"));
    let mathAction = prompt("Enter math action");
    return [].concat(intFirst, intSecond, mathAction)
}

function validationUserData(inputValue){
    if(!inputValue) return console.error("No data")
    for(let inputField of inputValue){
        if(!inputField && inputField != 0){
            alert("Incorrect field, pleaseTry again");
            init()
            return
        }
    }
    console.log("form successfull") 
    return true
}

/* =================== name of comments =================== */
//
// body
//
//
/* =================== end ===================== */

function calculationProcess(params){
    let result, intFirst = params[0], intSecond = params[1],
    mathAction = params[params.length - 1];

    let infiniteTest = checkOfInfinity(intSecond, mathAction);
    if(infiniteTest) return init()
    switch(true){
        case mathAction == "+" || mathAction == "-" || mathAction == "*" || mathAction == "/":
            result = calculation(intFirst, intSecond, mathAction);
            break;
        default:
            alert("Incorrect Math Action must be + - / *")
            init()
            return
    }
    return result
}




function calculation(a, b, mathAction){
    let result = eval(`${a} ${mathAction} ${b}`);
    console.log(result, "Math action", a, b, mathAction)
    return result
}




function checkOfInfinity(number, mathAction){
    if(mathAction == '/' && number == 0){
        alert("Devided by 0")
        return true
    }
    return
}
























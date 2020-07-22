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


var arr = ["asd", "cvbc", "wer", "cvb", "erter", "wer", "gfdgfd", "cbcb", "wer"];
var arr1 = [1, 2, 3, 4, 45 ,56, 1];


/*var arrMap = arr1.map((item, index) => {
    console.log(item, index)
    return item * 2
})

console.log(arrMap)*/

var objectToFind = "wer";
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


const entryObject = arr.entries();

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











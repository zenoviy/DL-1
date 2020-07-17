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
console.log(smallText,'|', upperCaseText,'|', lowerCaseText)




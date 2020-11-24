function sum(num1, num2) {

  // check num1 and num2 are numbers
  var isNum = Number.isFinite(num1) && Number.isFinite(num2);
  if (!isNum) {
    return false;
  }
  // calculate sum
  return num1 + num2;
}
console.log(sum(23, 16));


function greatestNum(num1,num2,num3){
  var isNum = Number.isFinite(num1) && Number.isFinite(num2) && Number.isFinite(num3);
  if (!isNum) {
    return false;
  }
  return Math.max(num1, num2, num3);
}
console.log(greatestNum(22, 06, 16));

function isEven(num1) {
  var isNum = Number.isFinite(num1);
  if (!isNum) {
    return false;
  }
	if (num1 % 2 == 0) return "even";
	else return "odd";
}
console.log(isEven(23));



function stringLength(string) {
  if (string.length <= 20) {
    return string.concat(string)
  } else {
    var index = string.length / 2;
    return string.slice(0, index);
  }
}
console.log(stringLength("Why is this hard?"));
console.log(stringLength("Why is this so so so hard?"));


function fibonacci(n) {
  var num1 = 1; 
  var num2 = 1; 
  var next;
  var sum = 0;
  for (var i = 0; i < n; i++) {
    console.log(num1);
    sum = sum + num1;
    next = num1 + num2; 
    num1 = num2; 
    num2 = next; 
  } 
  return sum;
}
fibonacci(8);
 
function frequentLetter(string) {
  var arr = string.split('');
  var callback = (acc,char) => {
    var len = string.split(char).length - 1;
    return len > acc[1] ? [char,len] : acc;
  }
  var initialValue = ['', 0];
  return arr.reduce(callback, initialValue)[0];
}
console.log(frequentLetter("hellllllllllllllo"));
var readlineSync = require('readline-sync');
var input = readlineSync.question("Enter a number to check: ");

function check(a){
	var arr = a.split("");
	var arr2 = arr.map(x=>Math.pow(parseInt(x), arr.length));
	var sum = arr2.reduce((a,b)=>a+b);
	console.log(sum);
	if (sum == a)return true;
	else return false
}

function main(){
	if(check(input)) console.log(input+ " is a Narcissistic Number");
	else console.log(input+ " is not a Narcissistic Number");
}

main();
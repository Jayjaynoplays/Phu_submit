var readlineSync = require('readline-sync');

var input = readlineSync.question("Enter Your string: ");

function checkValid(){
	if (input.length % 2 ==0) return false; 
	else if (input.length < 3) {
	 	return false;
	 } else return true;
}

function take3Mid(){
	var startIndex = (input.length-1)/2-1;
	var endIndex = (input.length-1)/2 +1;
	return input.slice(startIndex,endIndex+1); // 
}

function main(){
	if(checkValid()){
		console.log(take3Mid());
		console.log("right");
	}else{
		console.log("Invalid Input");
	}
}

main();
var readlineSync = require('readline-sync');

var input = readlineSync.question('Enter Your number array separated by "," : ');
var arr
function changeToArr(){
	arr = input.split(",");
	return arr.map(x=>parseInt(x));
}

function count(arrIn){
	var count = 1;
	var max = 1;
	var currentElement = arrIn[0];
    var maxCountedElement = arrIn[0];

	arrIn.sort(function(a,b){
		return a-b;
	});

	for(var i=1; i < arrIn.length; i++){
		if (currentElement == arrIn[i]){
			count++;
		}else{
			if (count > max) {
				max = count;
				maxCountElement = currentElement;
			}
			currentElement = arrIn[i];
			count = 1;
		}
	}
	return maxCountElement;
}


function main(){
	console.log("Maximum occurent times number is: " + count(changeToArr()));
}

main()
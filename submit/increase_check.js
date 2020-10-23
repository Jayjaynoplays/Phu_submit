var readlineSync = require('readline-sync');

var number = readlineSync.question("Enter Your Number: ");
var parsed = parseInt(number);

function checkValid(){
	if(isNaN(parsed)){
		console.log("Invalid Input")
		return false;
	}
	return true;
}

function check(){
	if (parsed % 10 == 0){
		return false;       // chia het cho 10 la auto chuoi do khong tang, giam truong hop cho vong for
	}
	if (parsed<10){
		return true;   // be hon 10 la auto chuoi do tang
	}
	for(var i=0; i<=number.length-1; i++){
		if(number[i] > number[i+1]){  // nếu số trước bé hơn số sau thì về false rồi break lặp;
			return false;
			break;
		}
	}
	return true;  
}
		
function main(){
 	if (checkValid()) {
 		if(check()){
 			console.log("It's increase!");
 		}else{
 			console.log("nah, it's not increase!")
 		}
 	}
}

main();
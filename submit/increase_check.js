var readlineSync = require('readline-sync');

var number = readlineSync.question("Enter Your Number: ");
var parsed = parseInt(number);

function checkValid(){
	if(isNaN(parsed)){
		console.log("Invalid Input"); //check input có là phải chuỗi số hay ko
		return false;
	} else{
		for (var i=0; i<=number.length-1; i++){  // check cho input có dạng: "123savcd"
			if(number.charCodeAt(i)<48 || number.charCodeAt(i)>57){
				console.log("Invalid Input");
				return false;
				break;
			}
		}
	}
	return true;
}

function check(){
	//đặt ra các if để giảm cho vòng for
	if (parsed % 10 == 0){
		return false;       // chia hết cho 10 thì auto chuỗi đó không tăng
	}
	if (parsed<10){
		return true;   // số đó bé hơn 10 là auto chuỗi đó tăng
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
 	}else{

 	}
}

main();
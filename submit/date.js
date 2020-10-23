var readlineSync = require('readline-sync');

var year = new Date().getFullYear();
var month = new Date().getMonth()+1;
var date = new Date().getDate();

function checkMonth(){
	if(month < 10){
		month = "0"+ month;
	}
	return month;
}

function main(){
	console.log("DATE PROGRAM");
	checkMonth();
	takeSelection();
}

function takeSelection(){
	console.log	("");
	console.log ("1. Month-Day-Year");
	console.log ("2. Month/Date/Year");
	console.log ("3. Date-Month-Year");
	console.log ("4. Date/Month/Year");
	console.log ("5. Exit");
	var select = readlineSync.question(">Your Option: ");
	switch (select) {
		case '1':
			show1();
			takeSelection();
			break;
		case '2':
			show2();
			takeSelection();
			break;
		case '3':
			show3();
			takeSelection();
			break;
		case '4':
			show4();
			takeSelection();
			break;
		case '5':break;
		default: console.log("Invalid option")
	}
}

function show1(){
	console.log(month +"-"+date+"-"+year);
}
function show2(){
	console.log(month +"/"+date+"/"+year);
}
function show3(){
	console.log(date +"-"+month+"-"+year);
}
function show4(){
	console.log(date +"/"+month+"/"+year);
}

main();
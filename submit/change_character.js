var readlineSync = require('readline-sync');

var input = readlineSync.question("Enter string with alphabet characters only: ");
var arr = [];

function vieToEng(a){   // biến chữ cái tiếng việt thành tiếng anh @@ 
	var str = a;
   	str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "a");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "e");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "i");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "o");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "u");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "y");
    str = str.replace(/Đ/g, "d");
    str = str.trim(); 
    return str;
}

function checkValid(){
	for (var i=0; i<=input.length-1; i++){  // make sure input's characters are all in alphabet
		if(input.charCodeAt(i) < 65 ||(input.charCodeAt(i)> 90 && input.charCodeAt(i) < 97)|| input.charCodeAt(i) >122 ){ // upper case and lower case character
			console.log("Alphabet characters only!");
			return false;
			break;
		}
	}
	return true;
}	


function change(){
	for (var i=0; i<=input.length-1; i++){
		var charcode;
		if(input.charCodeAt(i) == 90){               // nếu là Z thì thành A
			charcode = 65;
		}else{
			if(input.charCodeAt(i) == 122){         // nếu là z thì thành a
				charcode = 97;
			}else{
				charcode = input.charCodeAt(i)+1;
			}
		}
		arr.push(String.fromCharCode(charcode));  // với mỗi kí tự sau khi change sẽ được push vào mảng
	}
	input = arr.toString(); // biến mảng thành string
	return input.split(",").join(""); // bỏ dấu phẩy
}

function main(){
	vieToEng(input);
	if(checkValid()){
		console.log(change());
	}
}
 main();
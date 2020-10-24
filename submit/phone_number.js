function makePhoneNumb(number){
	var form="(xxx) xxx-xxxx";

	for(var i=0; i<number.length; i++){
    	form = form.replace('x', number[i]);
  	}
  	return form;
}
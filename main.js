var gas=["10w40", "20w50"];
var dies="15w40";
var hyb=["0w20", "5w20", "5w30", "0w40"];

 // var button1 = document.getElementsByClassName("container");

function add() {
	var petr=document.getElementById("gasoline");
	var petro=document.getElementById("diesel");
	var petrol=document.getElementById("hybrid");
	
	if(petr.checked===false && petro.checked===false && petrol.checked===false) {
		alert("YOU MUST SELECT ENGINE TYPE")
	}else if(petr.checked) {
     document.getElementById("result").innerHTML="YOU CAN CHOOSE GRADE ''"+gas[0]+"'' OR GRADE ''"+gas[1]+"''"
 } else if(petro.checked) {
 	document.getElementById("result").innerHTML="YOU SUITABLE GRADE IS ''"+dies+"''"
 } else if(petrol.checked) {
 	document.getElementById("result").innerHTML="YOU CAN CHOOSE GRADE ''"+hyb[0]+" ''OR GRADE ''"+hyb[1]+"'' OR GRADE ''"+hyb[2]+"'' OR GRADE ''"+hyb[3]+"''"

 }
}

function addSize() {
var size = document.getElementById("inputA").value
	
	if (size === "") {
		alert("YOU MUST ENTER ENGINE SIZE")
	} else if (size <= 1200) {
	document.getElementById("resultAdd").innerHTML = "YOU NEED ("+3+") LITRES OF OIL"
	} else if(size > 1200 && size <= 2000) {
	document.getElementById("resultAdd").innerHTML = "YOU NEED ("+4+") LITRES OF OIL"
}else if(size > 2000 && size <= 3000) {
	document.getElementById("resultAdd").innerHTML ="YOU NEED ("+5+") LITRES OF OIL"
}else if(size > 3000 && size <= 4000) {
	document.getElementById("resultAdd").innerHTML = "YOU NEED ("+6+") LITRES OF OIL"
}else {
	document.getElementById("resultAdd").innerHTML = "YOU NEED ("+7+") LITRES OF OIL"
}
}
	

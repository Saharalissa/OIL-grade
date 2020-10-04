var gas=["10w40", "20w50"];
var dies="15w40";
var hyb=["0w20", "5w20", "5w30", "0w40"];

 // var button1 = document.getElementsByClassName("container");

function add() {
	var petr=document.getElementById("gasoline");
	var petro=document.getElementById("diesel")
	var petrol=document.getElementById("hybrid")
	
	 if(petr.checked) {
     document.getElementById("result").innerHTML="YOU CAN CHOOSE GRADE "+gas[0]+" OR "+gas[1]
 } else if(petro.checked) {
 	document.getElementById("result").innerHTML="YOU CAN CHOOSE GRADE "+dies
 } else if(petrol.checked) {
 	document.getElementById("result").innerHTML="YOU CAN CHOOSE GRADE "+hyb[0]+" OR "+hyb[1]+" OR "+hyb[2]+" OR "+hyb[3]

 }
}
	



// const paragraph = document.querySelector('p');
// button.addEventListener('click', updateButton);


// $("#sort").click(function() {
// 	if (button1.value === 'Hybrid') {
//     button1.value = 'gas';
//     alert('The machine has started!')}})
//     // paragraph.textContent = 'The machine has started!';
//   // } else {
//   //   button.value = 'Start machine';
//   //   paragraph.textContent = 'The machine is stopped.';
//   // }
// }
// })


 // $("gas").appendTo("#result");

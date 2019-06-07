 function myFunction() {
 //Stopping the timer when submitted.
clearInterval(x);
takenTime();
//Creating a variable count to calculate the total marks and initializing it to zero.
 var count=0;

//Answer Checking.
if(document.getElementById("ans1").checked){
document.getElementById("status1").innerHTML = "Correct".fontcolor("#27CB27");
count=count+2;
}else{
document.getElementById("status1").innerHTML = "Incorrect. The correct answer is 'Sri Jayawardhanapura'.".fontcolor("red");
count=count-1;
}

if(document.getElementById("ans2").checked){
document.getElementById("status2").innerHTML = "Correct".fontcolor("#27CB27");
count=count+2;
}else{
document.getElementById("status2").innerHTML = "Incorrect. The correct answer is 'Mahaveli'.".fontcolor("red");
count=count-1;
}

if(document.getElementById("ans3").checked){
document.getElementById("status3").innerHTML = "Correct".fontcolor("#27CB27");
count=count+2;
}else{
document.getElementById("status3").innerHTML = "Incorrect. The correct answer is 'Piduruthalagala'".fontcolor("red");
count=count-1;
}

if(document.getElementById("ans4").checked){
document.getElementById("status4").innerHTML = "Correct".fontcolor("#27CB27");
count=count+2;
}else{
document.getElementById("status4").innerHTML = "Incorrect.The correct answer is 'Rupee'.".fontcolor("red");
count=count-1;
}

if(document.getElementById("ans5").checked){
document.getElementById("status5").innerHTML = "Correct".fontcolor("#27CB27");
count=count+2;
}else{
document.getElementById("status5").innerHTML = "Incorrect. The correct answer is 'Vollyball'.".fontcolor("red");
count=count-1;
}

if(document.getElementById("ans6").checked){
document.getElementById("status6").innerHTML = "Correct".fontcolor("#27CB27");
count=count+2;
}else{
document.getElementById("status6").innerHTML = "Incorrect. The correct answer is '94'.".fontcolor("red");
count=count-1;
}

if(document.getElementById("ans7").checked){
document.getElementById("status7").innerHTML = "Correct".fontcolor("#27CB27");
count=count+2;
}else{
document.getElementById("status7").innerHTML = "Incorrect. The correct answer is 'Babarakanda'.".fontcolor("red");
count=count-1;
}

if(document.getElementById("ans8").checked){
document.getElementById("status8").innerHTML = "Correct".fontcolor("#27CB27");
count=count+2;
}else{
document.getElementById("status8").innerHTML = "Incorrect. The correct answer is 'South Asia'.".fontcolor("red");
count=count-1;
}

if(document.getElementById("ans9").checked){
document.getElementById("status9").innerHTML = "Correct".fontcolor("#27CB27");
count=count+2;
}else{
document.getElementById("status9").innerHTML = "Incorrect. The correct answer is 'Tropical'.".fontcolor("red");
count=count-1;
}

if(document.getElementById("ans10").checked){
document.getElementById("status10").innerHTML = "Correct".fontcolor("#27CB27");
count=count+2;
}else{
document.getElementById("status10").innerHTML = "Incorrect. The correct answer is 'False'.".fontcolor("red");
count=count-1;
}

//Changing the background color according to the marks.
if(count<5){
document.body.style.backgroundColor = "#E74C3C";
}
else if(count>=5 && count<10){
document.body.style.backgroundColor = "#F5B041";
}
else if(count>=10 && count<15){
document.body.style.backgroundColor = "#76D7C4";
}
else{
document.body.style.backgroundColor = "#82E0AA";
}

//Making the least marks as zero.
if(count<0){
document.getElementById("marks").innerHTML ="Total Marks: " + 0;
}
else{
document.getElementById("marks").innerHTML ="Total Marks: " + count;
}
return true;
}
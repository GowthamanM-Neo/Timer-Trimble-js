var myVar;
var num = 0;
function setNumber(n){
    if(n<10){
        document.getElementById("number").innerHTML = "000"+num;
    }else if(n<100){
        document.getElementById("number").innerHTML = "00"+num;
    }else if(n<1000){
        document.getElementById("number").innerHTML = "0"+num;
    }else if(n<10000){
        document.getElementById("number").innerHTML = ""+num;
    }else{
        document.getElementById("number").innerHTML = "0000";
        myStopFunction();
    }
}
function myFunction() {
    document.getElementById("play").style.display = "none";
    document.getElementById("pause").style.display = "block";
  myVar = setInterval(function myFunction(){ 
    console.log(num);
    num++; 
    setNumber(num);
},1000);
}

function myStopFunction() {
    document.getElementById("play").style.display = "block";
    document.getElementById("pause").style.display = "none";
  clearInterval(myVar);
}
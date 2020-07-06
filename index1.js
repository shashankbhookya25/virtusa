console.log("linked");

async function promise1() {
    document.getElementById("cse1").style.display="none";
    document.getElementById("message1").innerHTML="Loading, Please wait..."
    setTimeout(function(){
        document.getElementById("message1").style.display="none";
         document.getElementById("cse1").style.display="block";
         }, 4000);
  }
 function promise2() {
    document.getElementById("cse2").style.display="none";
    document.getElementById("message2").innerHTML="Loading, Please wait..."
    setTimeout(function(){
        document.getElementById("message2").style.display="none";
         document.getElementById("cse2").style.display="block";
         }, 6000);
  }

  function promise3() {
    document.getElementById("cse3").style.display="none";
    document.getElementById("message3").innerHTML="Loading, Please wait..."
    setTimeout(function(){
        document.getElementById("message3").style.display="none";
         document.getElementById("cse3").style.display="block";
         }, 8000);
  }

window.onload=function(){promise1().then(promise2()).then(promise3());}

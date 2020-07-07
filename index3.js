console.log("linked");

async function promise1() {
    document.getElementById("campus").style.display="none";
    document.getElementById("message1").innerHTML="Loading, Please wait..."
    setTimeout(function(){
        document.getElementById("message1").style.display="none";
         document.getElementById("campus").style.display="block";
         }, 4000);
  }
 function promise2() {
    document.getElementById("email").style.display="none";
    document.getElementById("message2").innerHTML="Loading, Please wait..."
    setTimeout(function(){
        document.getElementById("message2").style.display="none";
         document.getElementById("email").style.display="block";
         }, 6000);
  }

  function promise3() {
    document.getElementById("location").style.display="none";
    document.getElementById("message3").innerHTML="Loading, Please wait..."
    setTimeout(function(){
        document.getElementById("message3").style.display="none";
         document.getElementById("location").style.display="block";
         }, 8000);
  }

window.onload=function(){promise1().then(promise2()).then(promise3());}

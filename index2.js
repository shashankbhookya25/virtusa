console.log("linked");

async function promise1() {
    document.getElementById("vision").style.display="none";
    document.getElementById("message1").innerHTML="Please Wait, Loading..."
    setTimeout(function(){
        document.getElementById("message1").style.display="none";
         document.getElementById("vision").style.display="block";
         }, 6000);
  }
 function promise2() {
    document.getElementById("Mission").style.display="none";
    document.getElementById("message2").innerHTML="Please Wait, Loading..."
    setTimeout(function(){
        document.getElementById("message2").style.display="none";
         document.getElementById("Mission").style.display="block";
         }, 8000);
  }
  function promise3() {
    document.getElementById("V&M").style.display="none";
    document.getElementById("message3").innerHTML="Please Wait, Loading..."
    setTimeout(function(){
        document.getElementById("message3").style.display="none";
         document.getElementById("V&M").style.display="block";
         }, 4000);
  }

  

window.onload=function(){promise1().then(promise2()).then(promise3());}
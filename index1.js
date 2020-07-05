var Promise1 = new Promise(function (resolve,reject)  {
    const card1=`
    <div class="card" style="width:300px; float:left;margin:10px;">

            <div class="card-body">
                <img src="images/cse-department.png" class="img-fluid">
            </div>
            <div class="card-footer">
                <p class="h4">CSE</p>
                <p class="text-muted text-justify text-muted">The faculty in the department consists of seven Professors, ten Associate Professors, out of which nine are pursuing Ph.D. in their respective areas from JNTU, OU and UoH, and twenty six Assistant Professors, out of which one is pursuing Ph.D.
                </p>
            </div>
        </div>
    `
    setTimeout(function(){
        document.getElementById("logo1").innerHTML=card1;
        console.log("first");
        resolve(card1);
    }
    ,3000);

});

var Promise2 = new Promise(function (resolve,reject)  {
    const card=`
    <div class="card" style="width:300px; float:left;margin:10px;">

            <div class="card-body">
                <img src="images/ece-logo.png" class="img-fluid">
            </div>
            <div class="card-footer">
                <p class="h4">CSE</p>
                <p class="text-muted text-justify text-muted">The faculty in the department consists of seven Professors, ten Associate Professors, out of which nine are pursuing Ph.D. in their respective areas from JNTU, OU and UoH, and twenty six Assistant Professors, out of which one is pursuing Ph.D.
                </p>
            </div>
        </div>
    `
    setTimeout(
        function(){
            document.getElementById("logo2").innerHTML=card;
            console.log("second");
            resolve(card);
        }
    ,6000);

});
var Promise3 = new Promise(function (resolve,reject)  {
    const card=`
    <div class="card" style="width:300px; float:left;margin:10px;">

    <div class="card-body">
        <img src="images/it-logo.png" class="img-fluid">
    </div>
    <div class="card-footer">
        <p class="h4">CSE</p>
        <p class="text-muted text-justify text-muted">The faculty in the department consists of seven Professors, ten Associate Professors, out of which nine are pursuing Ph.D. in their respective areas from JNTU, OU and UoH, and twenty six Assistant Professors, out of which one is pursuing Ph.D.
        </p>
    </div>
</div>
    `
    setTimeout(
        function(){
            document.getElementById("logo3").innerHTML=card
            console.log("third");
            resolve(card);
        }
    ,9000);

});

async  function render  ()  {
    await Promise1;
    await Promise2;
    await Promise3;
}
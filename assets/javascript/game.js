var targetNumber = 0;
var counter = 0;
var imageCrystalID = []
var wins = 0;
var losses = 0;



function randomIntFromInterval(min, max) {
    var mathResult = Math.floor(Math.random() * (max - min + 1) + min);
    return mathResult
}

function evenIntFromInterval(min, max) {
    var mathResult = Math.floor(Math.random() * ((max - min + 1) / 2) * 2 + min);
    return mathResult
}

targetNumber = evenIntFromInterval(30, 40);
$("#randomNumber").html(targetNumber);

for (var i = 0; i < 4; i++) {
    var crystalID = randomIntFromInterval(1, 5);
    imageCrystalID.push(crystalID);
}

$("#ruby").attr("data-CrystalValue", imageCrystalID[0]);
$("#diamond").attr("data-CrystalValue", imageCrystalID[1]);
$("#crystalPurple").attr("data-CrystalValue", imageCrystalID[2]);
$("#crystalGreen").attr("data-CrystalValue", imageCrystalID[3]);


$("img").on("click", function () {
    winValue = $("#wins").html;
    lossvalue = $("#losses").html;
    var CrystalValue = $(this).attr("data-CrystalValue");

    CrystalValue = parseInt(CrystalValue);
    counter += CrystalValue;

    $("#resultNumber").html(counter);

    if (counter === targetNumber) {
        wins++;
        $("#gameStatusResult").html("You Won!!")
        $("#winCount").html(wins);
        counter = 0;
    } 
    else if (counter > targetNumber) {
        losses++;
        $("#gameStatusResult").html("you lost!!")
        $("#lossCount").html(losses);
        counter = 0;
    }
});

$("button").click(function () {
    location.reload();
});
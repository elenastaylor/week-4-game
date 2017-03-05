$(document).ready(function() {
    //The player will see a random generated number from 19 to 120 at the start of the game.
    var numToGuess = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $("#matchNumber").html(numToGuess);

    //COUNTERS
    var wins = 0;
    var losses = 0;
    var counter = 0;

    var crystalValue1 = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
    var crystalValue2 = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
    var crystalValue3 = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
    var crystalValue4 = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);

    //RESET
    function resetScore() {
            crystalValue1 = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
            crystalValue2 = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
            crystalValue3 = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
            crystalValue4 = (Math.floor(Math.random() * (12 - 1 + 1)) + 1);
            counter = 0;
        $("#userScore").html(counter);
        numToGuess = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        $("#matchNumber").html(numToGuess);
    }

    $("#userScore").html(counter);


    // Each crystal will have a random hidden value between 1 - 12

    console.log("Crystal 1 Value: " + crystalValue1);
    console.log("Crystal 2 Value: " + crystalValue2);
    console.log("Crystal 3 Value: " + crystalValue3);
    console.log("Crystal 4 Value: " + crystalValue4);

    // When the player clicks a crystal it will add a specific amount of points to the player's total score.
    $('.crystalImage1').on('click', function() {
        counter = counter + crystalValue1;
        console.log('crystal 1 ' + counter);
        $("#userScore").html(counter);
        if (counter == numToGuess) {
            alert('You WON!');
            resetScore();
            wins++;
        } else if (counter > numToGuess) {
            alert("You LOST");
            resetScore();
            losses++;
        }

        $("#win").html(wins);
        $("#lose").html(losses);

    });

    $('.crystalImage2').on('click', function() {
        counter = counter + crystalValue2;
        console.log('crystal 2 ' + counter);
        $("#userScore").html(counter);
        if (counter == numToGuess) {
            alert('You WON!');
            resetScore();
            wins++;
        } else if (counter > numToGuess) {
            alert("You LOST");
            resetScore();
            losses++;
        }

        $("#win").html(wins);
        $("#lose").html(losses);

    });

    $('.crystalImage3').on('click', function() {
        counter = counter + crystalValue3;
        console.log('crystal 3 ' + counter);
        $("#userScore").html(counter);
        if (counter == numToGuess) {
            alert('You WON!');
            resetScore();
            wins++;
        } else if (counter > numToGuess) {
            alert("You LOST");
            resetScore();
            losses++;
        }

        $("#win").html(wins);
        $("#lose").html(losses);

    });

    $('.crystalImage4').on('click', function() {
        counter = counter + crystalValue4;
        console.log('crystal 4 ' + counter);
        $("#userScore").html(counter);
        if (counter == numToGuess) {
            alert('You WON!');
            resetScore();
            wins++;
        } else if (counter > numToGuess) {
            alert("You LOST");
            resetScore();
            losses++;
        }

        $("#win").html(wins);
        $("#lose").html(losses);

    });

});
//Game Design Notes:
//The random number shown at the start of the game is 19 - 120.
//Each crystal should have a random hidden value between 1 - 12.
//There will be four crystals displayed as buttons on the page.
//The player will be shown a random number at the start of the game.
//When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
//The game will hide this amount until the player clicks a crystal.
//When they do click one, the player's score counter will update.
//The player wins if their total score matches the random number from the beginning of the game.
//The player loses if their score goes above the random number.
//The game restarts whenever the player wins or loses.
//When the game begins again, the player will see a new random number. Also, all the crystals will have four new hidden values. The user's score (and score counter) will reset to zero.
//The app will show the number of games the player wins and loses.


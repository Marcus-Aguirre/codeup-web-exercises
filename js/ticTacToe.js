"use strict";


    var gridA;
    var gridB;
    var gridC;


    var threeInARow = false;
    var playersTurn = "playertwo";



    function flickerWinner(winGridA, winGridB, winGridC) {

        if (winGridA === false) {
            $("#gridOne").css("background-color", "white")
                .css("color", "black");
            $("#gridTwo").css("background-color", "white")
                .css("color", "black");
            $("#gridThree").css("background-color", "white")
                .css("color", "black");

            setTimeout(function () {
                $("#gridFour").css("background-color", "white")
                    .css("color", "black");
                $("#gridFive").css("background-color", "white")
                    .css("color", "black");
                $("#gridSix").css("background-color", "white")
                    .css("color", "black");

            }, 200);

            setTimeout(function () {
                $("#gridSeven").css("background-color", "white")
                    .css("color", "black");
                $("#gridEight").css("background-color", "white")
                    .css("color", "black");
                $("#gridNine").css("background-color", "white")
                    .css("color", "black");

            }, 400);

        } else {

            $(winGridA).css("background-color", "white")
                .css("color", "black");
            $(winGridB).css("background-color", "white")
                .css("color", "black");
            $(winGridC).css("background-color", "white")
                .css("color", "black");

            setTimeout(function () {
                $(winGridA).css("background-color", "black")
                    .css("color", "white");
                $(winGridB).css("background-color", "black")
                    .css("color", "white");
                $(winGridC).css("background-color", "black")
                    .css("color", "white");

            }, 200);

            setTimeout(function () {
                $(winGridA).css("background-color", "white")
                    .css("color", "black");
                $(winGridB).css("background-color", "white")
                    .css("color", "black");
                $(winGridC).css("background-color", "white")
                    .css("color", "black");

            }, 400);

        }

    }


    function scratch() {


        if (($("#gridOne").html() === "X" || $("#gridOne").html() === "O")
            && ($("#gridTwo").html() === "X" || $("#gridTwo").html() === "O")
            && ($("#gridThree").html() === "X" || $("#gridThree").html() === "O")
            && ($("#gridFour").html() === "X" || $("#gridFour").html() === "O")
            && ($("#gridFive").html() === "X" || $("#gridFive").html() === "O")
            && ($("#gridSix").html() === "X" || $("#gridSix").html() === "O")
            && ($("#gridSeven").html() === "X" || $("#gridSeven").html() === "O")
            && ($("#gridEight").html() === "X" || $("#gridEight").html() === "O")
            && ($("#gridNine").html() === "X" || $("#gridNine").html() === "O")) {


            gridA = false;
            gridB = false;
            gridC = false;

        }

        winningCombinations();


    }


    $("#turnSwitch").click(function () {

        $("#turnSwitch").toggleClass("turnSwitch");
        $("#turnSwitch").html("PLAYER X").toggleClass("xPlayerBox");


            playerOne();

    });

    $("#again").click(function () {
        window.location.reload(true);
    });

    function winningCombinations() {


        if ($("#gridOne").html() === "X" && $("#gridTwo").html() === "X" && $("#gridThree").html() === "X") {
            threeInARow = "X";
            gridA = "#gridOne";
            gridB = "#gridTwo";
            gridC = "#gridThree";

        } else if ($("#gridFour").html() === "X" && $("#gridFive").html() === "X" && $("#gridSix").html() === "X") {
            threeInARow = "X";
            gridA = "#gridFour";
            gridB = "#gridFive";
            gridC = "#gridSix";
        } else if ($("#gridSeven").html() === "X" && $("#gridEight").html() === "X" && $("#gridNine").html() === "X") {
            threeInARow = "X";
            gridA = "#gridSeven";
            gridB = "#gridEight";
            gridC = "#gridNine";
        } else if ($("#gridOne").html() === "X" && $("#gridFive").html() === "X" && $("#gridNine").html() === "X") {
            threeInARow = "X";
            gridA = "#gridOne";
            gridB = "#gridFive";
            gridC = "#gridNine";
        } else if ($("#gridThree").html() === "X" && $("#gridFive").html() === "X" && $("#gridSeven").html() === "X") {
            threeInARow = "X";
            gridA = "#gridThree";
            gridB = "#gridFive";
            gridC = "#gridSeven";
        } else if ($("#gridOne").html() === "X" && $("#gridFour").html() === "X" && $("#gridSeven").html() === "X") {
            threeInARow = "X";
            gridA = "#gridOne";
            gridB = "#gridFour";
            gridC = "#gridSeven";
        } else if ($("#gridThree").html() === "X" && $("#gridSix").html() === "X" && $("#gridNine").html() === "X") {
            threeInARow = "X";
            gridA = "#gridThree";
            gridB = "#gridSix";
            gridC = "#gridNine";
        } else if ($("#gridTwo").html() === "X" && $("#gridFive").html() === "X" && $("#gridEight").html() === "X") {
            threeInARow = "X";
            gridA = "#gridTwo";
            gridB = "#gridFive";
            gridC = "#gridEight";
        }

        if ($("#gridOne").html() === "O" && $("#gridTwo").html() === "O" && $("#gridThree").html() === "O") {
            threeInARow = "O";
            gridA = "#gridOne";
            gridB = "#gridTwo";
            gridC = "#gridThree";

        } else if ($("#gridFour").html() === "O" && $("#gridFive").html() === "O" && $("#gridSix").html() === "O") {
            threeInARow = "O";
            gridA = "#gridFour";
            gridB = "#gridFive";
            gridC = "#gridSix";
        } else if ($("#gridSeven").html() === "O" && $("#gridEight").html() === "O" && $("#gridNine").html() === "O") {
            threeInARow = "O";
            gridA = "#gridSeven";
            gridB = "#gridEight";
            gridC = "#gridNine";
        } else if ($("#gridOne").html() === "O" && $("#gridFive").html() === "O" && $("#gridNine").html() === "O") {
            threeInARow = "O";
            gridA = "#gridOne";
            gridB = "#gridFive";
            gridC = "#gridNine";
        } else if ($("#gridThree").html() === "O" && $("#gridFive").html() === "O" && $("#gridSeven").html() === "O") {
            threeInARow = "O";
            gridA = "#gridThree";
            gridB = "#gridFive";
            gridC = "#gridSeven";
        } else if ($("#gridOne").html() === "O" && $("#gridFour").html() === "O" && $("#gridSeven").html() === "O") {
            threeInARow = "O";
            gridA = "#gridOne";
            gridB = "#gridFour";
            gridC = "#gridSeven";
        } else if ($("#gridThree").html() === "O" && $("#gridSix").html() === "O" && $("#gridNine").html() === "O") {
            threeInARow = "O";
            gridA = "#gridThree";
            gridB = "#gridSix";
            gridC = "#gridNine";
        } else if ($("#gridTwo").html() === "O" && $("#gridFive").html() === "O" && $("#gridEight").html() === "O") {
            threeInARow = "O";
            gridA = "#gridTwo";
            gridB = "#gridFive";
            gridC = "#gridEight";
        }


        if (gridA === false) {


            flickerWinner(gridA, gridB, gridC);

            setTimeout(function () {
            $("#turnSwitch").html("SCRATCH");

                // alert("TIE GAME");
            }, 500);
        } else if (threeInARow === "X") {
            // $("#turnSwitch").html("PLAYER X WINS");

            flickerWinner(gridA, gridB, gridC);

            setTimeout(function () {
                $("#turnSwitch").html("PLAYER X WINS");
                // alert("Player X wins!!!");
            }, 500);


        } else if (threeInARow === "O") {

            flickerWinner(gridA, gridB, gridC);


            setTimeout(function () {

                $("#turnSwitch").html("PLAYER O WINS");
                // alert("Player O wins!!!!!");
            }, 500);



        }

    }


    function playerOne() {


        $("div").click(function () {

            for (var i = 0; i < 1; i++) {
                if ($(this).html() === "O") {

                    $(this).toggleClass("o-box").html("O");
                    $("div").off();

                    alert("No Cheating, Player X. Choose an empty space.");

                    playerOne();

                } else if ($(this).html() === "X") {

                    $(this).toggleClass("x-box").html("X");
                    $("div").off();

                    alert("No Cheating, Player X. Choose an empty space.");

                    playerOne();

                } else if ($(this).html() === ".") {
                    $(this).toggleClass("x-box").html("X");

                    setTimeout(function () {

                        $("div").off();

                        scratch();

                        $("#turnSwitch").toggleClass("xPlayerBox");
                        $("#turnSwitch").html("PLAYER O").toggleClass("oPlayerBox");

                        playersTurn = "playertwo";

                        playerTwo();

                    }, 300);

                }
            }
        })
    }


    function playerTwo() {


        $("div").click(function () {

            for (var i = 0; i < 1; i++) {
                if ($(this).html() === "X") {

                    $(this).toggleClass("x-box").html("X");
                    $("div").off();

                    alert("No Cheating, Player O. Choose an empty space.");

                    playerTwo();

                } else if ($(this).html() === "O") {

                    $(this).toggleClass("o-box").html("O");
                    $("div").off();

                    alert("No Cheating, Player O. Choose an empty space.");

                    playerTwo();

                } else if ($(this).html() === ".") {
                    $(this).toggleClass("o-box").html("O");

                    setTimeout(function () {
                        $("div").off();

                        scratch();

                        $("#turnSwitch").toggleClass("oPlayerBox");
                        $("#turnSwitch").html("PLAYER X").toggleClass("xPlayerBox");

                        playersTurn = "playerone";

                        playerOne();


                    }, 550);

                }
            }

        })
    }








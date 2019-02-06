"use strict";

alert("Welcome to my website");
var fav_color = prompt("What is your favorite color?");
alert("Hey " + fav_color + " is my favorite color also!");


var movie1 = prompt("You have three movies rented, how many days have you rented the first movie?");
var movie2 = prompt("How many days have you rented the second movie?");
var movie3 = prompt("How many days have you rented the third movie?");

var pay_per_day = 3;

var total_days_rented = parseInt(movie1) + parseInt(movie2) + parseInt(movie3);

var total_fee = pay_per_day * total_days_rented;

alert("You have rented movies for a combined total of " + total_days_rented + " days.");



alert("Your total fee for all of your movies is $" + total_fee + ".");



var g_pay = prompt("How much do you get paid at Google?");
var f_pay = prompt("How much do you get paid at Facebook?");
var a_pay = prompt("How much do you get paid at Amazon?");

var g_hours = prompt("How many hours did you work at Google?");
var f_hours = prompt("How many hours did you work at Facebook?");
var a_hours = prompt("How many hours did you work at Amazon?");

var google_total = g_hours * g_pay;
var fbook_total = f_hours * f_pay;
var amzn_total = a_hours * a_pay;

var total_pay = parseInt(google_total) + parseInt(fbook_total) + parseInt(amzn_total);


alert("Your total pay from all your jobs is $ " + total_pay + ", thats a lot of money!!!");



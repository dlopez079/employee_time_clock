//JQUERY OPEN 
$(document).ready(function() {

    //Make sure that javascript file is linked to index.html
    console.log("Linked Up");

//Develop the drop down so that employees can select their names.

//Develop the time clock so they can see a visual of a clock.

//Create a new date object
var current_date = new Date ( );

var month_names = new Array ( );
month_names[month_names.length] = "January";
month_names[month_names.length] = "February";
month_names[month_names.length] = "March";
month_names[month_names.length] = "April";
month_names[month_names.length] = "May";
month_names[month_names.length] = "June";
month_names[month_names.length] = "July";
month_names[month_names.length] = "August";
month_names[month_names.length] = "September";
month_names[month_names.length] = "October";
month_names[month_names.length] = "November";
month_names[month_names.length] = "December";

var day_names = new Array ( );
day_names[day_names.length] = "Sunday";
day_names[day_names.length] = "Monday";
day_names[day_names.length] = "Tuesday";
day_names[day_names.length] = "Wednesday";
day_names[day_names.length] = "Thursday";
day_names[day_names.length] = "Friday";
day_names[day_names.length] = "Saturday";

var current_day = day_names[current_date.getDay()]; //Get current Day
var current_month = month_names[current_date.getMonth()]; //get current month
var current_numday = current_date.getDate(); //get current number day
var current_fullYear = current_date.getFullYear(); //Get current year
var current_hours = current_date.getHours(); //Get current hours
var current_mins = current_date.getMinutes(); //Get current Minutes
var current_secs = current_date.getSeconds(); // Get current seconds

var fullDate = current_day + ", " + current_month + " " + current_numday + ", " + current_fullYear
var fullTime = current_hours + ":" + current_mins + ":" + current_secs

console.log(current_day);
console.log(current_month);
console.log(current_numday);
console.log(current_fullYear);
console.log(fullDate);
$("#fullDate").text(fullDate);

//*********************************************** */

console.log(current_hours);
console.log(current_mins);
console.log(current_secs);
console.log(fullTime)
$("#fullTime").text(fullTime);
// $("#day").text(current_day + ", " + current_month + " " + current_numday + ", " + current_fullYear + "</br>" + current_hours + " : " + current_mins + " : " + current_secs);  

// document.write ( ", " );
// document.write ( month_names[current_date.getMonth()] );
// document.write ( " " + current_date.getDate() );
// document.write ( " " );
// document.write ( " " + current_date.getFullYear() );

//Develop a punch in and punch out button so they can record their time. 

//Create a database or an email so that the clock in and out information is recorded. 

});//JQUERY END!!!
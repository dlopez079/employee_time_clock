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

var fullDate = current_day + ", " + current_month + " " + current_numday + ", " + current_fullYear;
var fullTime = current_hours + ":" + current_mins + ":" + current_secs;

$("#fullDate").text(fullDate);

//*********************************************** */

$("#fullTime").text(fullTime);

// *************************************************************************************

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  $("#drpdwn").click(myFunction);


// function changeFunc() {
//     var selectBox = document.getElementById("selectBox");
//     var selectedValue = selectBox.options[selectBox.selectedIndex].value;
//     console.log(selectedValue); 
// }
// $( "#drpbtn01" ).click(function() {
//     console.log( "Handler for .click() called." );
//   });


//Develop a punch in and punch out button so they can record their time. 

//Create a database or an email so that the clock in and out information is recorded. 

});//JQUERY END!!!
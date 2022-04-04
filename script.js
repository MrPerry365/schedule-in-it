// AS AN employee with a busy schedule //
// I WANT to add important events to a daily planner //
// SO THAT I can manage my time effectively //
$(document).ready(function() {
// GIVEN I am using a daily planner to create a schedule //


// WHEN I open the planner //
// THEN the current day is displayed at the top of the calendar //
   $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));



// WHEN I view the time blocks for that day //
// THEN each time block is color-coded to indicate whether it is in the past, present, or future //
// add box shadow and color to listed items when targeted //
// - add function to track each hour //
// - add loop to check if hour is past, present, or future //



// WHEN I click the save button for that time block //
// THEN the text for that event is saved in local storage //
// - add function to listen to button and save event to local storage //
$(".saveBtn").on ("click", function () {
var text = $(this).siblings(".description").val();
console.log(text);
var time = $(this).parent().attr("id");
console.log(time);

localStorage.setItem(text, time);
 
    
})
// WHEN I refresh the page //
// THEN the saved events persist //
// -} 
} )

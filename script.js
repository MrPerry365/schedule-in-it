// AS AN employee with a busy schedule //
// I WANT to add important events to a daily planner //
// SO THAT I can manage my time effectively //
$(document).ready(function() {
// GIVEN I am using a daily planner to create a schedule //
// WHEN I open the planner //
// THEN the current day is displayed at the top of the calendar //
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

// WHEN I click the save button for that time block //
// THEN the text for that event is saved in local storage //
// - add function to listen to button and save event to local storage //



// WHEN I view the time blocks for that day //
// THEN each time block is color-coded to indicate whether it is in the past, present, or future //
// add box shadow and color to listed items when targeted //
// - add function to track each hour //
// - add loop to check if hour is past, present, or future //
$("#hour9.description").val(localStorage.getItem('hour9'));
$("#hour10.description").val(localStorage.getItem('hour10'));
$("#hour11.description").val(localStorage.getItem('hour11'));
$("#hour12.description").val(localStorage.getItem('hour12'));
$("#hour13.description").val(localStorage.getItem('hour13'));
$("#hour14.description").val(localStorage.getItem('hour14'));
$("#hour15.description").val(localStorage.getItem('hour15'));
$("#hour16.description").val(localStorage.getItem('hour16'));
$("#hour17.description").val(localStorage.getItem('hour17'));

    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
    console.log(text);
        var time = $(this).parent().attr("id");
    console.log(time);
        localStorage.setItem(text, time);  
    })
    
    function hourTracker() {
        var currentHour = moment().hour();

        $('.time-block').each(function() {
            var blockHour = parseInt($(this).attr('id').split("hour")[1]);

            if (blockHour < currentHour){
                $(this).addClass('past');
                $(this).removeClass('present');
                $(this).removeClass('future');
            }

            else if (blockHour > currentHour) {
                $(this).addClass('future');
                $(this).removeClass('present');
                $(this).removeClass('past');
            }

            else if (currentHour === blockHour) {
                $(this).addClass('present');
                $(this).removeClass('future');
                $(this).removeClass('past');
            }
        })
    }
    hourTracker();



} )

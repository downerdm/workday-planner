var today = moment();
$("#currentDay").text(today.format('dddd MMMM Do YYYY'));
console.log(today);

var firstDayBlock= $("#9").find("textarea");
firstDayBlock.val(localStorage.getItem("block01"));
var firstBlock=$("#button09");

firstBlock.on("click", function(){
    localStorage.setItem("block01", firstDayBlock.val());
})

console.log(localStorage.getItem("block01"));

console.log($(".container")[0]);

$('.container').children('div').each(function () {
    //$(this).find('div').text() = 9:00 a.m.
    console.log(today.startOf('hour').fromNow());

    console.log(today.format('hh:mm A'));
    let timeText = $(this).find('div').text();
    let timeMoment = moment(timeText, 'hh:mm A');
    if(timeMoment.isBefore(today)){
        $(this).find('textarea').addClass('past');
    } else if(timeMoment.isSame(today)){
        $(this).find('textarea').addClass('present');
    } else if(timeMoment.isAfter(today)){
        $(this).find('textarea').addClass('future');
    }

    console.log($(this).find('div').text()); // "this" is the current element in the loop
});
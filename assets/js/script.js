var today = moment();
$("#currentDay").text(today.format('dddd MMMM Do YYYY'));
console.log(today);

var block09= $("#09").find("textarea");
block09.val(localStorage.getItem("block09"));
var firstBlock=$("#button09");

var block09= $("#10").find("textarea");
block09.val(localStorage.getItem("block10"));
var firstBlock=$("#button10");

var block09= $("#11").find("textarea");
block09.val(localStorage.getItem("block11"));
var firstBlock=$("#button11");

var block09= $("#12").find("textarea");
block09.val(localStorage.getItem("block12"));
var firstBlock=$("#button12");

var block09= $("#13").find("textarea");
block09.val(localStorage.getItem("block13"));
var firstBlock=$("#button13");

var block09= $("#14").find("textarea");
block09.val(localStorage.getItem("block14"));
var firstBlock=$("#button14");

var block09= $("#15").find("textarea");
block09.val(localStorage.getItem("block15"));
var firstBlock=$("#button15");

var block09= $("#16").find("textarea");
block09.val(localStorage.getItem("block16"));
var firstBlock=$("#button16");

var block09= $("#17").find("textarea");
block09.val(localStorage.getItem("block17"));
var firstBlock=$("#button17");

firstBlock.on("click", function(){
    localStorage.setItem("block09", block09.val());
})

console.log(localStorage.getItem("block09"));
console.log(localStorage.getItem("block10"));
console.log(localStorage.getItem("block11"));
console.log(localStorage.getItem("block12"));
console.log(localStorage.getItem("block13"));
console.log(localStorage.getItem("block14"));
console.log(localStorage.getItem("block15"));
console.log(localStorage.getItem("block16"));
console.log(localStorage.getItem("block17"));

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
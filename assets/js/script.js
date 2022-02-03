// Banner date
var today = moment();
$("#currentDay").text(today.format('dddd MMMM Do YYYY'));
console.log(today);

// Blocks for local storage
var block09= $("#09").find("textarea");
block09.val(localStorage.getItem("block09"));
var firstBlock=$("#button09");

var block10= $("#10").find("textarea");
block10.val(localStorage.getItem("block10"));
var secondBlock=$("#button10");

var block11= $("#11").find("textarea");
block11.val(localStorage.getItem("block11"));
var thirdBlock=$("#button11");

var block12= $("#12").find("textarea");
block12.val(localStorage.getItem("block12"));
var fourthBlock=$("#button12");

var block13= $("#13").find("textarea");
block13.val(localStorage.getItem("block13"));
var fifthBlock=$("#button13");

var block14= $("#14").find("textarea");
block14.val(localStorage.getItem("block14"));
var sixthBlock=$("#button14");

var block15= $("#15").find("textarea");
block15.val(localStorage.getItem("block15"));
var seventhBlock=$("#button15");

var block16= $("#16").find("textarea");
block16.val(localStorage.getItem("block16"));
var eighthBlock=$("#button16");

var block17= $("#17").find("textarea");
block17.val(localStorage.getItem("block17"));
var ninthBlock=$("#button17");

// Rewriting local storage back to textbox
firstBlock.on("click", function(){
    localStorage.setItem("block09", block09.val());
})

secondBlock.on("click", function(){
    localStorage.setItem("block10", block10.val());
})

thirdBlock.on("click", function(){
    localStorage.setItem("block11", block11.val());
})

fourthBlock.on("click", function(){
    localStorage.setItem("block12", block12.val());
})

fifthBlock.on("click", function(){
    localStorage.setItem("block13", block13.val());
})

sixthBlock.on("click", function(){
    localStorage.setItem("block14", block14.val());
})

seventhBlock.on("click", function(){
    localStorage.setItem("block15", block15.val());
})

eighthBlock.on("click", function(){
    localStorage.setItem("block16", block16.val());
})

ninthBlock.on("click", function(){
    localStorage.setItem("block17", block17.val());
})

// Changing the box color according to "past", "present", and "future" events based
// on current time.
$('.container').children('div').each(function () {
    let timeText = $(this).find('div').text();
    let timeMoment = moment(timeText, 'hh:mm A');
    if(timeMoment.isBefore(today)){
        $(this).find('textarea').addClass('past');
    } else if(timeMoment.isSame(today)){
        $(this).find('textarea').addClass('present');
    } else if(timeMoment.isAfter(today)){
        $(this).find('textarea').addClass('future');
    }
});
// TODO create HTML variable selectors
var currentDayEl = $('#currentDay');
var timeContainer = $('.container');


// TODO function to get current date 
function displayDate() {
    var currentDay = dayjs().format('dddd[,] DD MMM YYYY');
    currentDayEl.text(currentDay);
}

displayDate()
setInterval(displayDate, 1000)


// TODO create timeblocks

// TODO verify timeblock based on current time

// TODO change timeblock color to match past, present, future

// TODO allow users to input events into timeblock

// TODO save events in timeblocks using save button to local storage
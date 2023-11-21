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

for (let i = 0; i < 9; i++) {
    var newTimeBlock = document.createElement('div');
    newTimeBlock.setAttribute("class", "time-block row");
    var newSpan = document.createElement('span')
    newSpan.setAttribute("class", "hour")
    if (i < 4) {
        newSpan.textContent = `${9+i}AM`;
    } else {
        newSpan.textContent = `${i-3}PM`;
    };
    var newInput = document.createElement('input')
    newInput.setAttribute("class", "past")
    var newButton = document.createElement('button')
    newButton.setAttribute("class", "saveBtn")
    var newIcon = document.createElement('i')
    newIcon.setAttribute("class", "fa fa-save")
    newButton.appendChild(newIcon)
    newTimeBlock.append(newSpan, newInput, newButton)
    timeContainer.append(newTimeBlock);
}

// var newTimeBlock = document.createElement('div');
// newTimeBlock.setAttribute("class", "time-block row");
// var newSpan = document.createElement('span')
// newSpan.setAttribute("class", "hour")
// newSpan.textContent = "Xpm"
// var newInput = document.createElement('input')
// newInput.setAttribute("class", "past")
// var newButton = document.createElement('button')
// newButton.setAttribute("class", "saveBtn")
// var newIcon = document.createElement('i')
// newIcon.setAttribute("class", "fa fa-save")
// newButton.appendChild(newIcon)
// newTimeBlock.append(newSpan, newInput, newButton)
// timeContainer.append(newTimeBlock)



// TODO verify timeblock based on current time

// TODO change timeblock color to match past, present, future

// TODO allow users to input events into timeblock

// TODO save events in timeblocks using save button to local storage
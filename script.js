// TODO create HTML variable selectors
var currentDayEl = $('#currentDay');
var timeContainer = $('.container');


// TODO function to get current date 
function displayDate() {
    var currentDay = dayjs().format('dddd[,] DD MMM YYYY');
    currentDayEl.text(currentDay);
}


// TODO create timeblocks
// TODO verify timeblock based on current time
// TODO change timeblock color to match past, present, future
function createTimeblocks() {
    var futureTime = false
    for (let i = 0; i < 9; i++) {
        var currentBlockTime = 9 + i;
        var realTime = dayjs().format('H');

        // create time block div
        var newTimeBlock = document.createElement('div');
        newTimeBlock.setAttribute("class", "time-block row");

        // create hourly text
        var newSpan = document.createElement('span');
        newSpan.setAttribute("class", "hour");
        if (i < 4) {
            newSpan.textContent = `${9+i}AM`;
        } else {
            newSpan.textContent = `${i-3}PM`;
        };
    
        // if statement to color-code input box
        var newInput = document.createElement('input');
        newInput.setAttribute("class", "past");
        if (futureTime) {
            newInput.setAttribute("class", "future");
        };
        if (realTime < 9) {
            newInput.setAttribute("class", "future");
        } else if (realTime > 17) {
            newInput.setAttribute("class", "past");
        };
        
        if (currentBlockTime == realTime) {
            newInput.setAttribute("class", "present");
            futureTime = true;
        };
        //  retrieve any pre-existing events
        if (localStorage.getItem(`${9+i}`) != null) {
            newInput.value = localStorage.getItem(`${9+i}`)
        }
        newInput.setAttribute("data-storage", `${9+i}`)

        // create button element
        var newButton = document.createElement('button');
        newButton.setAttribute("class", "saveBtn");
        newButton.addEventListener("click", saveEvent);
        var newIcon = document.createElement('i');
        newIcon.setAttribute("class", "fa fa-save");
        newButton.appendChild(newIcon);
        newTimeBlock.append(newSpan, newInput, newButton);
        timeContainer.append(newTimeBlock);
    };
};


displayDate()
setInterval(displayDate, 1000)
createTimeblocks()

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


// TODO allow users to input events into timeblock
// TODO save events in timeblocks using save button to local storage
function saveEvent(event) {
    if (event.target.matches("button")) {
        var textValue = event.target.previousSibling.value;
        localStorage.setItem(event.target.previousSibling.getAttribute("data-storage"), textValue);
    } else {
        var textValue = event.target.parentElement.previousSibling.value;
        localStorage.setItem(event.target.parentElement.previousSibling.getAttribute("data-storage"), textValue);
    }
}
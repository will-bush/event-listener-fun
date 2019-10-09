// CONSTANTS
// LEFT
const leftSection = document.querySelector("#text-section-body")
const leftTitle = document.querySelector("#text-title")
const leftBody = document.querySelector("#text-body")
const leftBodySecond = document.querySelector("#text-body-2")
const leftCTA = document.querySelector("#text-cta")

// RIGHT
const rightSection = document.querySelector("#play-section-body")
const rightTitle = document.querySelector("#play-title")
const rightBody = document.querySelector("#play-body")
const rightCTA = document.querySelector("#play-cta")

// EVENT LISTENERS
// begin
window.addEventListener("click", clicked)

// FUNCTIONS

// MOUSE EVENTS
//     CLICK
    function clicked() {
        console.log("clicked function called")
        window.removeEventListener("click", clicked)
        leftTitle.innerText = 'You just triggered a "click" event!'
        leftBody.innerText = '"Click" events occur when a user clicks on a specified element.'
        leftBodySecond.innerText = "In this instance, the click event listener was added to the 'window', so it didn't matter where you clicked on the page. Common targets for event listeners are Element, Document, and Window, but the target may be any object that supports events."
        leftCTA.innerText = "CLICK ON THIS TEXT TO PROCEED"
        leftCTA.addEventListener("click", textClicked)
    }

// ELEMENT CLICK
function textClicked() {
    console.log("textClicked function called")
    leftCTA.removeEventListener("click", textClicked)
    leftTitle.innerText = 'You just triggered another "click" event!'
    leftBody.innerText = 'This time the click event listener was added only to the text element, meaning the cursor needed to be on the element when it was was clicked in order to trigger the function associated with the event.'
    leftBodySecond.innerText = "We can also specify 'dblclick' as an event listener to require a double click to trigger the event listeners function."
    leftCTA.innerText = "DOUBLE CLICK ON THIS TEXT TO PROCEED"
    leftCTA.addEventListener("dblclick", dblClicked)

}
    //     DBLCLICK
    function dblClicked() {
        console.log("dblClicked function called")
        leftCTA.removeEventListener("dblclick", dblClicked)
    leftTitle.innerText = 'You just triggered a "dblclick" event!'
    leftBody.innerText = "So far, we've seen how we can use mouse 'click' and 'dblclick' event listeners to trigger a function."
    leftBodySecond.innerText = "Did you know that we can also set event listeners on the position of the cursor that don't even require a click?"
    leftCTA.innerText = ""
    rightTitle.innerText = "Move your cursor over this text - don't remove it just yet!"
    rightTitle.addEventListener("mouseover", mouseOver)

    }
//     MOUSEOVER/MOUSEENTER
function mouseOver() {
    console.log("mouseOver function called")
    rightTitle.removeEventListener("mouseover", mouseOver)
    leftTitle.innerText = 'You just triggered a "mouseover" event!'
    leftBody.innerText = "When your cursor moved over the text element, it triggered a function associated with a 'mouseover' event listener."
    leftBodySecond.innerText = "If you remove the cursor from the text element, you can see how a 'mouseout' event listener works."
    rightTitle.addEventListener("mouseout", mouseOut)
}
//     MOUSELEAVE/MOUSEOUT
function mouseOut() {
    console.log("mouseout function called")
    rightTitle.removeEventListener("mouseout", mouseOut)
    leftTitle.innerText = ""
    leftBody.innerText = ""
    leftBodySecond.innerText = ""
    rightTitle.innerText = 'You just triggered a "mouseout" event!'
    rightBody.innerText = "When your cursor moved out of the text element, it triggered a function associated with a 'mouseout' event listener."
    rightCTA.innerText = "OK - Press down your mouse button, but don't release it!"
    window.addEventListener("mousedown", mouseDown)
}

//     MOUSEDOWN
function mouseDown() {
console.log("mousedown function called")
window.removeEventListener("mousedown", mouseDown)
rightTitle.innerText = ""
rightBody.innerText = ""
rightCTA.innerText = ""
leftTitle.innerText = 'You just triggered a "mousedown" event!'
    leftBody.innerText = "'mousedown' detects when the mouse button is pressed down on an element."
    leftBodySecond.innerText = "In this example, the event listener was added to the whole window, so it didn't matter where the cursor was when you pressed the mouse button."
    leftCTA.innerText = "Release the mouse button now and see what happens!"
    window.addEventListener("mouseup", mouseUp)
}
//     MOUSEUP

function mouseUp() {
    console.log("mouseUp function called")
    window.removeEventListener("mouseup", mouseUp)
    rightTitle.innerText = 'You just triggered a "mouseup" event!'
rightBody.innerText = "'mouseup' detects when the mouse button is released on an element."
rightCTA.innerText = "Let's move onto keyboard event listeners - press any key on your keyboard."
leftTitle.innerText = ""
leftBody.innerText = ""
leftBodySecond.innerText = ""
leftCTA.innerText = ""
window.addEventListener("keypress", keyPress)
}

// KEYBOARD EVENTS
//     KEYPRESS
function keyPress() {
    console.log("keyPress function called")
    window.removeEventListener("keypress", keyPress)
    leftTitle.innerText = 'You just triggered a "keypress" event!'
leftBody.innerText = "'keypress' detects when a user presses a key."
leftBodySecond.innerText = "Similar to 'mouseup' and 'mousedown', we can listen to when a key is pressed or released."
leftCTA.innerText = "Press and hold any key."
rightTitle.innerText = ""
rightBody.innerText = ""
rightCTA.innerText = ""
window.addEventListener("keydown", keyDown)
}
//     KEYDOWN
function keyDown() {
    console.log("keyDown function called")
    window.removeEventListener("keydown", keyDown)
    rightTitle.innerText = 'You just triggered a "keydown" event!'
rightBody.innerText = "'keydown' detects when a user is pressing a key."
rightCTA.innerText = "Release the key now to see what happens."
leftTitle.innerText = ''
leftBody.innerText = ""
leftBodySecond.innerText = ""
leftCTA.innerText = ""
window.addEventListener("keyup", keyUp)
}
//     KEYUP
function keyUp() {
    console.log("keyUp function called")
    window.removeEventListener("keyup", keyUp)
    rightTitle.innerText = ''
rightBody.innerText = ""
rightCTA.innerText = ""
leftTitle.innerText = 'You just triggered a "keyup" event!'
leftBody.innerText = "'keyup' detects when a user releases a key."
leftCTA.innerText = "Press any key to continue."
window.addEventListener("keypress", moveOn)
}

function moveOn() {
    console.log("moveOn function called")
    window.removeEventListener("keypress", moveOn)
    rightTitle.innerText = "Let's find out about ClipBoard events!"
rightBody.innerText = "Use your cursor to select this area of text."
rightCTA.innerText = "NOW PRESS CMD+C"
leftTitle.innerText = ''
leftBody.innerText = ""
leftCTA.innerText = ""
window.addEventListener("copy", copy)
}

function copy() {
    console.log("copy function called")
    rightBody.removeEventListener("copy", copy)
    rightTitle.innerText = ""
rightBody.innerText = ""
rightCTA.innerText = ""
leftTitle.innerText = 'You just triggered a "copy" event!'
leftBody.innerText = "'copy' detects when the content of an element is copied to the clipboard."
leftBodySecond.innerText = "Now paste the text you copied into the form below."
let form = document.createElement("input")
form.id = "form"
leftSection.append(form)
window.addEventListener("paste", paste)
}

function paste() {
    console.log("paste function called")
    window.removeEventListener("paste", paste)
    form = document.getElementById("form")
    leftSection.removeChild(form)
    leftBodySecond.innerText = ""
    rightTitle.innerText = 'You just triggered a "paste" event!'
rightBody.innerText = "'paste' detects when a user pastes some content into an element."
rightCTA.innerText = "Press any key."
leftTitle.innerText = ''
leftBody.innerText = ""
leftCTA.innerText = ""
window.addEventListener("keypress", summary)
}

function summary() {
    console.log("summary function called")
    window.removeEventListener("keypress", summary)
    rightTitle.innerText = ''
    rightBody.innerText = ""
    rightCTA.innerText = ""
    leftTitle.innerText = "Congratulations! You've just experienced 12 event listeners on a single page!"
    leftBody.innerText = "I hope you had a nice time."
    leftCTA.innerText = "CLICK ANYWHERE TO START AGAIN"
    window.addEventListener("click", clicked)
    
}
// CLIPBOARD
//     COPY
//     PASTE
//     CUT

// FORM
//     CHANGE    
//     SUBMIT

// UI
//     RESIZE

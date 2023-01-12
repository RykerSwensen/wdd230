// Use const for variables that aren't going to change after they are set the first time
// Use let for variables that are likely to change after initialization
const today = new Date();

// A list of valid options can be found here:
// https://www.w3schools.com/jsref/jsref_tolocalestring.asp
const dateoptions = {
    year: '2-digit', 
    month: 'long', 
    day: 'numeric'
};

// You can select individual items from the DOM using document.querySelector(selector). 
// The value of selector matches a CSS selector you would use to identify elements on the page
document.querySelector('#today').textContent = today.toLocaleDateString('en-US', dateoptions);

// You can also use document.getElementById, but it's not as powerful.
document.getElementById('today').textContent = today.toLocaleDateString('en-US', dateoptions);

// toLocaleTimeString includes the time component as well.
document.querySelector('#today').textContent = today.toLocaleTimeString('en-US', dateoptions);

// There's another way to show the date as well using template strings
// Remember to add 1 to today.getMonth() because it uses a 0 based index.
// Also remember .getDate() returns day of the month, .getDay() returns a 0-based day of the week
const mydatestring = `${today.getMonth()+1}/${today.getDate()}/${today.getFullYear()}`;
document.querySelector('#today').textContent = mydatestring;

// Notice the difference between textContent and innerHTML
// InnerHTML parses the HTML string, textContent does not.
document.querySelector('#temp').textContent = '32&deg;';
document.querySelector('#temp').innerHTML = '32&deg;';

// To change the value of a form input item we have to use .value instead of .innerHTML or .textContent
document.querySelector('#myinput').value = 'Carpe diem!';

// This is called a "callback method".
// This function is called once per item on a list of items when you use forEach
function makeRed(item){
    item.style.color = 'red';
}

// To select multiple items from the DOM you can use querySelectorAll
document.querySelectorAll(".somecontent").forEach(makeRed);

const monthEl = document.querySelector(".date h1"); /* selects h1 from html*/
const fullDateEl = document.querySelector(".date p"); /* selects p from html*/
const daysEl = document.querySelector(".days"); /* selects p from html*/


const monthInx = new Date().getMonth(); /* new Date represents the current date and time / .getMonth returns the month as zero based index.
eg, if Sept is the current month, it returns it as 8, January is a zero index in JS */
const lastDay = new Date(new Date().getFullYear(), monthInx + 1, 0).getDate(); /* zero means the previous month, 1 means the current month, 
if 2, it means the following month... .getDate gets last date which is nummber 30 */ 
const firstDay = new Date(new Date().getFullYear(), monthInx, 1).getDay() - 1; /* makes the week to start from monday and has the index of 0 */
console.log(firstDay);

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

monthEl.innerText = months[monthInx]; /* displays the h1 of the calender */
fullDateEl.innerText = new Date().toDateString(); /* displays the p of the calender */

let days = ""; /* used to store the days of the month */

for(let i = firstDay; i > 0; i--) {
    days += `<div class="empty"></div>`; /* removes the numbers that occupied the empty divs, and leaves them empty */
}

for (let i = 1; i <= lastDay; i++) {
    if ((i === new Date().getDate())) {
        days += `<div class="today">${i}</div>`;
    } else {
        days += `<div>${i}</div>`; /* else statement enables the function not to display 7 twice, hence displays other numbers accordingly */
    }
        
       
}
daysEl.innerHTML = days;
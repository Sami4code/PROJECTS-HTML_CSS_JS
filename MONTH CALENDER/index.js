const monthEl = document.querySelector(".date h1");
const fullDateEl = document.querySelector(".date p");

const monthInx = new Date().getMonth();

console.log(monthInx);

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

monthEI.innerText = months[monthInx];
fullDateEl.innerText = new Date().toDateString();
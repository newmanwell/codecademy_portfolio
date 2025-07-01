// adding the current year to the footer
const year = document.getElementById('year');
const thisYear = new Date().getFullYear().toString();
year.setAttribute('datetime', thisYear);
year.textContent = thisYear;
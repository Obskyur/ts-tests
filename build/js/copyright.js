"use strict";
// const year = document.getElementById('year');
// const thisYear = new Date().getFullYear();
// year.setAttribute("datetime", thisYear.toString()); // error: Object is possibly 'null'.
// year.textContent = thisYear;  // error: Type 'number' is not assignable to type 'string'.
// Corrected variation:
// const year = document.getElementById('year')!;
// const thisYear = new Date().getFullYear().toString();
// year.setAttribute("datetime", thisYear);
// year.textContent = thisYear;
// Dave's variation:
let year;
year = document.getElementById('year');
let thisYear;
thisYear = new Date().getFullYear().toString();
if (year) {
    year.setAttribute("datetime", thisYear);
    year.textContent = thisYear;
}

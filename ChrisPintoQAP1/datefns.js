// Chris Pinto
// September 15th 2022
// Task 2

// addDays 
// This is used to set a deadline that is after a certain number of days.
// Adding the days to todays date will give us the day of the week, month and day.
// In this example we used birthday to find out what day of the week it will land on.

const {format, addDays, addMinutes, addYears, addMonths} = require("date-fns");

const today = new Date();

// birthday after 6 days
const birthday = addDays(today, 42);

// Showing the dates on the console.
console.log("Here is today's date plus 42 days to give us the date and what day of the week it is.")
console.log(format(today, "PPPP"));
console.log(format(birthday, "PPPP"));

// Example two - Adding days, months, years, minutes to a specific date.
const date = new Date('2022.09.29 10:12:00');
//add days
const sum1 = addDays(date, 4);
//add months
const sum2 = addMonths(date, 3);
//add years
const sum3 = addYears(date, 3);
//add minutes
const sum4 = addMinutes(date, 40);
// showing the updated dates and time on the console.
console.log()
console.log('Here are the updated dates and time that the code has printed from adding days, months, years and minutes.')
console.log(format(sum1, 'dd MMMM yyyy HH:mm'));
console.log(format(sum2, 'dd MMMM yyyy HH:mm'));
console.log(format(sum3, 'dd MMMM yyyy HH:mm'));
console.log(format(sum4, 'dd MMMM yyyy HH:mm'));
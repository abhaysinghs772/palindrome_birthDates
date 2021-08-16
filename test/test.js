// this file includes all the logics of the main application (PALINDROME BIRTHDAY)

// Ex-01: Write a function in JS that takes a string and reverses it
function reverseString(str) {
    return str.split('').reverse().join('');
}

let input = 'lol';
console.log(reverseString(input));
let reversedString = reverseString(input);
// Ex-01: Write a function in JS that takes a string and reverses it

// Ex-02: Write a JS function to check for palindrome
function check_Palindrome(str) {

    // 1st method of checking palindrome
    // let len = str.length;
    // for (let i = 0; i < (len) / 2; i++) {
    //     if (str[i] !== str[len - i - 1]) {
    //         return false;
    //     }
    // }
    // return true;

    // 2nd method of checking palindrome is 
    reversedStr = reverseString(str);
    return str == reversedStr;
}

console.log(check_Palindrome(input));
// Ex-02: Write a JS function to check for palindrome

// Ex-03: Write a function that converts the date from number to string

function dayToString(date) {
    let dayStr = { day: '', month: '', year: '' };

    // if digits are less then 10 append 0 before the digit
    if (date.day < 10) {
        dayStr.day = '0' + date.day
    } else {
        dayStr.day = date.day.toString();
    }

    if (date.month < 10) {
        dayStr.month = '0' + date.month
    } else {
        dayStr.month = date.month.toString();
    }

    dayStr.year = date.year.toString();

    return dayStr;
}

let date = {
    day: 4,
    month: 4,
    year: 2000
}

console.log(dayToString(date));
// Ex-03: Write a function that converts the date from number to string

// Ex-04: Write a JS function that takes a date and returns all variations of it
// DD-MM-YYYY
// MM-DD-YYYY
// YYYY-MM-DD
// DD-MM-YY
// MM-DD-YY
// YY-MM-DD

function dateOfAllFormats(date) {

    let dateStr = dayToString(date);
    let dd_mm_yyyy = dateStr.day + dateStr.month + dateStr.year;
    let mm_dd_yyyy = dateStr.month + dateStr.day + dateStr.year;
    let yyyy_mm_dd = dateStr.year + dateStr.month + dateStr.day;
    let dd_mm_yy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
    let mm_dd_yy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    let yy_mm_dd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;
    // console.log(yy_mm_dd);

    return [dd_mm_yyyy, mm_dd_yyyy, yyyy_mm_dd, dd_mm_yy, mm_dd_yy, yy_mm_dd];
}
// Ex-04: Write a JS function that takes a date and returns all variations of it
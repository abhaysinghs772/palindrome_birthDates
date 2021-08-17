`use strict`


let birthdayInput = document.querySelector('#birthDayInput');
let showBtn = document.querySelector('#show_Result');
let result = document.querySelector('#result');

// functions
function reverseString(str) {
    return str.split('').reverse().join('');
}

function check_Palindrome(str) {

    reversedStr = reverseString(str);
    return str == reversedStr;

}

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

function checkPalindromeForAllDateFormats(date) {
    let listallDateFormats = dateOfAllFormats(date);
    let flag = false;

    for (let i = 0; i < listallDateFormats.length; i++) {
        if (check_Palindrome(listallDateFormats[i])) {
            flag = true;
            break;
        }
    }
    return flag;
}

function isLeapYear(year) {
    if (year % 400 === 0) {
        return true;
    }
    if (year % 100 === 0) {
        return false;
    }
    if (year % 4 === 0) {
        return true;
    }
    return false;
}

function nextDay(date) {
    let day = date.day + 1; // increament the day by one 
    let month = date.month;
    let year = date.year;

    let daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 0 to 11

    // checking for february
    if (month === 2) {
        // check for leap year
        if (isLeapYear(year)) {
            if (day > 29) {
                day = 1;
                month++;
            }
        } else {
            if (day > 28) {
                day = 1;
                month++;
            }
        }
    } 
    // check for different months
    else {
        // check if the day in the month exceeds its max value
        if (day > daysInMonths[month - 1]) {
            day = 1;
            month++;
        }
    }

    // increament the year if the month is greater then 12
    if (month > 12) {
        month = 1;
        year++;
    }

    return {
        day: day,
        month: month,
        year: year
    };
}

function nextPalindromeDate(date) {
    let ctr = 0;
    let nextDate = nextDay(date);

    while (1) {
        ctr++;
        let isPalindrome = checkPalindromeForAllDateFormats(nextDate);
        if(isPalindrome){
            break;
        }
        nextDate = nextDay(nextDate);
    }
    return ([ctr, nextDate]);
}

function clickHandeler(e) {

    let birthDayStr = birthdayInput.value;

    if (birthDayStr !== '') {
        let listOfDate = birthDayStr.split('-');

        let date = {
            day: Number(listOfDate[2]),
            month: Number(listOfDate[1]),
            year: Number(listOfDate[0])
        }
        // console.log(checkPalindromeForAllDateFormats(date));
        let isPalindrome = checkPalindromeForAllDateFormats(date);
        if (isPalindrome) {
            result.innerText = 'yay! your birthday is palindrome 🥳🥳 ';
        }else {
            let [ctr, nextDate] = nextPalindromeDate(date);
            result.innerText = `the next palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year}, you missed by ${ctr} days 😔😔`;
        }
    }
}

showBtn.addEventListener('click', clickHandeler);
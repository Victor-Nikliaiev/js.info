/* eslint-disable no-unused-vars */

import alert from "alert";
import { getDateQuantity } from "../../utils.js";

// let now = new Date();

// console.log(now);

const jan01_1970 = new Date(0);
// alert(jan01_1970);

// add 24 hours

// const jan02_1970 = new Date(24 * 3600 * 1000);
// alert(jan02_1970);
// alert(jan02_1970.getTime());
// let myBirthday = new Date(1989, 2, 23);
// alert(myBirthday);
// let now = new Date();
// let measure = now - myBirthday;

// alert(measure);

// let sum = null;

// let start = new Date();
// for (let i = 0; i < 1e9; i++) {
//   sum += i;
// }
// let end = new Date();
// console.log(getDateQuantity(end - start));

// 31 December 1969
// const Dec31_1969 = new Date(-48 * 3600 * 100);
// alert(Dec31_1969);

// let date = new Date("2017-01-26");
// alert(date);

// function getNewDate({
//   year = 0,
//   month = 0,
//   date = 0,
//   hours = 0,
//   minutes = 0,
//   seconds = 0,
//   ms = 0,
// } = {}) {
//   if (!year ?? !month) return new Date();

//   return new Date(year, month, date, hours, minutes, seconds, ms);
// }

// const date = getNewDate({
//   year: 1989,
//   month: 2,
//   date: 23,
//   hours: 3,
//   minutes: 28,
// });

// alert(date);
// const date2 = getNewDate({ year: 2222, month: 0 });
// alert(date2);

// alert(date.getFullYear());
// alert(date.getMonth());
// alert(date.getDate());
// alert(date.getDay());

// setInterval(() => {
//   const date = new Date();
//   console.log(
//     `${date.getUTCHours()} : ${date.getUTCMinutes()} : ${date.getUTCSeconds()}`
//   );
// }, 1000);

// const date = new Date();
// console.log(date.getTimezoneOffset());

// const birthday = new Date(1989, 2, 23);
// const now = new Date();
// let time = new Date(
//   now.getFullYear(),
//   now.getMonth() - birthday.getMonth(),
//   now.getDate() - birthday.getDate(),
//   now.getHours() - birthday.getHours(),
//   now.getMinutes() - birthday.getMinutes()
// );

// alert(
//   `years: ${
//     time.getFullYear() - birthday.getFullYear()
//   }\nmonth: ${time.getMonth()}\nday: ${time.getDate()}\nhours: ${time.getHours()}\nminutes: ${time.getMinutes()}`
// );
// const measure = Date.prototype["getDate"].bind(new Date());
// console.log(measure());

// const birthday = new Date(1989, 2, 23);
// const now = new Date();
// let time = new Date(
//   now.getFullYear(),
//   now.getMonth() - birthday.getMonth(),
//   now.getDate() - birthday.getDate(),
//   now.getHours() - birthday.getHours(),
//   now.getMinutes() - birthday.getMinutes()
// );

// function MeasureTimeDifference(now, prev) {
//   const measures = [
//     "getFullYear",
//     "getMonth",
//     "getDate",
//     "getHours",
//     "getMinutes",
//     "getSeconds",
//     "getMilliseconds",
//   ];

//   const getMeasure = (dateObj, func) => {
//     return Date.prototype[func].bind(dateObj)();
//   };

//   this.getTimeDifference = () => {
//     let arrDatePayload = [];

//     measures.forEach(func => {
//       if (func === "getFullYear") {
//         return arrDatePayload.push(getMeasure(now, func));
//       }
//       arrDatePayload.push(getMeasure(now, func) - getMeasure(prev, func));
//     });

//     const resultDate = new Date(...arrDatePayload);
//     const result = {};

//     measures.forEach(func => {
//       if (func === "getFullYear") {
//         result[func] = getMeasure(resultDate, func) - getMeasure(prev, func);
//         return;
//       }

//       result[func] = getMeasure(resultDate, func);
//     });

//     return result;
//   };
// }

// let sum = 0;
// const start = Date.now();
// for (let i = 1; i < 1e8; i++) {
//   sum += i;
// }
// const end = Date.now();
// console.log(end - start);
// let measure = new MeasureTimeDifference(end, start);
// console.log(measure.getTimeDifference());
// function diffSubtraction(date1, date2) {
//   return date2 - date1;
// }

// function diffGetTime(date1, date2) {
//   return date2.getTime() - date1.getTime();
// }

// function bench(f) {
//   let date1 = new Date(0);
//   let date2 = new Date();

//   let start = Date.now();
//   for (let i = 0; i < 1e5; i++) f(date1, date2);
//   return Date.now() - start;
// }

// let time1 = 0;
// let time2 = 0;
// bench(diffSubtraction);
// bench(diffGetTime);

// for (let i = 0; i < 40; i++) {
//   time1 += bench(diffSubtraction);
//   time2 += bench(diffGetTime);
// }
// console.log("Total time of diffSubtract: " + time1 + "ms.");
// console.log("Time of diffGetTime: " + time2 + "ms.");

// let ms = Date.parse("2012-01-26T13:51:50.417-07:00");
// console.log(performance.now());

// Homework
// 1
// let dateObj = new Date(2012, 1, 20, 3, 12);
// alert(dateObj);

// 2
export function getWeekDay(date) {
  const weekDays = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
  return weekDays[date.getDay()];
}

// 3
export function getLocalDay(date) {
  let day = date.getDay();

  if (day === 0) day = 7;

  return day;
}

// 4
export function getDateAgo(date, days) {
  let dateCopy = new Date(date);
  dateCopy.setDate(dateCopy.getDate() - days);

  return dateCopy.getDate();
}

// 5
export function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

// 6 // 7
function getSecondsToday() {
  let now = new Date();
  let endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  let startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let wholeDay = endOfDay - startOfDay;
  let timeLeftForNewDay = endOfDay - now;
  let timePastToday = wholeDay - timeLeftForNewDay;

  return {
    pastToday: Math.round(timePastToday / 1000),
    untilTomorrow: Math.round(timeLeftForNewDay / 1000),
  };
}

// 8
export function formatDate(date) {
  const measures = {
    hour: 36e5,
    minute: 6e4,
    second: 1e3,
  };

  const now = new Date();

  const difference = Math.max(now, date) - Math.min(now, date);
  let resultString = "";

  switch (true) {
    case difference < measures.second:
      resultString = "right now";
      break;
    case difference < measures.minute:
      resultString = `${Math.round(difference / measures.second)} sec. ago`;
      break;
    case difference < measures.hour:
      resultString = `${Math.round(difference / measures.minute)} min. ago`;
      break;
    default:
      resultString = `${modifyNumber(date.getDate())}.${modifyNumber(
        date.getMonth() + 1
      )}.${date.getFullYear().toString().slice(-2)} ${modifyNumber(
        date.getHours()
      )}:${modifyNumber(date.getMinutes())}`;
      break;
  }

  function modifyNumber(number) {
    let str = number.toString();
    if (str.length < 2) return "0" + str;
    return str;
  }

  return resultString;
}

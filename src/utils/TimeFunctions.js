import moment from "moment";

export function getnNextMonthsInDays(n) {
  const months = [];
  months.push(ActualMonthRemainingDays());
  for (let index = 1; index <= n; index++) {
    months.push(getNextMonthDays(index));
  }
  return months;
}

function getNextMonthDays(month) {
  const current = new Date();
  const currentMonth = current.getMonth() + 1;
  const currentYear = current.getFullYear();

  const nextMonth = currentMonth + month;
  const remainingDaysInMonthNamesArray = [];

  for (let index = 1; index <= totalDaysInMonth(nextMonth); index++) {
    remainingDaysInMonthNamesArray.push({
      number: index,
      name: getDayName(currentYear, nextMonth, index, "en-US"),
    });
  }

  return {
    daysNameArray: remainingDaysInMonthNamesArray,
    name: getMonthName(nextMonth),
  };
}

function ActualMonthRemainingDays() {
  const current = new Date();
  const currentDay = current.getDate();
  const currentMonth = current.getMonth() + 1;
  const currentYear = current.getFullYear();

  const remainingDaysInMonthNamesArray = [];
  const remainingDaysInMonth = totalDaysInMonth(currentMonth) - currentDay;
  for (
    let index = currentDay;
    index <= currentDay + remainingDaysInMonth;
    index++
  ) {
    remainingDaysInMonthNamesArray.push({
      number: index,
      name: getDayName(currentYear, currentMonth, index, "en-US"),
    });
  }
  return {
    daysNameArray: remainingDaysInMonthNamesArray,
    name: getMonthName(currentMonth),
  };
}

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

function totalDaysInMonth(month) {
  const current = new Date();
  const currentYear = current.getFullYear();
  return daysInMonth(month, currentYear);
}

export function getDayName(year, month, day, locale = "en-US") {
  var date = new Date(year, month - 1, day);
  return date.toLocaleDateString(locale, { weekday: "long" });
}

export function getMonthName(month) {
  return monthNames[month - 1];
}

export function filterShiftsByCurrentTime(shifts) {
  const current = new Date();
  const currentDayMinutes = current.getHours() * 60 + current.getMinutes();
  const filteredArray = shifts.filter((hour) => hour > currentDayMinutes);
  return filteredArray.map((hour) => timeConvert(hour));
}

export function fillShiftByDuration(shift, duration) {
  const shift1 = shift[0] ? shift[0] : [];
  const shift2 = shift[1] ? shift[1] : [];
  const array = [];
  const { shiftStart, shiftEnd } = shift1;
  const { shiftStart: shiftStart2, shiftEnd: shiftEnd2 } = shift2;

  for (let index = shiftStart * 60; index < shiftEnd * 60; index += duration) {
    array.push(index);
  }
  for (
    let index2 = shiftStart2 * 60;
    index2 < shiftEnd2 * 60;
    index2 += duration
  ) {
    array.push(index2);
  }
  return array;
}

export function timeConvert(time) {
  const hour = Math.floor((time / 60) % 24);
  const min = time % 60;
  const today = moment().format("L");
  return moment(today).add(hour, "h").add(min, "m").format("LT");
}

export function stringHourToMinutes(string) {
  const numbers = string.split(":");
  const TimeInminutes = parseInt(numbers[0]) * 60 + parseInt(numbers[1]);
  return TimeInminutes;
}

export function stringHourToHourAndMinutes(string) {
  const numbers = string.split(":");
  return { hours: numbers[0], minutes: numbers[1] };
}

export function isAppointmentTodayOrTommorow(day) {
  var inputDate = new Date(day);
  var todaysDate = new Date();
  var tommorow = incrementDate(todaysDate, 1);
  let isToday = false;
  if (inputDate.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0, 0)) {
    isToday = "Today";
  } else if (inputDate.setHours(0, 0, 0, 0) == tommorow.setHours(0, 0, 0, 0)) {
    isToday = "Tomorrow";
  }
  return isToday;
}

export function isAppointmentPassed(date) {
  var inputDate = new Date(date);
  var currentTime = new Date();
  return currentTime > inputDate;
}

function incrementDate(dateInput, increment) {
  var dateFormatTotime = new Date(dateInput);
  var increasedDate = new Date(
    dateFormatTotime.getTime() + increment * 86400000
  );
  return increasedDate;
}

export function getMonthFromString(mon) {
  var d = Date.parse(mon + "1, 2012");
  if (!isNaN(d)) {
    return new Date(d).getMonth() + 1;
  }
  return -1;
}

export function splitAppointments(appts) {
  const upcomingAppts = [];
  const pastAppts = [];
  appts.map((appt) => {
    const { time } = appt;
    const { hourAndMinutes, day, month, year, durationInMinutes } = time;
    isAppointmentPassed(
      `${year}-${getMonthFromString(month)}-${day} ${hourAndMinutes}`
    ) || !appt.isConfirmed
      ? pastAppts.push(appt)
      : upcomingAppts.push(appt);
  });
  return { upcomingAppts, pastAppts };
}

export const monthNames = [
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

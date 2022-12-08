import React, { useEffect, useState } from "react";
import { useStateValue } from "../state/stateProvider";
import { useNavigate, useOutletContext } from "react-router-dom";
import {
  fillShiftByDuration,
  filterShiftsByCurrentTime,
  getMonthName,
  getnNextMonthsInDays,
  timeConvert,
} from "../utils/TimeFunctions";
import useMediaQuery from "@mui/material/useMediaQuery";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import theme from "../components/ui/Theme";
import HorGrayLine from "../components/HorGrayLine";
import { IoIosArrowForward } from "react-icons/io";
import { BsCalendarX } from "react-icons/bs";
import BlackButtonWrapper from "../assets/Wrappers/BlackButtonWrapper";
import moment from "moment";

export default function Time({}) {
  const [bookingHeaderHeight, setCount] = useOutletContext();
  let navigate = useNavigate();
  const [{ booking }, dispatch] = useStateValue();
  const months = getnNextMonthsInDays(4);

  // Time manipulation
  const current = new Date();
  const [clicked, setClicked] = useState(false);
  const [selectedDay, setSelectedDay] = useState(
    months[0].daysNameArray[0].number
  );
  const [selectedMonth, setSelectedMonth] = useState(months[0].name);
  const [time, setTime] = useState(0);

  const employeWeekWorkingHours = [];
  for (let index = 0; index < 100; index++) {
    employeWeekWorkingHours.push({
      month: moment().add(index, "day").month(),
      date: moment().add(index, "day").date(),
      shifts: [
        { shiftStart: 7, shiftEnd: 10 },
        { shiftStart: 13, shiftEnd: 17 },
      ],
    });
  }
  const [selectedShifts, setselectedShifts] = useState(
    employeWeekWorkingHours[0].shifts
  );
  console.log(selectedShifts);
  // DOM manipulation (scroll)
  const [scroll, setScroll] = useState(0);
  const el = document.getElementById("slider");
  const matches = useMediaQuery(theme.breakpoints.up("lg"));

  const shiftsInMinutes = fillShiftByDuration(selectedShifts, duration);
  // Filter the array only if current day is selected
  const filteredShifts =
    selectedDay === current.getDate()
      ? filterShiftsByCurrentTime(shiftsInMinutes)
      : shiftsInMinutes.map((time) => timeConvert(time));

  // if today no appointment is available
  // Look for the day when the employe will be available
  const availableDayIndex = findAvailableDay(
    filteredShifts,
    selectedMonth,
    selectedDay,
    employeWeekWorkingHours
  );
  let availableDay;
  if (availableDayIndex) {
    // get the day number and month
    availableDay = employeWeekWorkingHours[availableDayIndex];
    //get the month name
    availableDay = {
      ...availableDay,
      monthName: getMonthName(availableDay.month),
    };
    // get the day name
    months.map((month) => {
      if (month.name == getMonthName(availableDay.month)) {
        month.daysNameArray.map((day) => {
          if (day.number == availableDay.date) {
            availableDay = { ...availableDay, dayName: day.name };
          }
        });
      }
    });
  }
  useEffect(() => {
    employeWeekWorkingHours.map((day) => {
      getMonthName(day.month) == selectedMonth &&
        day.date == selectedDay &&
        setselectedShifts(day.shifts);
    });
  }, [selectedDay, selectedMonth]);
  scrollAndWheelEventsHandlers(el, matches, setScroll);
  useEffect(() => {
    // if services or employe are empty redirect to booking
    // this is for page reloading (so state is reinitilized )
    (booking?.services?.length == 0 || !booking?.employe.id?.toString()) &&
      navigate("/booking");
  }, []);
  useEffect(() => {
    if (clicked) {
      dispatch({
        type: "SET_BOOKING_TIME",
        time: {
          hourAndMinutes: time,
          day: selectedDay,
          month: selectedMonth,
          year: current.getFullYear(),
          durationInMinutes: duration,
        },
      });
      navigate("/booking/checkout");
    }
  }, [time]);
  return (
    <>
      {booking?.services?.length !== 0 && booking?.employe.id?.toString() && (
        <>
          <div
            style={{ top: bookingHeaderHeight }}
            className="flex lg:hidden z-50 w-screen sticky  py-4 lg:py-3 overflow-auto whitespace-nowrap scrollbar-hide shadow-lg bg-white rounded-md"
          >
            {React.Children.toArray(
              months.map((month, monthIndex) => (
                <div>
                  <div className="flex text-black text-lg font-medium  pb-3 w-fit sticky left-0 ">
                    <div className="bg-gradient-to-l from-white w-4"></div>
                    <div>{month.name}</div>
                  </div>
                  <div className="flex ">
                    {React.Children.toArray(
                      month.daysNameArray.map((day, dayIndex) => (
                        <button
                          onClick={() => {
                            setSelectedDay(day.number);
                            setSelectedMonth(month.name);
                          }}
                          className={
                            "flex flex-col justify-center items-center group w-16 h-16 py-3 px-4 ml-4 border hover:border-blue-500 rounded-md " +
                            (month.name == selectedMonth &&
                              day.number == selectedDay &&
                              " bg-blue-500 text-white font-semibold")
                          }
                        >
                          <div
                            className={
                              "text-md text-secondarytextColor " +
                              (month.name == selectedMonth &&
                                day.number == selectedDay &&
                                " text-white font-semibold")
                            }
                          >
                            {day.name.slice(0, 3)}
                          </div>
                          <div className="text-lg">{day.number}</div>
                        </button>
                      ))
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="hidden lg:flex justify-center items-center z-50 w-full sticky top-[80px] mx-auto lg:py-3 bg-white rounded-t-md shadow-lg">
            <div className="absolute z-50 flex justify-between min-w-[480px] mt-4 pl-4">
              <button
                className="py-5 group"
                onClick={() =>
                  el.scroll({
                    left: scroll - 400,
                    behavior: "smooth",
                  })
                }
              >
                <HiOutlineArrowLeft className="group-hover:-translate-x-2 transition-all duration-500 h-4 w-4 min-h-4 min-w-4" />
              </button>
              <button
                className="py-5 group"
                onClick={() =>
                  el.scroll({ left: scroll + 400, behavior: "smooth" })
                }
              >
                <HiOutlineArrowRight className="group-hover:translate-x-2 transition-all duration-500 h-4 w-4 min-h-4 min-w-4" />
              </button>
            </div>
            <div
              id="slider"
              className="flex z-50 w-[400px] min-w-[400px] max-w-[400px] mx-auto mb-10 overflow-auto whitespace-nowrap scrollbar-hide"
            >
              {React.Children.toArray(
                months.map((month, monthIndex) => (
                  <div>
                    <div className="flex text-black text-lg font-medium pb-3 w-fit sticky left-0 ">
                      <div className="bg-gradient-to-l from-white w-4"></div>
                      <div>{month.name}</div>
                    </div>
                    <div className="flex">
                      {React.Children.toArray(
                        month.daysNameArray.map((day, dayIndex) => (
                          <button
                            onClick={() => {
                              // setState(dayIndex)
                              // console.log(day.number, month.name);
                              setSelectedDay(day.number);
                              setSelectedMonth(month.name);
                              // setSelectedDayName(day.number.name);
                            }}
                            className={
                              "flex flex-col justify-center items-center group w-16 h-16 py-3 px-4 ml-4 border hover:border-blue-500 rounded-md " +
                              (month.name == selectedMonth &&
                                day.number == selectedDay &&
                                " bg-blue-500 text-white font-semibold ")
                              //    +
                              // (monthIndex == months.length - 1 &&
                              //   dayIndex ==
                              //     months[months.length - 1].daysNameArray.length -
                              //       1 &&
                              //   " mr-4")
                            }
                            id={
                              month.name == selectedMonth &&
                              day.number == selectedDay
                                ? "selected"
                                : ""
                            }
                          >
                            <div
                              className={
                                "text-md text-secondarytextColor " +
                                (month.name == selectedMonth &&
                                  day.number == selectedDay &&
                                  " text-white font-semibold")
                              }
                            >
                              {day.name.slice(0, 3)}
                            </div>
                            <div className="text-lg">{day.number}</div>
                          </button>
                        ))
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="w-full">
            {filteredShifts.length > 0 ? (
              React.Children.toArray(
                filteredShifts.map((time, index) => (
                  <div
                    onClick={() => {
                      setTime(time);
                      setClicked(true);
                    }}
                  >
                    <div className="py-6  px-lg hover:bg-secondaryBg transition-all duration-200 cursor-pointer text-lg font-medium">
                      <div className="px-4 flex justify-between items-center">
                        <div>{time}</div>
                        <IoIosArrowForward className="" />
                      </div>
                    </div>
                    {index < filteredShifts.length - 1 && (
                      <div className="-my-6 ml-6 lg:ml-0">
                        <HorGrayLine />
                      </div>
                    )}
                  </div>
                ))
              )
            ) : (
              <div className="bg-white flex flex-col justify-center items-center py-10">
                <BsCalendarX className="w-10 h-10 stroke-0 mt-10" />
                {availableDay && (
                  <div className="flex flex-col justify-center items-center pb-12">
                    <div className="text-2xl font-bold mt-6">
                      {booking.employe.name} is not available today
                    </div>
                    <div className="text-lg text-secondarytextColor mt-2 mb-5">
                      but you can book for this{" "}
                      {availableDay.dayName.slice(0, 3)}, {availableDay.date}{" "}
                      {availableDay.monthName}
                    </div>
                    <div>
                      <BlackButtonWrapper
                        onClick={() => {
                          setSelectedDay(availableDay.date);
                          setSelectedMonth(availableDay.monthName);
                          // setSelectedDayName(availableDay.dayName);
                        }}
                        style={{ paddingX: 0 }}
                      >
                        Go to {availableDay.dayName.slice(0, 3)},{" "}
                        {availableDay.date} {availableDay.monthName}
                      </BlackButtonWrapper>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}
function findAvailableDay(
  filteredShifts,
  selectedMonth,
  selectedDay,
  employeWeekWorkingHours
) {
  if (filteredShifts.length == 0) {
    const indexOfirstNonAvailable = employeWeekWorkingHours.findIndex(
      (day) =>
        getMonthName(day.month) == selectedMonth && day.date == selectedDay
    );
    console.log(indexOfirstNonAvailable);
    let indexOfirstAvailable;
    let found = false;
    for (
      let index = indexOfirstNonAvailable + 1;
      index < employeWeekWorkingHours.length && !found;
      index++
    ) {
      // In the other days we can just check if the shifts array is not empty
      if (employeWeekWorkingHours[index].shifts.length !== 0) {
        indexOfirstAvailable = index;
        found = true;
      }
    }
    return indexOfirstAvailable;
  }
}

function preventScroll(e) {
  e.preventDefault();
  e.stopPropagation();
  return false;
}

function scrollAndWheelEventsHandlers(el, matches, setScroll) {
  if (el && matches) {
    el.addEventListener("wheel", preventScroll, { passive: false });
  }
  if (el && !matches) {
    el.removeEventListener("wheel", preventScroll, { passive: false });
  }

  if (el) {
    var timer = null;
    el.addEventListener(
      "scroll",
      function () {
        if (timer !== null) {
          clearTimeout(timer);
        }
        timer = setTimeout(function () {
          setScroll(el.scrollLeft);
        }, 100);
      },
      false
    );
  }
}

const duration = 15;
// useEffect(() => {
// on resize scroll to the selected button
//   const selected = document.getElementById("selected");
//   function scrollToSelected() {
//     console.log("here");
//     selected.scrollIntoView({
//       behavior: "smooth",
//       block: "end",
//       inline: "nearest",
//     });
//   }
//   if (selected) {
//     setTimeout(scrollToSelected, 400);
//   }
// }, [matches]);

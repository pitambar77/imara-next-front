"use client";

import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function SafariDate({ selected, onSelect }) {
  const today = new Date();

  const [mounted, setMounted] = useState(false);

  const [year, setYear] = useState(selected?.year || today.getFullYear());

  const [selectedMonth, setSelectedMonth] = useState(() => {
    if (!selected?.date) return null;

    const [, month] = selected.date.split("-").map(Number);

    return month - 1;
  });

  const [date, setDate] = useState(() => {
    if (!selected?.date) return null;

    const [year, month, day] = selected.date.split("-").map(Number);

    return new Date(year, month - 1, day);
  });

  const [calendarStartDate, setCalendarStartDate] = useState(() => {
    if (selected?.date) {
      const [year, month] = selected.date.split("-").map(Number);

      return new Date(year, month - 1, 1);
    }

    return new Date(today.getFullYear(), today.getMonth(), 1);
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // -----------------------------------------
  // Check whether month is in the past
  // -----------------------------------------
  const isPastMonth = (monthIndex) => {
    if (year < today.getFullYear()) {
      return true;
    }

    if (year === today.getFullYear()) {
      return monthIndex < today.getMonth();
    }

    return false;
  };

  // -----------------------------------------
  // Select Month
  // -----------------------------------------
  const handleMonthSelect = (monthIndex) => {
    if (isPastMonth(monthIndex)) return;

    setSelectedMonth(monthIndex);

    // IMPORTANT:
    // Do NOT select day 1.
    // Only tell calendar which month to display.
    setDate(null);

    const newMonth = new Date(year, monthIndex, 1);

    setCalendarStartDate(newMonth);

    onSelect({
      month: months[monthIndex],
      year: year,
      date: null,
    });
  };

  // -----------------------------------------
  // Select Actual Date
  // -----------------------------------------
  // const handleDateSelect = (selectedDate) => {
  //   setDate(selectedDate);

  //   onSelect({
  //     month: selectedDate.toLocaleString("en-US", {
  //       month: "short",
  //     }),
  //     year: selectedDate.getFullYear(),
  //     date: selectedDate,
  //   });

  //   setTimeout(() => {
  //     document.getElementById("contact-form")?.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     });
  //   }, 300);
  // };

  const handleDateSelect = (selectedDate) => {
    setDate(selectedDate);

    // Convert selected date to YYYY-MM-DD
    const formattedDate = [
      selectedDate.getFullYear(),
      String(selectedDate.getMonth() + 1).padStart(2, "0"),
      String(selectedDate.getDate()).padStart(2, "0"),
    ].join("-");

    onSelect({
      month: selectedDate.toLocaleString("en-US", {
        month: "short",
      }),
      year: selectedDate.getFullYear(),
      date: formattedDate,
    });

    setTimeout(() => {
      document.getElementById("contact-form")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 300);
  };

  // -----------------------------------------
  // Calendar Previous / Next
  // -----------------------------------------
  const handleCalendarMonthChange = ({ activeStartDate }) => {
    if (activeStartDate) {
      setCalendarStartDate(activeStartDate);
    }
  };

  // -----------------------------------------
  // Previous Year
  // -----------------------------------------
  const previousYear = () => {
    if (year > today.getFullYear()) {
      const newYear = year - 1;

      setYear(newYear);
      setSelectedMonth(null);
      setDate(null);

      onSelect({
        month: "",
        year: newYear,
        date: null,
      });
    }
  };

  // -----------------------------------------
  // Next Year
  // -----------------------------------------
  const nextYear = () => {
    const newYear = year + 1;

    setYear(newYear);
    setSelectedMonth(null);
    setDate(null);

    onSelect({
      month: "",
      year: newYear,
      date: null,
    });
  };

  // =========================================
  // CALENDAR VIEW
  // =========================================
  if (selectedMonth !== null) {
    return (
      <section
        id="safari-date"
        className="w-full bg-[#f7f7f7] py-[55px] sm:py-[60px] lg:py-[70px]"
      >
        <div className="mx-auto w-full max-w-[1140px] px-[30px] sm:px-[40px] lg:px-0">
          <h2 className="!font-cormorant m-0 mb-4 text-3xl text-[#29283b] md:text-4xl lg:text-5xl">
            5. When Are You Planning For The Safari?
          </h2>

          <p className="!font-avenir m-0 mb-6 max-w-[850px] text-[17px] leading-[1.6] text-[#444] md:mb-10">
            Give us an idea on when you are planning to visit Tanzania.
            Approximate dates are perfectly fine.
          </p>

          {/* Calendar */}
          <div className="safari-calendar mx-auto flex w-fit justify-center bg-white">
            <Calendar
              onChange={handleDateSelect}
              // IMPORTANT:
              // null means no date is selected yet
              value={date}
              // Prevent selecting dates before today
              minDate={today}
              // Start calendar on selected month
              activeStartDate={calendarStartDate}
              // Allow calendar Prev / Next buttons
              onActiveStartDateChange={handleCalendarMonthChange}
              prevLabel="‹"
              nextLabel="›"
              prev2Label={null}
              next2Label={null}
              next2AriaLabel={null}
              prev2AriaLabel={null}
            />
          </div>
        </div>

        <style jsx global>{`
          .safari-calendar .react-calendar {
            border: none !important;
            width: 320px;
            
            font-family: inherit;
          }

          .safari-calendar .react-calendar__tile {
            border: none !important;
            outline: none !important;
          }

          .safari-calendar .react-calendar__tile:enabled:focus,
          .safari-calendar .react-calendar__tile:enabled:focus-visible {
            outline: none !important;
            box-shadow: none !important;
          }

          .safari-calendar .react-calendar__tile--active {
            background: #d87028 !important;
            color: white !important;
            border: none !important;
            outline: none !important;
            box-shadow: none !important;
          }

          .safari-calendar .react-calendar__tile--active:enabled:hover,
          .safari-calendar .react-calendar__tile--active:enabled:focus {
            background: #d87028 !important;
            color: white !important;
          }

          .safari-calendar .react-calendar__tile--now {
            background: #fff3cf;
            color: #d87028;
          }

          .safari-calendar .react-calendar__tile--now:enabled:hover {
            background: #fff3cf;
          }

          .safari-calendar button {
            border: none;
            outline: none;
          }
        `}</style>
      </section>
    );
  }

  // =========================================
  // MONTH SELECTION VIEW
  // =========================================
  return (
    <section
      id="safari-date"
      className="w-full bg-[#f7f7f7] py-[55px] sm:py-[60px] lg:py-[70px]"
    >
      <div className="mx-auto w-full max-w-[1140px] px-[30px] sm:px-[40px] lg:px-0">
        <h2 className="!font-cormorant m-0 mb-4 text-3xl font-medium leading-tight text-[#29283b] md:text-4xl lg:text-5xl">
          5. When Are You Planning For The Safari?
        </h2>

        <p className="!font-avenir m-0 mb-6 max-w-[850px] text-[17px] leading-[1.6] text-[#444] md:mb-10">
          Give us an idea on when you are planning to visit Tanzania.
          Approximate dates are perfectly fine.
        </p>

        {/* Month Picker */}
        <div className="w-[300px] max-w-full mx-auto bg-white p-[24px]">
          <div className="rounded-[12px] px-4 py-[2px]">
            {/* Year Navigation */}
            <div className="mb-[42px] flex items-center justify-between">
              <button
                type="button"
                onClick={previousYear}
                disabled={year <= today.getFullYear()}
                className={`cursor-pointer text-3xl leading-none ${
                  year <= today.getFullYear()
                    ? "cursor-not-allowed text-[#d7d7d7]"
                    : "text-[#292929] hover:text-[#d87028]"
                }`}
              >
                ‹
              </button>

              <span className="!font-avenir text-[20px] font-semibold text-[#333]">
                {year}
              </span>

              <button
                type="button"
                onClick={nextYear}
                className="cursor-pointer text-3xl text-[#292929] hover:text-[#d87028]"
              >
                ›
              </button>
            </div>

            {/* Months */}
            <div className="grid grid-cols-4 gap-x-[10px] gap-y-[12px]">
              {months.map((month, index) => {
                const disabled = isPastMonth(index);

                return (
                  <button
                    key={month}
                    type="button"
                    disabled={disabled}
                    onClick={() => handleMonthSelect(index)}
                    className={`!font-avenir h-[52px] text-[17px] transition ${
                      disabled
                        ? "cursor-not-allowed text-[#d7d7d7]"
                        : "cursor-pointer text-[#292929] hover:text-[#d87028]"
                    }`}
                  >
                    {month}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

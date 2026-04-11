import { forwardRef, useState } from "react";

const ClimbingDate = forwardRef(
  ({ scrollToContactInformation, onChange }, ref) => {
    const today = new Date();
    const currentDate = today.getDate();
    const currentMonth = today.getMonth();
    const currentYearToday = today.getFullYear();

    const [selectedDate, setSelectedDate] = useState(null);
    const [view, setView] = useState("year");
    const [currentYear, setCurrentYear] = useState(currentYearToday);
    const [selectedMonth, setSelectedMonth] = useState(null);

    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];

    /* ================= YEAR NAV ================= */
    const handleYearChange = (increment) => {
      const newYear = currentYear + increment;
      if (newYear >= currentYearToday) {
        setCurrentYear(newYear);
      }
    };

    /* ================= MONTH SELECT ================= */
    const handleMonthClick = (monthIndex) => {
      if (
        currentYear === currentYearToday &&
        monthIndex < currentMonth
      ) return;

      setSelectedMonth(monthIndex);
      setView("month");
    };

    /* ================= DATE SELECT ================= */
    const handleDateClick = (day) => {
      if (
        currentYear === currentYearToday &&
        selectedMonth === currentMonth &&
        day < currentDate
      ) return;

      const formattedDate = `${String(day).padStart(2, "0")}-${String(
        selectedMonth + 1
      ).padStart(2, "0")}-${currentYear}`;

      setSelectedDate(new Date(currentYear, selectedMonth, day));
      onChange?.(formattedDate);
      scrollToContactInformation?.();
    };

    const getDaysInMonth = (year, month) =>
      new Date(year, month + 1, 0).getDate();

    const getFirstDayOfMonth = (year, month) =>
      new Date(year, month, 1).getDay();

    /* ================= CALENDAR ================= */
    const renderCalendar = () => {
      const daysInMonth = getDaysInMonth(currentYear, selectedMonth);
      const firstDay = getFirstDayOfMonth(currentYear, selectedMonth);
      const days = [];

      const prevMonthDays = getDaysInMonth(
        selectedMonth === 0 ? currentYear - 1 : currentYear,
        selectedMonth === 0 ? 11 : selectedMonth - 1
      );

      for (let i = firstDay - 1; i >= 0; i--) {
        days.push(
          <div key={`prev-${i}`} className="py-2 text-center text-gray-400">
            {prevMonthDays - i}
          </div>
        );
      }

      for (let day = 1; day <= daysInMonth; day++) {
        const isPast =
          currentYear === currentYearToday &&
          selectedMonth === currentMonth &&
          day < currentDate;

        const isToday =
          !selectedDate &&
          currentYear === currentYearToday &&
          selectedMonth === currentMonth &&
          day === currentDate;

        const isSelected =
          selectedDate &&
          selectedDate.getDate() === day &&
          selectedDate.getMonth() === selectedMonth &&
          selectedDate.getFullYear() === currentYear;

        days.push(
          <div
            key={`day-${day}`}
            onClick={() => !isPast && handleDateClick(day)}
            className={`py-2 text-center rounded cursor-pointer
              ${isPast ? "text-gray-300 cursor-not-allowed" : ""}
              ${isSelected || isToday ? "bg-[#d87028] text-white font-semibold" : ""}
            `}
          >
            {day}
          </div>
        );
      }

      const totalCells = Math.ceil(days.length / 7) * 7;
      for (let i = 1; i <= totalCells - days.length; i++) {
        days.push(
          <div key={`next-${i}`} className="py-2 text-center text-gray-400">
            {i}
          </div>
        );
      }

      return days;
    };

    const isMonthDisabled = (monthIndex) =>
      currentYear === currentYearToday && monthIndex < currentMonth;

    /* ================= ARROW NAV ================= */
    const handleArrowClick = (direction) => {
      if (view === "year") {
        handleYearChange(direction);
        return;
      }

      let newMonth = selectedMonth + direction;
      let newYear = currentYear;

      if (newMonth > 11) {
        newMonth = 0;
        newYear++;
      }

      if (newMonth < 0) {
        newMonth = 11;
        newYear--;
      }

      if (
        newYear < currentYearToday ||
        (newYear === currentYearToday && newMonth < currentMonth)
      ) return;

      setCurrentYear(newYear);
      setSelectedMonth(newMonth);
    };

    return (
      <section
        ref={ref}
        className="py-8 md:py-10 px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28 mx-auto"
      >
        {/* Heading */}
        <div className="mb-10 sm:mb-14 text-center sm:text-left">
          <h2 className="text-2xl md:text-[32px] lg:text-[36px] font-bold text-[#1a1a1a] mb-4 capitalize">
            3. When do you want to climb?
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#555] mb-6 md:mb-10">
            Tell us when you plan to climb Mount Kilimanjaro. Exact dates are optional.
          </p>
        </div>

        <div className="w-[320px] mx-auto sm:mx-0">
          {/* Header */}
          <div className="flex items-center justify-center mb-6 gap-6">
            <button
              onClick={() => handleArrowClick(-1)}
              className="text-xl"
              style={{
                visibility:
                  view === "year" && currentYear === currentYearToday
                    ? "hidden"
                    : "visible",
              }}
            >
              «
            </button>

            <h4 className="font-semibold min-w-[150px] text-center">
              {view === "year"
                ? currentYear
                : `${months[selectedMonth]} ${currentYear}`}
            </h4>

            <button onClick={() => handleArrowClick(1)} className="text-xl">
              »
            </button>
          </div>

          {/* Views */}
          {view === "year" ? (
            <div className="grid grid-cols-4 gap-3">
              {months.map((month, index) => (
                <button
                  key={month}
                  onClick={() => handleMonthClick(index)}
                  disabled={isMonthDisabled(index)}
                  className={`py-3 rounded border border-gray-200 text-sm font-medium cursor-pointer
                    ${
                      index === currentMonth &&
                      currentYear === currentYearToday
                        ? "bg-[#d87028] text-white"
                        : "bg-white "
                    }
                    ${
                      isMonthDisabled(index)
                        ? "text-gray-300 cursor-not-allowed"
                        : "hover:border-[#d87028]"
                    }
                  `}
                >
                  {month}
                </button>
              ))}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-7 gap-2 mb-2">
                {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                  <div
                    key={d}
                    className="text-center text-sm font-semibold text-gray-500"
                  >
                    {d}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-2">
                {renderCalendar()}
              </div>

              <div className="mt-6 text-center">
                <button
                  onClick={() => setView("year")}
                  className="px-6 py-2 rounded bg-[#d87028] text-white"
                >
                  Back to Months
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    );
  }
);

export default ClimbingDate;

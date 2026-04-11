// components/CalendarGrid.jsx
import dayjs from "dayjs";

const CalendarGrid = ({ travelDates, selectedTrip, setSelectedTrip }) => {
  return (
    <div className="bg-white rounded-xl border p-6">
      <h3 className="font-bold text-lg mb-4">Select travel date</h3>

      <div className="grid grid-cols-7 gap-3 text-center">
        {Array.from({ length: 31 }).map((_, i) => {
          const date = `2027-08-${String(i + 1).padStart(2, "0")}`;
          const trip = travelDates.find(t => t.startDate === date);
          const active = selectedTrip?.startDate === date;

          return (
            <button
              key={i}
              disabled={!trip}
              onClick={() => trip && setSelectedTrip(trip)}
              className={`
                h-16 rounded-lg text-sm font-medium
                ${trip ? "bg-orange-100 hover:bg-orange-200" : "bg-gray-100 cursor-not-allowed"}
                ${active && "ring-2 ring-orange-500 bg-orange-300"}
              `}
            >
              <div>{i + 1}</div>
              {trip && <div className="text-xs mt-1">${trip.price}</div>}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarGrid;

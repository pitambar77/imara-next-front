// components/TripSummary.jsx
import dayjs from "dayjs";

const TripSummary = ({ selectedTrip }) => {
  if (!selectedTrip) return null;

  return (
    <div className="bg-white rounded-xl border p-6 sticky top-6">
      <h4 className="text-lg font-bold mb-4">
        {dayjs(selectedTrip.startDate).format("DD MMM YYYY, ddd")}
      </h4>

      <div className="space-y-3 text-sm text-gray-700">
        <p>
          <strong>Start:</strong>{" "}
          {dayjs(selectedTrip.startDate).format("DD MMM YYYY")} – 07:00
        </p>
        <p>
          <strong>End:</strong>{" "}
          {dayjs(selectedTrip.endDate).format("DD MMM YYYY")} – 20:00
        </p>
        <p>
          <strong>Location:</strong> {selectedTrip.location}
        </p>

        <span className="inline-block mt-2 px-3 py-1 text-xs bg-orange-200 rounded-full">
          Age {selectedTrip.ageGroup}
        </span>
      </div>

      <div className="mt-6 bg-orange-100 rounded-lg p-4">
        <p className="text-sm">Total Price</p>
        <p className="text-2xl font-bold">${selectedTrip.price}</p>

        <button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full">
          Continue
        </button>

        <p className="text-xs text-center mt-2 text-gray-500">
          Secure today with AUD $200 deposit
        </p>
      </div>
    </div>
  );
};

export default TripSummary;

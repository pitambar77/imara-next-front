// components/PassengerDetails.jsx
const PassengerDetails = () => {
  return (
    <div className="bg-white rounded-xl border p-6">
      <h3 className="text-xl font-bold mb-4">Passenger Details</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input placeholder="First name" className="input" />
        <input placeholder="Last name" className="input" />
        <input placeholder="Date of Birth" className="input" />
        <input placeholder="Email" className="input" />
      </div>
    </div>
  );
};

export default PassengerDetails;

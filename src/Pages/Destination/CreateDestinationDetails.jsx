// src/pages/Destination/CreateDestination.jsx
import React from "react";
import DestinationDetailsForm from "../../components/Destination/DestinationDetailsForm";


const CreateDestinationDetails = () => {
  return (
    <div className="p-6">
      {/* <DestinationForm onSuccess={() => window.location.href = "/admin/destination/list"} /> */}
    <DestinationDetailsForm/>
    </div>
  );
};

export default CreateDestinationDetails
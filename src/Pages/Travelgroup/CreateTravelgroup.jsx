// import TravelgroupForm from "../../components/Travelgroup/TravelgroupForm";

import TravelgroupForm from "../../components/Travelgroup/TravelgroupForm.jsx";

const CreateTravelgroup = () => {
  return (
    <div className="p-6">
      {/* <TravelgroupForm onSuccess={() => window.location.href = "/admin/travelgroup/list"} /> */}
      <TravelgroupForm/>
    </div>
  );
};

export default CreateTravelgroup;
